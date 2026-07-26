import React from "react";

import AboutModal from "./components/about/AboutModal";
import Card from "./components/card/Card";
import Controls from "./components/controls/Controls";
import Credits from "./components/credits/Credits";
import CardHistory from "./components/history/CardHistory";
import { cards } from "./data/cards";
import {
  actionRow,
  appStyles,
  headerButtonsStyles,
  headerStyles,
  iconButtonStyles,
  nextButtonStyles,
  shuffleButtonStyles,
  titleStyles,
} from "./styles/app.css";
import type { DeckKey, GameCard, Language, Level } from "./types";
import { shuffle } from "./utils/shuffle";

const cardsById = new Map<number, GameCard>(cards.map((card) => [card.id, card]));

function deckKey(level: Level, includeActions: boolean): DeckKey {
  return `${level}-${includeActions ? "withActions" : "solo"}`;
}

function buildDeck(level: Level, includeActions: boolean): number[] {
  const pool = cards.filter(
    (card) => card.level === level && (card.type === "question" || includeActions),
  );
  return shuffle(pool.map((card) => card.id));
}

function buildInitialDecks(): Record<DeckKey, number[]> {
  const decks = {} as Record<DeckKey, number[]>;
  for (const level of [1, 2] as Level[]) {
    for (const includeActions of [false, true]) {
      decks[deckKey(level, includeActions)] = buildDeck(level, includeActions);
    }
  }
  return decks;
}

interface GameState {
  decks: Record<DeckKey, number[]>;
  history: number[];
}

type GameAction =
  | { type: "next"; key: DeckKey }
  | { type: "shuffle"; key: DeckKey; level: Level; includeActions: boolean };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "next": {
      const queue = state.decks[action.key];
      if (queue.length === 0) return state;
      const [drawnId, ...rest] = queue;
      return {
        decks: { ...state.decks, [action.key]: rest },
        history: [drawnId, ...state.history],
      };
    }
    case "shuffle": {
      return {
        ...state,
        decks: { ...state.decks, [action.key]: buildDeck(action.level, action.includeActions) },
      };
    }
  }
}

function initGameState(): GameState {
  return { decks: buildInitialDecks(), history: [] };
}

const finishedMessage = {
  en: "You have finished this level!",
  es: "¡Has terminado este nivel!",
};

function App() {
  const [language, setLanguage] = React.useState<Language>("en");
  const [level, setLevel] = React.useState<Level>(1);
  const [includeActions, setIncludeActions] = React.useState(false);
  const [state, dispatch] = React.useReducer(gameReducer, undefined, initGameState);
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const activeKey = deckKey(level, includeActions);
  const activeQueue = state.decks[activeKey];
  const currentCard = activeQueue.length > 0 ? (cardsById.get(activeQueue[0]) ?? null) : null;

  function handleNext() {
    dispatch({ type: "next", key: activeKey });
  }

  function handleShuffle() {
    dispatch({ type: "shuffle", key: activeKey, level, includeActions });
  }

  const historyCards = state.history
    .map((id) => cardsById.get(id))
    .filter((c): c is GameCard => !!c);

  return (
    <div className={appStyles}>
      <header className={headerStyles}>
        <div className={titleStyles}>Parents Are Human</div>
        <div className={headerButtonsStyles}>
          <button className={iconButtonStyles} onClick={() => setAboutOpen(true)} aria-label="How to play">
            ?
          </button>
        </div>
      </header>

      <Controls
        level={level}
        onLevelChange={setLevel}
        includeActions={includeActions}
        onIncludeActionsChange={setIncludeActions}
        language={language}
        onLanguageChange={setLanguage}
      />

      <Card card={currentCard} language={language} finishedMessage={finishedMessage[language]} />

      <div className={actionRow}>
        <button className={shuffleButtonStyles} onClick={handleShuffle}>
          {language === "en" ? "Shuffle" : "Barajar"}
        </button>
        <button className={nextButtonStyles} onClick={handleNext} disabled={!currentCard}>
          {language === "en" ? "Next Card" : "Siguiente Tarjeta"}
        </button>
      </div>

      <CardHistory history={historyCards} language={language} />

      <Credits />

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} language={language} />
    </div>
  );
}

export default App;
