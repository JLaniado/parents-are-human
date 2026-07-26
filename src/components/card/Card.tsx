import clsx from "clsx";

import { translateCategory } from "../../data/categories";
import PepperIcon from "../pepper/PepperIcon";
import {
  actionVariant,
  bodyWrap,
  cardStyles,
  cardText,
  categoryLabel,
  finishedText,
  footer,
  headerRow,
  questionVariant,
  rule,
  smallCardStyles,
  smallCardText,
} from "./Card.css";
import type { Language } from "../../types";
import type { GameCard } from "../../types";

interface CardProps {
  card: GameCard | null;
  language: Language;
  size?: "large" | "small";
  finishedMessage?: string;
}

function Card({ card, language, size = "large", finishedMessage }: CardProps) {
  const variantClass = card?.type === "action" ? actionVariant : questionVariant;
  const isSmall = size === "small";

  return (
    <div className={clsx(cardStyles, variantClass, isSmall && smallCardStyles)}>
      {card ? (
        <>
          <div className={headerRow}>
            <PepperIcon count={card.level} />
            <span className={categoryLabel}>{translateCategory(card.category, language)}</span>
          </div>
          {!isSmall && <hr className={rule} />}
          <div className={isSmall ? undefined : bodyWrap}>
            <p className={isSmall ? smallCardText : cardText}>{card[language]}</p>
          </div>
          {!isSmall && <div className={footer}>Parents Are Human</div>}
        </>
      ) : (
        <div className={bodyWrap}>
          <p className={finishedText}>{finishedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
