# CLAUDE.md — Léa Drainage

> **Fichier de contexte maître pour Claude Code.** À lire intégralement avant toute intervention sur le projet.
> Dernière mise à jour : avril 2026

---

## 🎯 Contexte du projet

**Nom du site** : Léa Drainage
**Activité** : Institut de massage drainage lymphatique — praticienne unique (Léa)
**Statut juridique** : Auto-entrepreneur en cours d'immatriculation (SIRET à fournir avant mise en ligne)
**Zone d'exercice** : Reims et agglomération
**Lieu d'exercice** : Location d'une cabine au sein d'un autre établissement (adresse exacte à préciser)

**Positionnement** : Quadruple approche — bien-être & détente, esthétique & silhouette, médical & post-opératoire, sportif & récupération. Le site doit refléter cette polyvalence sans se limiter à un seul univers.

**Niveau de gamme** : Milieu de gamme accessible — ton professionnel et chaleureux, sans luxe ostentatoire.

**Cibles clientèle** :
- Jeunes femmes 20-35 ans (esthétique, silhouette)
- Femmes actives 35-55 ans (bien-être, anti-fatigue)
- Femmes 55+ (santé, circulation)
- Futures et jeunes mamans (pré/post-partum)
- Post-chirurgie esthétique (drainage post-op)

**Méthode(s) de drainage** : À préciser par Léa (Renata França, Vodder, Leduc ou autre). **Action Claude Code** : Prévoir un composant `<MethodBadge />` dynamique, rempli plus tard.

---

## 🚀 Objectif business du site

**Action unique recherchée** : Amener le visiteur à **prendre rendez-vous via Cal.com ou Calendly**. Tous les CTA pointent vers cette plateforme.

**Pas de** : paiement en ligne, vente de produits, newsletter, formulaire long. Le site est un outil de **conversion simple** : inspirer confiance → rassurer → réserver.

**SEO local prioritaire** : Le site doit permettre à Léa d'être trouvée sur des requêtes type *"drainage lymphatique Reims"*, *"massage post-opératoire Reims"*, *"Renata França Reims"*, etc. Optimisation GMB (Google My Business) à synchroniser avec le site.

---

## 🛠️ Stack technique

| Élément | Choix | Justification |
|---|---|---|
| Framework | **Astro** (dernière version stable) | Site statique, SEO-friendly, performance max |
| Langage | **TypeScript** (strict) | Robustesse, autocomplétion |
| Styles | **Tailwind CSS** (intégration Astro officielle) | Rapidité de développement, mobile-first natif |
| Composants | Astro natif (`.astro`) | Pas de React sauf nécessité (ex: calendrier embed) |
| Images | `astro:assets` (composant `<Image />`) | Optimisation WebP/AVIF, lazy loading |
| Icônes | `astro-icon` + Lucide | Léger, tree-shaké |
| Fonts | **Fontsource** (auto-hébergement) | RGPD-compliant, pas de CDN externe |
| CMS | **Decap CMS** (ex-Netlify CMS) | Gratuit, Git-based, pas de BDD, permet à Léa d'éditer le blog |
| Analytics | **Google Analytics 4** + bandeau **Tarteaucitron** | Tracking standard avec consentement RGPD |
| Réservation | **Cal.com ou Calendly** (embed iframe + lien direct) | À confirmer — préférence Cal.com (open-source, meilleur UX) |
| Versioning | **GitHub** (repo privé) | Standard |
| Hébergement | **Hostinger** (formule statique ou mutualisée) | Build statique uploadé via FTP/SSH ou Git |
| Gestionnaire paquets | `pnpm` | Plus rapide que npm, meilleure gestion du disk |

### ⚠️ Notes importantes sur l'hébergement Hostinger

- Hostinger propose du mutualisé classique (PHP) et des plans web spécifiques. Pour un Astro statique, n'importe lequel fonctionne.
- **Config `astro.config.mjs`** : `output: 'static'` (pas de SSR nécessaire).
- **Déploiement** : le dossier `dist/` généré par `pnpm build` est uploadé via FTP/SSH ou via l'outil de déploiement Git de Hostinger.
- **Alternative à envisager** : déployer sur **Vercel/Netlify** (gratuit, meilleures perfs, déploiement auto à chaque push) et garder Hostinger uniquement pour l'email pro. À discuter.

---

## 🎨 Charte graphique

> ⚠️ **Charte graphique fournie par le client (Mathieu).** Elle sera placée dans `/BRAND.md` à la racine du projet, ainsi que le logo dans `/src/assets/logo/`.

### Univers visuel validé
- **Ambiance** : douce, apaisante, notes d'agrumes (palette pastel + touches vives agrumes)
- **Inspiration de référence** : sites de kinés/ostéos modernes (ton pro/santé, pas spa tamisé)
- **Densité** : équilibre espace blanc / contenu (ni trop aéré façon luxe, ni trop dense)
- **Illustrations** : icônes SVG discrètes, avec parcimonie (pas d'illustrations dessinées partout)
- **Animations** : subtiles, `fade-in` au scroll uniquement (pas d'effets wow)

### Typographie
Polices issues de **Canva** — à identifier précisément. Plusieurs cas possibles :
1. Police **Google Fonts renommée par Canva** → auto-hébergement via Fontsource, facile.
2. Police **propriétaire Canva** → trouver un équivalent libre de droits le plus proche. Claude Code doit proposer 2-3 alternatives si le cas se présente.

**Action Claude Code** : à la lecture du `BRAND.md`, identifier chaque police et documenter son origine dans un bloc commentaire de `tailwind.config.mjs`.

### Convention d'implémentation
- Couleurs déclarées en **variables CSS** dans `src/styles/global.css`, puis mappées dans `tailwind.config.mjs` (section `theme.extend.colors`).
- **Interdiction** de hardcoder une couleur dans un composant — toujours via classe Tailwind (`bg-primary`, `text-accent`) ou `var(--color-xxx)`.

Exemple (à adapter à la charte réelle) :
```css
:root {
  --color-primary: #...;        /* Couleur principale de la marque */
  --color-accent: #...;         /* Accent agrumes */
  --color-soft: #...;           /* Pastel doux */
  --color-neutral-50: #fafafa;
  --color-neutral-900: #1a1a1a;
  --font-heading: 'Nom police titres', serif;
  --font-body: 'Nom police corps', sans-serif;
}
```

---

## 📁 Structure du projet

```
lea-drainage/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── assets/
│   │   ├── logo/                   # Logo fourni (SVG + PNG)
│   │   ├── photos/                 # Photos Léa & cabinet (à shooter)
│   │   └── illustrations/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── Benefits.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQ.astro
│   │   │   └── CTASection.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── BookingCTA.astro    # Bouton universel RDV
│   │       └── ContraindicationBox.astro
│   ├── content/
│   │   ├── config.ts               # Schémas Zod des collections
│   │   ├── services/               # Une prestation = un .md
│   │   │   ├── drainage-classique.md
│   │   │   ├── post-operatoire.md
│   │   │   └── cure-silhouette.md
│   │   └── blog/                   # Articles SEO
│   ├── layouts/
│   │   ├── BaseLayout.astro        # SEO, meta, header, footer
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro             # Accueil
│   │   ├── prestations/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro        # Génération dynamique
│   │   ├── a-propos.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── seo.ts                  # Helpers schema.org
│       └── cal.ts                  # Config embed Cal.com
├── public/admin/                   # Decap CMS (si activé)
│   ├── config.yml
│   └── index.html
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── BRAND.md                        # Charte graphique (fournie par Mathieu)
└── CLAUDE.md                       # Ce fichier
```

---

## 📄 Pages & contenus

### 1. Accueil (`/`)
- **Hero** : photo Léa en situation (à shooter) + slogan + CTA "Réserver ma séance"
- **Accroche courte** : phrase qui résume la promesse (à rédiger avec Léa)
- **4 piliers du positionnement** : bien-être / esthétique / médical / sport (4 cards icônes)
- **Présentation brève de Léa** : 3-4 lignes + CTA vers `/a-propos`
- **Aperçu prestations** : 3 cards vers les pages détail
- **Bénéfices du drainage** : 4-6 bénéfices courts (SVG + texte)
- **Témoignages** : 3 témoignages (à collecter)
- **FAQ courte** : 4-5 questions essentielles (inline, pas de page dédiée)
- **CTA final** : bloc contact + carte + bouton RDV

### 2. À propos (`/a-propos`)
- Parcours de Léa, formation, certifications
- Méthode pratiquée et philosophie
- Photos (à shooter)
- CTA RDV

### 3. Prestations (`/prestations`)
- **Liste** : grille des prestations (1 à 3 pour l'instant)
- **Page détail** `/prestations/[slug]` pour chaque :
  - Description détaillée
  - Indications / à qui ça s'adresse
  - **⚠️ Contre-indications médicales claires** (obligatoire sur CHAQUE prestation — composant `<ContraindicationBox />` dédié)
  - Déroulé d'une séance
  - Durée, fréquence recommandée
  - Lien direct vers Cal.com (avec slot pré-sélectionné si possible)
  - Prix **non affiché sur le site** → visible uniquement sur Cal.com
  - Mention forfaits/cures (ex: cure de 5 séances)

### 4. Blog (`/blog`)
- Essentiel pour le SEO local
- Articles longs, informationnels (1500+ mots idéalement)
- Exemples de sujets à prévoir :
  - "Drainage lymphatique : tout comprendre"
  - "Drainage post-opératoire : pourquoi et quand ?"
  - "Combien de séances pour voir des résultats ?"
  - "Drainage pendant la grossesse : ce qu'il faut savoir"
- **Gestion via Decap CMS** pour permettre à Léa d'ajouter des articles sans dev.

### 5. Contact (`/contact`)
- Adresse complète, horaires
- Téléphone + WhatsApp (clic direct)
- Carte (**OpenStreetMap via Leaflet** — pas Google Maps pour éviter cookies tiers)
- Embed Cal.com (ou gros bouton si performance)
- Pas de formulaire long (le site pousse vers Cal.com)

### 6. Pages légales
- `/mentions-legales` : obligatoires (identité, hébergeur, SIRET dès qu'il est dispo)
- `/politique-confidentialite` : conforme RGPD (GA4, cookies, Cal.com)
- Mention **cookies gérée par Tarteaucitron** (bandeau global)

---

## ✅ Conventions de code

### Général
- **TypeScript strict** : pas de `any` implicite, `noUncheckedIndexedAccess: true`.
- **Nommage** : composants `PascalCase.astro`, pages/dossiers `kebab-case`.
- **Alias d'imports** dans `tsconfig.json` : `@/components`, `@/layouts`, `@/assets`, `@/utils`.
- **Commentaires en français** quand ils sont métier, en anglais quand purement technique.

### Composants Astro
- Une responsabilité par composant. Si > 150 lignes → découper.
- Props typées via `interface Props` en haut du frontmatter.
- **Pas de JS côté client** sauf nécessité réelle (embed calendrier, menu mobile, bandeau cookies).
- Pour l'interactivité minimale : `<script>` inline Astro. Pas de framework React/Vue sauf si réellement justifié.

### Styles
- **Tailwind d'abord**, CSS custom uniquement si vraiment nécessaire.
- **Mobile-first** : base = mobile, puis `md:`, `lg:`.
- Breakpoints : tester systématiquement à **360px, 768px, 1280px, 1920px**.
- `@apply` évité sauf patterns très répétés.

### Accessibilité (a11y)
- Contraste minimum **AA**, viser **AAA** sur le texte courant.
- `alt` systématique sur toutes les images (`alt=""` si purement décoratif).
- Focus visibles sur tous les éléments interactifs.
- Un seul `<h1>` par page, hiérarchie cohérente.
- Skip-link vers le contenu principal.

### Performance
- **Cible Lighthouse : 95+ sur toutes les métriques**.
- Images exclusivement via `<Image />` d'Astro (pas de `<img>` sauf logo SVG inline).
- Fonts subsettées latin, `font-display: swap`.
- Pas de lib JS lourde côté client (pas de jQuery, pas de Bootstrap JS, etc.).
- CSS inlinée pour le critical path.

### SEO
- `<title>` et `<meta description>` **uniques et rédigés** pour chaque page (pas de template générique).
- **Open Graph + Twitter Cards** complets via `BaseLayout.astro`.
- **Données structurées schema.org** :
  - `LocalBusiness` + `HealthAndBeautyBusiness` sur l'accueil (adresse, horaires, téléphone, géoloc)
  - `Service` sur chaque page prestation
  - `FAQPage` sur les FAQ
  - `BlogPosting` sur chaque article
  - `BreadcrumbList` sur toutes les pages internes
- **Sitemap** : généré auto via `@astrojs/sitemap`.
- **robots.txt** dans `/public`.
- **URLs propres** : `/a-propos` (pas `/à-propos`), `/drainage-lymphatique-reims` plutôt que `/prestation-1`.
- **SEO local** : page `/contact` enrichie au max (adresse, géoloc, horaires), avec microdonnées.

### RGPD
- **Bandeau Tarteaucitron** pour GA4 (pas de tracking sans consentement).
- **Google Fonts interdits** en CDN → auto-hébergement via Fontsource.
- **Cal.com / Calendly** : mentionnés dans la politique de confidentialité (transfert de données).
- **Pas de pixel Facebook / Meta** sauf demande explicite (sinon = Tarteaucitron à étendre).

---

## 🚀 Commandes utiles

```bash
pnpm install              # Installation
pnpm dev                  # Dev server (localhost:4321)
pnpm build                # Build production → /dist
pnpm preview              # Preview du build
pnpm astro check          # Type-check + vérif Astro
pnpm astro add <integ>    # Ajouter une intégration officielle
```

---

## 📅 Feuille de route (MVP sous 2 semaines)

### Phase 1 — Fondations (jours 1-3)
- [ ] Setup Astro + Tailwind + TypeScript + intégrations (sitemap, astro-icon, astro:assets)
- [ ] Lecture de `BRAND.md` → mise en place des variables CSS + config Tailwind
- [ ] Auto-hébergement des polices Canva identifiées
- [ ] Création du `BaseLayout.astro` + Header + Footer + Navigation responsive
- [ ] Mise en place du système de composants UI de base (Button, Card, BookingCTA)

### Phase 2 — Pages structurantes (jours 4-7)
- [ ] Page d'accueil (placeholders textes + images stock temporaires)
- [ ] Page `/a-propos` (structure)
- [ ] Liste des prestations + template `[slug].astro`
- [ ] Fiches de 3 prestations en placeholder (Claude propose les drafts de textes)
- [ ] Page `/contact` avec Leaflet + embed Cal.com

### Phase 3 — Contenu & SEO (jours 8-11)
- [ ] Rédaction des vrais textes (Claude propose, Mathieu + Léa valident)
- [ ] Intégration des photos dès qu'elles sont dispo (shooting à planifier)
- [ ] Collecte et intégration de 3 témoignages
- [ ] Écriture de 2-3 premiers articles de blog
- [ ] Mise en place schema.org complet
- [ ] Mentions légales + politique de confidentialité
- [ ] Tarteaucitron + GA4

### Phase 4 — Finition & lancement (jours 12-14)
- [ ] Audit Lighthouse (perf, a11y, SEO, best practices)
- [ ] Tests sur mobiles réels
- [ ] Achat du domaine (`lea-drainage.fr` en priorité, `.com` si dispo aussi)
- [ ] Déploiement Hostinger (ou bascule Vercel si on a décidé ça)
- [ ] Configuration Google Search Console + soumission sitemap
- [ ] Création/optimisation de la fiche **Google My Business** (NAP cohérent avec le site)

---

## 📝 Rôles et workflow

| Rôle | Personne |
|---|---|
| Chef de projet / dev | Mathieu |
| Cliente finale | Léa |
| Rédaction textes | Claude Code propose → Mathieu + Léa valident |
| Charte graphique | Fournie par Mathieu dans `BRAND.md` |
| Photos | Shooting à planifier (Léa + lieu d'exercice) |
| Témoignages | Léa les collecte |

**Validation** : chaque livrable passe par Mathieu, puis feedback client (Léa) avant mise en ligne.

---

## 📋 Instructions spécifiques pour Claude Code

Lorsque tu interviens sur ce projet, à chaque session :

1. **Lire `CLAUDE.md` puis `BRAND.md`** avant toute action.
2. **Si la charte graphique n'est pas encore dans `BRAND.md`** → demander à Mathieu de la fournir avant d'implémenter quoi que ce soit de visuel.
3. **Pour toute page ou composant nouveau** : proposer d'abord une structure HTML sémantique + wireframe textuel, attendre validation avant de coder.
4. **Pour les textes** : proposer 2 variantes de ton (plus sobre / plus chaleureux) pour que Léa choisisse.
5. **Optimiser chaque image** via `astro:assets`. Si une image brute est déposée dans `/public`, la migrer vers `/src/assets`.
6. **Valider l'accessibilité et le SEO** à chaque page livrée (checklist dans le commit message).
7. **Tester mobile-first** : screenshots 360px + 768px + 1280px à joindre si possible.
8. **Ne pas ajouter de dépendance npm** sans justification courte dans le commit.
9. **Contre-indications médicales** : pour chaque prestation, toujours utiliser le composant `<ContraindicationBox />` — jamais de texte libre inline.
10. **Tutoiement vs vouvoiement** : **vouvoyer** par défaut (ton professionnel institut de soin).
11. **Éviter les claims médicaux non-prouvés** : dire *"peut favoriser"*, *"contribue à"*, jamais *"guérit"* ou *"élimine définitivement"*.

---

## ❓ Informations à obtenir avant mise en ligne

**Bloquant (J-2)** :
- [ ] Adresse exacte du cabinet (rue + code postal Reims)
- [ ] Horaires d'ouverture
- [ ] Numéro de téléphone pro
- [ ] Email pro (à créer)
- [ ] SIRET (quand l'immatriculation AE est finalisée)
- [ ] Logo en SVG haute def + charte dans `BRAND.md`
- [ ] Lien Cal.com (ou Calendly) configuré par Léa avec prestations + prix

**Non-bloquant (peut attendre v1.1)** :
- [ ] Photos pro de Léa et du cabinet
- [ ] 3 premiers témoignages clients
- [ ] Méthode de drainage officiellement pratiquée
- [ ] Certifications précises à afficher
- [ ] Instagram : décider si on alimente avant lancement ou après
- [ ] Premier article de blog signé par Léa

---

## 🔮 Évolutions prévues post-MVP

- **v1.1** : Blog alimenté régulièrement, GMB optimisé, collecte active de témoignages.
- **v1.2** : Cartes cadeaux / bons numériques (si Léa le souhaite un jour).
- **v1.3** : Espace client (suivi de cure, rappels RDV) — si la clientèle le réclame.
- **v2.0** : Potentielle extension e-commerce (produits cosmétiques complémentaires).
