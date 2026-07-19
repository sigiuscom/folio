# folio

Портфолио-сайт Sigius. Публикуется на [sigius.com](https://sigius.com).

## Стек

- Vite + React 18 + TypeScript
- shadcn-ui (Radix) + Tailwind CSS
- react-router, react-query, zod

## Разработка

```bash
npm i           # установка зависимостей
npm run dev     # dev сервер с hot-reload
npm run lint    # eslint
npm test        # vitest run
npm run build   # production build -> dist/
npm run preview # локальный preview собранного билда
```

Требуется Node.js и npm.

## Деплой

CI/CD через GitHub Actions (`.github/workflows/ci-cd-deployment.yml`):

- триггер: push/PR в `master`, runner `aks-self-hosted`
- шаги: `npm ci` -> lint -> test -> build
- на push в `master` собранный `dist/` деплоится в ветку `deployment` (GitHub Pages), домен `sigius.com` (CNAME)
