export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;

export type Language = keyof typeof languages;

export const ui = {
  en: {
    // Nav
    'nav.work': 'WORK',
    'nav.philosophy': 'PHILOSOPHY',
    'nav.contact': 'CONTACT',

    // Hero
    'hero.label': 'Historic Structural Analysis',
    'hero.title.part1': 'Preserving Heritage.',
    'hero.title.part2': 'Guided by',
    'hero.title.part2.italic': 'Analysis.',
    'hero.description': 'Analyzing historic constructions through graphic and arithmetic methods to determine alternatives for conservation and restoration.',
    'hero.cta.view': 'View Portfolio',

    // Selected Works
    'works.title': 'SELECTED WORKS',
    'works.scroll': 'SCROLL FOR MORE',
    'works.pantheon.title': 'Sagrario Metropolitano',
    'works.pantheon.location': 'CDMX, Mexico — 2024',
    'works.pantheon.type': 'Dome · Conservation Analysis',

    // Expertise
    'expertise.label': 'Expertise',
    'expertise.title': 'Historic Structural Analysis & Conservation',

    // Stats
    'stats.years': 'Years Experience',
    'stats.landmarks': 'Historic Buildings',

    // Process
    'process.title': 'My Process',
    'process.step1': 'Research',
    'process.step2': 'Analyze',
    'process.step3': 'Conserve',

    // Philosophy
    'philosophy.label': 'PHILOSOPHY',
    'philosophy.quote': '"Restoration should reveal the historical and aesthetic value of a monument, based on respect for the original."',
    'philosophy.author': '— Venice Charter, 1964',

    // Vertex
    'vertex.title': 'Sagrario — Dome Studies',
    'vertex.location': 'CDMX, México',

    // Grid Availability Card
    'grid.status.label': 'Status',
    'grid.status.value': 'Available for Projects',
    'grid.location.value': 'Mexico City, MX',
    'grid.scope': 'Scope',
    'grid.scope.value': 'Heritage · Conservation · Restoration · Lightweight Structures',
    'grid.reply': 'Reply',
    'grid.reply.value': 'Within 24h',
    'grid.slots': 'Open',
    'grid.slots.value': '2 / 3 Slots Available',
    'grid.exp': 'Exp.',
    'grid.exp.value': 'Est. 2019 · 5+ Years',
    'grid.cta': 'Get in Touch',

    // Contact Card
    'contact.title': 'Start a Project',
    'contact.description': 'Currently accepting new conservation and analysis projects.',

    // CTA
    'cta.label': 'Open for Projects',
    'cta.title.line1': "Let's Preserve",
    'cta.title.line2': 'Something',
    'cta.title.line3': 'Timeless.',
    'cta.description': 'Every historic structure tells a story. Share your project and we will work together to preserve it.',
    'cta.button': 'Send an Email',
    'cta.coord': '19.4326° N, 99.1332° W',

    // Meta
    'meta.description': 'Paulina Velazquez — Architect specializing in historic structural analysis, conservation and restoration. Based in Mexico City.',

    // Footer
    'footer.social': 'Social',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tagline': 'Preserving the past, one careful analysis at a time.',
  },
  es: {
    // Nav
    'nav.work': 'TRABAJO',
    'nav.philosophy': 'FILOSOFÍA',
    'nav.contact': 'CONTACTO',

    // Hero
    'hero.label': 'Análisis Estructural Histórico',
    'hero.title.part1': 'Preservar el Patrimonio.',
    'hero.title.part2': 'Guiado por el',
    'hero.title.part2.italic': 'Análisis.',
    'hero.description': 'Análisis de construcciones históricas mediante métodos gráficos y aritméticos para determinar alternativas de conservación y restauración.',
    'hero.cta.view': 'Ver Portafolio',

    // Selected Works
    'works.title': 'TRABAJOS SELECCIONADOS',
    'works.scroll': 'DESPLAZA PARA MÁS',
    'works.pantheon.title': 'Sagrario Metropolitano',
    'works.pantheon.location': 'CDMX, México — 2024',
    'works.pantheon.type': 'Cúpula · Análisis de Conservación',

    // Expertise
    'expertise.label': 'Especialidad',
    'expertise.title': 'Análisis Estructural Histórico y Conservación',

    // Stats
    'stats.years': 'Años de Experiencia',
    'stats.landmarks': 'Edificios Históricos',

    // Process
    'process.title': 'Mi Proceso',
    'process.step1': 'Investigar',
    'process.step2': 'Analizar',
    'process.step3': 'Conservar',

    // Philosophy
    'philosophy.label': 'FILOSOFÍA',
    'philosophy.quote': '"La restauración debe revelar el valor histórico y estético del monumento, basándose en el respeto al original."',
    'philosophy.author': '— Carta de Venecia, 1964',

    // Vertex
    'vertex.title': 'Sagrario — Estudios de Cúpula',
    'vertex.location': 'CDMX, México',

    // Grid Availability Card
    'grid.status.label': 'Estado',
    'grid.status.value': 'Disponible para Proyectos',
    'grid.location.value': 'Ciudad de México, MX',
    'grid.scope': 'Área',
    'grid.scope.value': 'Patrimonio · Conservación · Restauración · Estructuras Ligeras',
    'grid.reply': 'Resp.',
    'grid.reply.value': 'En menos de 24h',
    'grid.slots': 'Disp.',
    'grid.slots.value': '2 / 3 Espacios Libres',
    'grid.exp': 'Exp.',
    'grid.exp.value': 'Est. 2019 · 5+ Años',
    'grid.cta': 'Contáctame',

    // Contact Card
    'contact.title': 'Iniciar un Proyecto',
    'contact.description': 'Actualmente acepto nuevos proyectos de conservación y análisis.',

    // CTA
    'cta.label': 'Abierta a Proyectos',
    'cta.title.line1': 'Preservemos',
    'cta.title.line2': 'Algo',
    'cta.title.line3': 'Atemporal.',
    'cta.description': 'Cada estructura histórica cuenta una historia. Comparte tu proyecto y trabajemos juntos para preservarla.',
    'cta.button': 'Enviar un Email',
    'cta.coord': '19.4326° N, 99.1332° W',

    // Meta
    'meta.description': 'Paulina Velazquez — Arquitecta especializada en análisis estructural histórico, conservación y restauración. Con sede en Ciudad de México.',

    // Footer
    'footer.social': 'Redes',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.tagline': 'Preservando el pasado, un análisis cuidadoso a la vez.',
  },
} as const;

/**
 * Extract language from URL pathname
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

/**
 * Get translation function for a specific language
 */
export function useTranslations(lang: Language | string) {
  return function t(key: string): string {
    if (lang in ui) {
      const translations = ui[lang as Language];
      return (translations as Record<string, string>)[key] ?? key;
    }
    return key;
  };
}

/**
 * Get the alternate language URL
 */
export function getAlternateUrl(currentPath: string, currentLang: Language): string {
  if (currentLang === 'en') {
    return `/es${currentPath === '/' ? '/' : currentPath}`;
  }
  return currentPath.replace(/^\/es/, '') || '/';
}
