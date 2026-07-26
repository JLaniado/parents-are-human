import type { Language } from "../types";

const categoryTranslations: Record<string, { en: string; es: string }> = {
  Identity: { en: "Identity", es: "Identidad" },
  "Life Events": { en: "Life Events", es: "Eventos de vida" },
  Wisdom: { en: "Wisdom", es: "Sabiduría" },
  Relationships: { en: "Relationships", es: "Relaciones" },
  Action: { en: "Action", es: "Acción" },
  Adulthood: { en: "Adulthood", es: "Adultez" },
};

export function translateCategory(category: string, language: Language): string {
  return categoryTranslations[category]?.[language] ?? category;
}
