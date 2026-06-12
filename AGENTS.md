# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Что это

Портфолио-сайт на React + Vite + TypeScript (git remote `sigiuscom/folio`).
Изначально сгенерирован Lovable; стек: Vite, React 18, shadcn-ui (Radix), Tailwind CSS, react-router, react-query, zod.

## Команды

```bash
npm i           # установка зависимостей
npm run dev     # dev сервер с hot-reload
npm run lint    # eslint
npm test        # vitest run
npm run build   # production build -> dist/
npm run preview # локальный preview собранного билда
```

## Деплой

GitHub Actions `.github/workflows/ci-cd-deployment.yml`:
- триггер: push/PR в `master`
- runner: `aks-self-hosted`
- шаги: `npm ci` -> lint -> test -> build
- на push в `master` деплой `dist/` в ветку `deployment` (GitHub Pages), CNAME `sigius.com`

## Связанное

- Operational hub: `../CLAUDE.md`
