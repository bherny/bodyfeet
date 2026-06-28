import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sanitizeText } from "@/lib/utils";

export const runtime = "nodejs";

const requestSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(20),
  service: z.string().min(1).max(120),
  location: z.string().min(1).max(80),
  message: z.string().min(8).max(800),
  company: z.string().max(0).optional(),
});

const submissions = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const current = submissions.get(ip);

  if (!current || current.resetAt < now) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= LIMIT) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: sanitizeText(parsed.data.name, 80),
    phone: sanitizeText(parsed.data.phone, 20),
    service: sanitizeText(parsed.data.service, 120),
    location: sanitizeText(parsed.data.location, 80),
    message: sanitizeText(parsed.data.message, 800),
    contactTo: process.env.CONTACT_TO_EMAIL ?? "contact@bodyfeet.example",
  };

  console.info("BODY FEET contact request ready for integration", payload);

  return NextResponse.json({ ok: true });
}
