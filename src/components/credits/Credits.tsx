import type { Language } from "../../types";
import { creditsStyles, link } from "./Credits.css";

interface CreditsProps {
  language: Language;
}

const copy = {
  en: {
    before: "Unofficial fan project inspired by",
    after: ". Not affiliated with or endorsed by them. If you like it, go buy the",
    linkText2: "official deck",
    end: "!",
  },
  es: {
    before: "Proyecto de fans no oficial inspirado en",
    after: ". No está afiliado ni respaldado por ellos. Si te gusta, compra la",
    linkText2: "baraja oficial",
    end: "!",
  },
};

function Credits({ language }: CreditsProps) {
  const t = copy[language];
  return (
    <div className={creditsStyles}>
      {t.before}{" "}
      <a className={link} href="https://parentsarehuman.com" target="_blank" rel="noreferrer">
        Parents Are Human
      </a>
      {t.after}{" "}
      <a className={link} href="https://parentsarehuman.com" target="_blank" rel="noreferrer">
        {t.linkText2}
      </a>
      {t.end}
    </div>
  );
}

export default Credits;
