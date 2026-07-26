export type Language = "en" | "es";

export type Level = 1 | 2;

export type CardType = "question" | "action";

export interface GameCard {
  id: number;
  type: CardType;
  category: string;
  level: Level;
  en: string;
  es: string;
}

export type DeckKey = `${Level}-${"solo" | "withActions"}`;
