import {
  Activity,
  BadgeCheck,
  Brain,
  Clock3,
  Footprints,
  HandHeart,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Waves,
} from "lucide-react";

export const siteConfig = {
  name: "BODY FEET",
  legalName: "BODY FEET Centro de Podología y Rehabilitación",
  slogan: "Tu recuperación es nuestra prioridad",
  url: "https://www.bodyfeet.pe",
  whatsapp: "51951582511",
  phone: "951582511",
  facebook: "https://www.facebook.com/share/18jB3K2A6w/",
  tiktok: "https://www.tiktok.com/@bodyfeetcentro",
  pendingEmail: "Correo electrónico pendiente de entrega por el cliente",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.2439793970934!2d-76.89058481759064!3d-12.087676934796109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c10b5f8f43cd%3A0x1a12a3ba88d9eb96!2sCentro%20De%20Podolog%C3%ADa%20Y%20Rehabilitaci%C3%B3n%22%20Body%20Feet%22!5e0!3m2!1ses-419!2spe!4v1782580549303!5m2!1ses-419!2spe",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Centro%20De%20Podolog%C3%ADa%20Y%20Rehabilitaci%C3%B3n%20Body%20Feet",
  seo: {
    title: "BODY FEET | Podología clínica y rehabilitación en La Molina",
    description:
      "Centro de podología clínica, plantillas ortopédicas, rehabilitación física, quiropráctica, enfermería, cosmiatría y craneopuntura en La Molina.",
  },
};

export const differentiators = [
  {
    title: "Sin límite de tiempo",
    description:
      "No trabajan con sesiones de 45 minutos. Cada paciente recibe el tiempo que realmente necesita para su recuperación.",
    icon: Clock3,
  },
  {
    title: "Resultados desde la primera sesión",
    description:
      "El enfoque integral busca avances notables desde el primer contacto, sin tratamientos indefinidos.",
    icon: BadgeCheck,
  },
  {
    title: "Tecnología de vanguardia",
    description:
      "Láser de alta intensidad, ondas de choque y equipos de última generación para una recuperación más rápida y efectiva.",
    icon: Waves,
  },
  {
    title: "Técnicas complementarias",
    description:
      "Integran acupuntura, craneopuntura y otras técnicas milenarias con medicina moderna para un tratamiento eficiente.",
    icon: Sparkles,
  },
];

export const services = [
  {
    title: "Podología clínica y plantillas ortopédicas",
    description:
      "Diagnóstico y tratamiento de patologías del pie. Elaboración de plantillas a medida para corregir la pisada y aliviar dolores en cadenas posturales.",
    benefits: ["Alivio del dolor desde la primera sesión", "Corrección postural y de marcha", "Plantillas personalizadas"],
    image: "/photos/podology-insoles.webp",
    accent: "sky",
    icon: Footprints,
  },
  {
    title: "Terapia física y rehabilitación",
    description:
      "Tratamiento especializado en neurología, traumatología, reumatología y lesiones deportivas. Plan individualizado para cada paciente.",
    benefits: ["Recuperación funcional completa", "Protocolo adaptado a cada caso", "Seguimiento continuo"],
    image: "/photos/rehab-therapy.webp",
    accent: "blue",
    icon: Activity,
  },
  {
    title: "Quiropráctica",
    description:
      "Ajustes vertebrales y articulares para restaurar la movilidad, aliviar dolores musculoesqueléticos y mejorar el funcionamiento del sistema nervioso.",
    benefits: ["Alivio inmediato del dolor", "Mejora de la movilidad", "Sin medicamentos"],
    image: "/photos/chiropractic-care.webp",
    accent: "lilac",
    icon: HandHeart,
  },
  {
    title: "Enfermería",
    description:
      "Atención de enfermería integral: curaciones, administración de medicamentos, control de signos vitales y procedimientos clínicos especializados.",
    benefits: ["Atención segura y profesional", "Procedimientos con esterilidad", "Seguimiento del paciente"],
    image: "/photos/clinical-procedure.webp",
    accent: "deep",
    icon: Syringe,
  },
  {
    title: "Cosmiatría",
    description:
      "Tratamientos estéticos y de salud de la piel con tecnología avanzada. Cuidado integral del rostro y cuerpo bajo criterio médico-estético.",
    benefits: ["Resultados visibles y duraderos", "Protocolos personalizados", "Supervisión especializada"],
    image: "/photos/cosmiatry-care.webp",
    accent: "sky",
    icon: Sparkles,
  },
  {
    title: "Craneopuntura",
    description:
      "Técnica milenaria complementaria que combina acupuntura en zonas específicas del cráneo para tratar alteraciones neurológicas, dolor y rehabilitación motora.",
    benefits: ["Técnica milenaria comprobada", "Sin efectos secundarios", "Complementa la rehabilitación convencional"],
    image: "/photos/complementary-therapy.webp",
    accent: "lilac",
    icon: Brain,
  },
];

export const locations = [
  {
    name: "Sede Flora Tristán",
    address: "Av. Flora Tristán 952, La Molina",
    phone: "979084842",
    hours: "9:00 a.m. a 7:00 p.m.",
    isMain: false,
    mapsStatus: "Mapa referencial disponible en esta página",
  },
  {
    name: "Sede principal Musa",
    address: "Urb. Musa, Calle Los Azahares Mz 15 Lote 12, La Molina",
    phone: "951582511",
    hours: "9:00 a.m. a 8:30 p.m.",
    isMain: true,
    mapsStatus: "Mapa oficial disponible en esta página",
  },
  {
    name: "Sede Manchay",
    address: "Calle 57, Mz. N Lt. 12, Huertos de Manchay, costado de la Municipalidad",
    phone: "941501357",
    hours: "9:00 a.m. a 7:00 p.m.",
    isMain: false,
    mapsStatus: "Mapa referencial disponible en esta página",
  },
];

export const values = [
  "Tiempo sin límites",
  "Excelencia clínica",
  "Trato humano",
  "Innovación continua",
  "Ética profesional",
];

export const goals = [
  "Conseguir más pacientes",
  "Aumentar ventas de productos",
  "Mostrar las tres sedes",
  "Mejorar imagen profesional",
  "Facilitar reservas",
  "Captar nuevos clientes",
];

export const stats = [
  { value: "+10", label: "años en el mercado" },
  { value: "3", label: "sedes de atención" },
  { value: "6", label: "líneas de servicio" },
];

export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Sedes", href: "#sedes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const trustItems = [
  { label: "Atención integral", icon: HeartPulse },
  { label: "Tecnología avanzada", icon: Stethoscope },
  { label: "Procedimientos seguros", icon: ShieldCheck },
  { label: "Tres sedes", icon: MapPin },
  { label: "Contacto directo", icon: Phone },
];
