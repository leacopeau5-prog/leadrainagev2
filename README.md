# Léa Drainage — site web

Site vitrine de l'institut de drainage lymphatique de **Léa** à Reims. Construit avec **Astro 5** + **TypeScript strict** + **Tailwind CSS v4**.

## 🚀 Démarrage

### Prérequis

- [Node.js ≥ 20](https://nodejs.org/) — actuellement **non installé** sur cette machine
- [pnpm ≥ 9](https://pnpm.io/)

Installation recommandée sur macOS :

```bash
# Si Homebrew n'est pas installé :
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Puis :
brew install node pnpm
```

### Installation du projet

```bash
pnpm install
pnpm dev     # lance le serveur de dev sur http://localhost:4321
pnpm build   # build de production → /dist
pnpm preview # preview du build local
pnpm check   # type-check + vérification Astro
```

## 🧭 Structure

```
src/
  assets/logo/           # Logo Léa Drainage
  components/
    layout/              # Header, Footer, Navigation
    sections/            # Sections de pages (Hero, Pillars, FAQ, etc.)
    ui/                  # Primitives (Button, Card, BookingCTA, ContraindicationBox)
  content/
    services/            # Une prestation = un .md (schema Zod validé)
    blog/                # Articles de blog
  content.config.ts      # Schémas des collections
  layouts/               # BaseLayout (SEO, meta, JSON-LD)
  pages/                 # Routes du site
  styles/global.css      # Tokens (couleurs, polices) + base
  utils/
    site.ts              # Config globale (contact, adresse, booking)
    seo.ts               # Helpers JSON-LD / schema.org
public/
  favicon.svg
  robots.txt
```

## 🎨 Charte graphique

Voir **BRAND.md** à la racine. Les tokens sont définis dans `src/styles/global.css` (`@theme`).

## 🧠 Guide éditorial

Voir **CLAUDE.md** — règles de rédaction, accessibilité, SEO, contre-indications médicales.

## 📦 Déploiement Vercel

1. Pousser le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), "New Project" → importer le repo.
3. Vercel détecte Astro automatiquement (`vercel.json` fournit les réglages).
4. Configurer le domaine personnalisé (`lea-drainage.fr`).

## ✅ Checklist avant mise en ligne

- [ ] Remplir `src/utils/site.ts` avec l'adresse, le téléphone, l'email pro, le SIRET
- [ ] Remplacer l'URL `https://cal.com/lea-drainage` par le vrai lien Cal.com de Léa
- [ ] Intégrer les photos pro de Léa et du cabinet (`src/assets/photos/`)
- [ ] Collecter et intégrer 3 vrais témoignages
- [ ] Valider/affiner les textes des fiches prestations avec Léa
- [ ] Activer la carte Leaflet quand l'adresse précise sera confirmée
- [ ] Ajouter Tarteaucitron + GA4 (cookies)
- [ ] Lancer un audit Lighthouse (cible : 95+ sur toutes les métriques)
```
