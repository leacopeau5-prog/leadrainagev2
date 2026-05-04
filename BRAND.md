# BRAND.md — Léa Drainage

> Charte graphique extraite de `Charte graphique Léa Drainage.jpg` (fournie par Mathieu).
> Ce fichier est la **source de vérité** pour couleurs, typographies et usage du logo.
> Dernière mise à jour : 2026-04-24

---

## 🎨 Palette de couleurs

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Principale sombre | Marron foncé (bordeaux) | `#771617` | Logo, titres forts, CTA primaire, navigation active, texte important |
| Neutre chaud | Marron clair / taupe | `#B19F8E` | Bordures, séparateurs, éléments secondaires, fonds subtils |
| Accent rosé | Rose poudré | `#AB707F` | Accents, boutons secondaires, highlights doux, féminité |
| Accent vif | Orange agrumes (doré) | `#E5A640` ⚠️ | Accent agrumes (rappel logo), détails, éléments décoratifs |
| Fond | Blanc | `#FFFFFF` | Fond principal |
| Fond secondaire | Crème très clair | `#FBF7F0` | Alternance de sections (à valider) |

> ⚠️ **Note sur l'orange** : la charte originale indiquait `#BAAFDE` mais ce code correspond à un lavande, incohérent avec le logo (agrume jaune-doré). **J'ai proposé `#E5A640`** comme meilleure approximation visuelle du logo. **À faire valider par Mathieu/Léa** (ou me fournir le vrai code hex).

### Variables CSS (source de vérité)
```css
:root {
  --color-primary: #771617;        /* Marron foncé — bordeaux */
  --color-neutral-warm: #B19F8E;   /* Taupe */
  --color-rose: #AB707F;           /* Rose poudré */
  --color-accent: #E5A640;         /* Orange agrumes (à valider) */
  --color-cream: #FBF7F0;          /* Fond secondaire */
  --color-white: #FFFFFF;
  --color-text: #2A1A1B;           /* Texte corps (dérivé du primary foncé) */
  --color-text-muted: #6B5A54;     /* Texte secondaire */
}
```

---

## 🔤 Typographies

La charte liste 4 polices Canva : **Bogart**, **Roca One**, **Montserrat**, **Agrandir**. Deux sont propriétaires (non libres de droits). Propositions d'équivalents libres de droits, auto-hébergés via **Fontsource** (conformité RGPD) :

| Rôle | Canva | Alternative libre proposée | Source |
|---|---|---|---|
| Titres précieux (`--font-heading`) | **Bogart** (serif chaleureux) | **Fraunces** | Google Fonts (Fontsource) |
| Titres techniques (`--font-display`) | **Roca One** (slab serif) | **Alfa Slab One** ou **Roboto Slab** 900 | Google Fonts |
| Corps (`--font-body`) | **Montserrat** | **Montserrat** (identique) | Google Fonts |
| Petits textes (`--font-small`) | **Agrandir** | **DM Sans** ou **Inter** | Google Fonts |

> **Justification des choix** :
> - **Fraunces** : serif variable moderne avec fortes variantes d'empattement, très proche de Bogart (chaleur + caractère). Gratuit, auto-hébergeable.
> - **Alfa Slab One** : slab serif impactant, capte bien l'énergie de Roca One pour les sous-titres marquants.
> - **Montserrat** : identique, rien à changer.
> - **DM Sans** : geometric sans-serif moderne, très lisible en petite taille, proche d'Agrandir.

**⚠️ À valider par Léa/Mathieu avant implémentation définitive.** Si une police Canva est en réalité dérivée d'une police Google Fonts renommée, me le dire pour l'utiliser directement.

### Hiérarchie recommandée
- `h1`, `h2` → Fraunces (titres précieux)
- `h3`, `h4` → Alfa Slab One ou Fraunces selon contexte
- Corps `<p>`, navigation → Montserrat
- Légendes, micro-copy → DM Sans

---

## 🏷️ Logo

Logo fourni : **coupe d'agrume stylisée** (orange/citron) cerclée de bordeaux, avec le texte "Léa Drainage" en-dessous en serif bordeaux.

### Fichiers disponibles
- `src/assets/logo/logo-lea-drainage.png` (original fourni)
- **À fournir** : version SVG vectorielle (indispensable pour netteté + perf)
- **À créer** : favicon dérivé (le pictogramme agrume seul)

### Variantes prévues
- **Logo principal** : agrume + texte (header, page d'accueil)
- **Symbole seul** : l'agrume (favicon, avatar, partages sociaux)
- **Version poche** : agrume + "Léa Drainage" sur une ligne (footer, mobile réduit)

### Règles d'usage
- Zone de sécurité autour du logo : minimum équivalent à la hauteur du "L" de "Léa"
- Taille minimale lisible : 32px de hauteur pour le pictogramme seul, 80px pour le logo complet
- Ne pas déformer, pivoter, ou changer les couleurs
- Sur fonds sombres : prévoir une variante alternative (à créer si besoin)

---

## 🔘 Composants visuels de référence (d'après la charte)

### Boutons
- **Primaire** : fond `--color-rose` (#AB707F), texte blanc, coins arrondis doux (`rounded-full` ou `rounded-lg`)
- **Secondaire** : fond `--color-cream`, bordure `--color-neutral-warm`, texte `--color-primary`
- Exemples sur la charte : "Contactez-moi" (primaire), "En savoir plus" (secondaire)

### Navigation
- Fond `--color-primary` (bordeaux), texte blanc, item actif plus clair
- Items de nav visibles sur la charte : **Accueil / Séances / Blog / À propos**

### Icônes techniques
La charte montre des picto simples en **Montserrat-stroke** / `line-icon` : goutte d'eau, silhouette, horloge, chrono, goutte avec contour. → Utiliser **Lucide icons** (déjà prévu dans le stack) avec stroke fin.

---

## 🌿 Éléments décoratifs

La charte inclut des illustrations de **feuillages et agrumes** (fleurs d'oranger, oranges) en décoration de coins. Usage **parcimonieux** (bordures haut/bas de section hero par exemple, pas partout). À intégrer uniquement si un SVG vectoriel est fourni.

---

## ✅ Checklist d'intégration

- [ ] Valider l'hex de l'orange agrumes (#E5A640 proposé vs #BAAFDE erroné)
- [ ] Valider les alternatives de polices (Fraunces / Alfa Slab One / DM Sans)
- [ ] Obtenir le **logo en SVG** (indispensable)
- [ ] Obtenir les **éléments décoratifs végétaux en SVG** (optionnel)
- [ ] Confirmer la couleur de fond secondaire (`#FBF7F0` proposé)
