import clsx from "clsx";

import type { Language, Level } from "../../types";
import {
  controlsWrap,
  segmentButton,
  segmentButtonActive,
  segmentedGroup,
  switchThumb,
  switchThumbOn,
  switchTrack,
  toggleRow,
} from "./Controls.css";

interface ControlsProps {
  level: Level;
  onLevelChange: (level: Level) => void;
  includeActions: boolean;
  onIncludeActionsChange: (value: boolean) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const copy = {
  en: { level1: "Level 1", level2: "Level 2", actions: "Include Actions" },
  es: { level1: "Nivel 1", level2: "Nivel 2", actions: "Incluir Acciones" },
};

function Controls({
  level,
  onLevelChange,
  includeActions,
  onIncludeActionsChange,
  language,
  onLanguageChange,
}: ControlsProps) {
  const t = copy[language];

  return (
    <div className={controlsWrap}>
      <div className={segmentedGroup}>
        <button
          className={clsx(segmentButton, level === 1 && segmentButtonActive)}
          onClick={() => onLevelChange(1)}
        >
          {t.level1}
        </button>
        <button
          className={clsx(segmentButton, level === 2 && segmentButtonActive)}
          onClick={() => onLevelChange(2)}
        >
          {t.level2}
        </button>
      </div>

      <div className={toggleRow}>
        <span>{t.actions}</span>
        <button
          className={switchTrack}
          role="switch"
          aria-checked={includeActions}
          onClick={() => onIncludeActionsChange(!includeActions)}
        >
          <span className={clsx(switchThumb, includeActions && switchThumbOn)} />
        </button>
      </div>

      <div className={segmentedGroup}>
        <button
          className={clsx(segmentButton, language === "en" && segmentButtonActive)}
          onClick={() => onLanguageChange("en")}
        >
          EN
        </button>
        <button
          className={clsx(segmentButton, language === "es" && segmentButtonActive)}
          onClick={() => onLanguageChange("es")}
        >
          ES
        </button>
      </div>
    </div>
  );
}

export default Controls;
