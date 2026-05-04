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

  // Coordonnées — à remplir quand elles seront fournies
  contact: {
    phone: '',                  // TODO: remplir
    phoneDisplay: '',           // Format affiché : "06 00 00 00 00"
    whatsapp: '',               // Lien wa.me (ex: https://wa.me/33600000000)
    email: '',                  // TODO: email pro
    address: {
      street: '',               // TODO: rue + numéro
      postalCode: '51100',
      city: 'Reims',
      country: 'France',
      // Coordonnées GPS pour la carte — centre de Reims par défaut
      latitude: 49.2583,
      longitude: 4.0317,
    },
    hours: {
      // TODO: confirmer avec Léa
      monday: '9h – 19h',
      tuesday: '9h – 19h',
      wednesday: '9h – 19h',
      thursday: '9h – 19h',
      friday: '9h – 19h',
      saturday: '9h – 14h',
      sunday: 'Fermé',
    },
  },

  // Réservation
  booking: {
    provider: 'cal.com' as const,
    // TODO: lien Cal.com de Léa — ex: https://cal.com/lea-drainage/consultation
    url: 'https://cal.com/lea-drainage',
    // Pour l'embed iframe (même URL généralement)
    embedUrl: 'https://cal.com/lea-drainage',
  },

  // Réseaux sociaux — ajouter au fur et à mesure
  social: {
    instagram: '',              // TODO: ex https://instagram.com/lea.drainage
    facebook: '',
  },

  // Informations légales — à remplir
  legal: {
    siret: '',                  // TODO: dès l'immatriculation AE finalisée
    rcs: '',
    hostName: 'Vercel Inc.',
    hostAddress: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
  },
} as const;

export type Site = typeof site;
