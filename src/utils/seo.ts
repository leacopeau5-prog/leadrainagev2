import { site } from './site';

/** Génère le JSON-LD LocalBusiness / HealthAndBeautyBusiness pour la home. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    description: `Cabinet de drainage lymphatique manuel à Bétheny (agglomération de Reims). Séances bien-être, post-opératoire, récupération sportive et cure silhouette. Sur rendez-vous samedi et dimanche.`,
    url: site.url,
    telephone: site.contact.phone || undefined,
    email: site.contact.email || undefined,
    image: `${site.url}/og-default.jpg`,
    priceRange: '80 € – 350 €',
    paymentAccepted: 'Espèces, Carte bancaire, Virement',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.street || undefined,
      postalCode: site.contact.address.postalCode,
      addressLocality: `${site.contact.address.city} ${site.contact.address.district}`.trim(),
      addressRegion: site.region,
      addressCountry: site.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.contact.address.latitude,
      longitude: site.contact.address.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Bétheny' },
      { '@type': 'City', name: 'Reims' },
      { '@type': 'City', name: 'Witry-lès-Reims' },
      { '@type': 'City', name: 'Cernay-lès-Reims' },
      { '@type': 'City', name: 'Saint-Brice-Courcelles' },
    ],
    openingHoursSpecification: [
      { dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
      { dayOfWeek: 'Sunday',   opens: '10:00', closes: '18:00' },
    ].map((d) => ({ '@type': 'OpeningHoursSpecification', ...d })),
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de drainage lymphatique',
      itemListElement: [
        { name: 'Drainage lymphatique bien-être', price: '80', currency: 'EUR' },
        { name: 'Drainage lymphatique récupération sportive', price: '80', currency: 'EUR' },
        { name: 'Drainage lymphatique post-opératoire', price: '80', currency: 'EUR' },
        { name: 'Cure silhouette — 5 séances', price: '350', currency: 'EUR' },
      ].map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.name },
        price: p.price,
        priceCurrency: p.currency,
      })),
    },
  };
}

/** Génère le JSON-LD Service pour une page prestation. */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: 'Drainage lymphatique',
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressCountry: site.contact.address.country,
      },
    },
    areaServed: { '@type': 'City', name: site.city },
  };
}

/** Génère un BreadcrumbList JSON-LD à partir d'une liste de segments. */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQPage JSON-LD. */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
