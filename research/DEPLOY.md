# Deploy — link pubblico

Il sito è pronto in locale (`npm run build && npm start`). Per il link pubblico servono **login** su GitHub e Vercel (in questa macchina non erano attivi al momento del setup).

## 1. GitHub (repo pubblica)

```bash
cd ~/Projects/giammarco-portfolio
gh auth login
gh repo create giammarco-portfolio --public --source=. --remote=origin --push
```

Se la repo esiste già:

```bash
git remote add origin git@github.com/giammarcosharp/giammarco-portfolio.git
git branch -M main
git push -u origin main
```

## 2. Vercel (URL pubblico)

```bash
npx vercel login
npx vercel link
npx vercel deploy --prod
```

Oppure importa la repo da [vercel.com/new](https://vercel.com/new) e collega `giammarcosharp/giammarco-portfolio`.

URL atteso: `https://giammarco-portfolio.vercel.app` (o simile).

## 3. Dopo il deploy

- Aggiorna CTA in `src/app/contatto/page.tsx` (email / Calendly).
- Incolla l’estratto da Claude/Gemini in `research/memory-extract.md` e aggiorna le schede in `content/works/`.
- Rispondi alle domande in `content/interview.md`.
