import Card from "../card/Card";
import { historyStyles, historyTitleStyles, scrollRow } from "./CardHistory.css";
import type { GameCard, Language } from "../../types";

interface CardHistoryProps {
  history: GameCard[];
  language: Language;
}

const title = { en: "Previous Cards", es: "Tarjetas Anteriores" };

function CardHistory({ history, language }: CardHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className={historyStyles}>
      <div className={historyTitleStyles}>{title[language]}</div>
      <div className={scrollRow}>
        {history.map((card) => (
          <Card key={card.id} card={card} language={language} size="small" />
        ))}
      </div>
    </div>
  );
}

export default CardHistory;
