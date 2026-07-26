# Parents Are Human

Play it here: **[jlaniado.github.io/parents-are-human](https://jlaniado.github.io/parents-are-human/)**

A bilingual (English/Spanish) connection card game designed to spark deep conversations between you and your loved ones. This is a web recreation of the [Parents Are Human](https://parentsarehuman.com) card game, built in the spirit of [We're Not Really Strangers](https://github.com/munjoonteo/wnrs).

## How to play

- Pick a **Question Card** (blue). Everyone answers the same card, then move to the next.
- Feeling courageous, playful, or both? Turn on **Include Actions** to shuffle in **Action Cards** (red).
- Start on **Level 1** and move to **Level 2** when it feels right — each card is tagged with 1 or 2 chili peppers for how deep it digs.
- Switch between **EN** and **ES** at any time; the deck and history stay put.
- Tap **?** for the full "How to Play" / "About the Cards" reference.

## Features

- 70 cards (50 questions, 20 actions) transcribed from the original card graphics, each with a category, a level (1 or 2), and English + Spanish text
- Four independent shuffled decks (Level × Include Actions) that resume where you left off when you switch toggles
- Shuffle, Next Card, and a scrollable history of previously drawn cards
- Fully responsive, mobile-first layout meant to be used on a phone during an actual conversation

## Tech stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vitejs.dev)
- [vanilla-extract](https://vanilla-extract.style) for zero-runtime CSS-in-TS
- [Fontsource](https://fontsource.org) (Zilla Slab, Nunito), self-hosted — no external font requests
- Deployed to [GitHub Pages](https://pages.github.com) via GitHub Actions on every push to `main`

## Local development

```bash
npm install
npm run dev
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/        card content (cards.ts, about.ts) and category translations
  components/  Card, Controls, CardHistory, AboutModal, Credits, PepperIcon
  styles/      vanilla-extract theme tokens and global resets
  App.tsx      deck state (level/actions/history) and layout
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages automatically.

## Credits

Inspired by [Parents Are Human](https://parentsarehuman.com). Not an official product of Parents Are Human.
