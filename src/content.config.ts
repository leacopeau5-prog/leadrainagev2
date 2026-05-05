import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Prestations / séances proposées par Léa. */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string().optional(),
    order: z.number().default(0),
    summary: z.string(),
    duration: z.string(),                       // ex: "60 minutes"
    frequency: z.string().optional(),           // ex: "1 à 2 fois par semaine"
    forWho: z.array(z.string()).default([]),    // indications — à qui ça s'adresse
    benefits: z.array(z.string()).default([]),  // bénéfices principaux
    contraindications: z.array(z.string()).default([]),
    process: z.array(z.string()).default([]),   // déroulé d'une séance
    /** Image hero affichée en haut de la fiche (optimisée par Astro). */
    heroImage: image().optional(),
    /** Texte alternatif descriptif de l'image hero (a11y). */
    heroAlt: z.string().optional(),
    icon: z.string().default('lucide:droplet'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    /** URL Cal.com spécifique pour cette prestation (optionnel, sinon URL globale). */
    bookingUrl: z.string().url().optional(),
  }),
});

/** Articles de blog. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Léa'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, blog };
