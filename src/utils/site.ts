/**
 * Configuration globale du site — métadonnées, contact, liens externes.
 * Source unique pour SEO, schema.org, header, footer.
 */

export const site = {
  name: 'Léa Drainage',
  tagline: 'Drainage lymphatique à Reims',
  url: 'https://lea-drainage.fr',
  locale: 'fr-FR',
  city: 'Reims',
  region: 'Grand Est',
  country: 'FR',

  contact: {
    phone: '+33695226715',
    phoneDisplay: '06 95 22 67 15',
    whatsapp: 'https://wa.me/33695226715',
    email: 'leacopeau5@gmail.com',
    address: {
      street: '24 rue de Bétheny',
      district: 'la Neuvillette',
      postalCode: '51100',
      city: 'Reims',
      country: 'France',
      // Coordonnées GPS vérifiées via Nominatim — Actipole La Neuvillette, Reims
      // ⚠️ Important : il existe un autre 24 rue de Bétheny dans le quartier Jamin
      latitude: 49.2868762,
      longitude: 4.0155508,
    },
    hours: {
      monday: 'Fermé',
      tuesday: 'Fermé',
      wednesday: 'Fermé',
      thursday: 'Fermé',
      friday: 'Fermé',
      saturday: '10h – 18h',
      sunday: '10h – 18h',
    },
  },

  // Réservation — Cal.com EU instance (RGPD-friendly, données en Europe)
  booking: {
    provider: 'cal.com' as const,
    url: 'https://cal.eu/lea-drainage',
    embedUrl: 'https://cal.eu/lea-drainage',
  },

  // Réseaux sociaux — ajouter au fur et à mesure
  social: {
    instagram: '',              // TODO: ex https://instagram.com/lea.drainage
    facebook: '',
  },

  legal: {
    siret: '94197779500017',
    siretFormatted: '941 977 795 00017',
    rcs: '',
    hostName: 'Vercel Inc.',
    hostAddress: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
  },
} as const;

export type Site = typeof site;
