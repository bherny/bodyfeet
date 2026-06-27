import { ImageIcon } from "lucide-react";

export function PlaceholderNote({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/25 bg-white/88 px-3 py-1.5 text-xs font-bold text-brand-deep shadow-sm">
      <ImageIcon aria-hidden="true" className="h-3.5 w-3.5" />
      {compact ? "Foto referencial" : "Foto referencial: reemplazar por imagen real"}
    </span>
  );
}
