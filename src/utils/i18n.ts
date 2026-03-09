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
    'hero.label': 'Architectural Practice 2024',
    'hero.title.part1': 'Defining Space.',
    'hero.title.part2': 'Refined by',
    'hero.title.part2.italic': 'Logic.',
    'hero.description': 'A synthesis of brutalist honesty and technical precision. We craft structures that stand as monuments to functional clarity.',
    'hero.cta.view': 'View Portfolio',

    // Selected Works
    'works.title': 'SELECTED WORKS',
    'works.scroll': 'SCROLL FOR MORE',
    'works.pantheon.title': 'Sagrario Metropolitano',
    'works.pantheon.location': 'CDMX, Mexico — 2024',
    'works.pantheon.type': 'Dome · Structural Analysis',

    // Expertise
    'expertise.label': 'Expertise',
    'expertise.title': 'Computational Design & Engineering',

    // Stats
    'stats.years': 'Years Experience',
    'stats.landmarks': 'Landmarks',

    // Process
    'process.title': 'Our Process',
    'process.step1': 'Conceptualize',
    'process.step2': 'Model',
    'process.step3': 'Execute',

    // Philosophy
    'philosophy.label': 'PHILOSOPHY',
    'philosophy.quote': '"Architecture should speak of its time and place, but yearn for timelessness."',
    'philosophy.author': '— Frank Gehry',

    // Vertex
    'vertex.title': 'Sagrario — Dome Studies',
    'vertex.location': 'CDMX, México',

    // Grid Availability Card
    'grid.status.label': 'Status',
    'grid.status.value': 'Available for Projects',
    'grid.location.value': 'Mexico City, MX',
    'grid.scope': 'Scope',
    'grid.scope.value': 'Residential · Commercial · Cultural · Consulting',
    'grid.reply': 'Reply',
    'grid.reply.value': 'Within 24h',
    'grid.slots': 'Open',
    'grid.slots.value': '2 / 3 Slots Available',
    'grid.exp': 'Exp.',
    'grid.exp.value': 'Est. 2019 · 5+ Years',
    'grid.cta': 'Get in Touch',

    // Contact Card
    'contact.title': 'Start a Project',
    'contact.description': 'We are currently accepting new commissions.',

    // CTA
    'cta.label': 'Open for Commissions',
    'cta.title.line1': "Let's Build",
    'cta.title.line2': 'Something',
    'cta.title.line3': 'Remarkable.',
    'cta.description': 'Every great structure begins with a conversation. Share your vision and let architecture do the rest.',
    'cta.button': 'Send an Email',
    'cta.coord': '19.4326° N, 99.1332° W',

    // Meta
    'meta.description': 'Paulina Velazquez — Architect specializing in computational design and structural analysis. Based in Mexico City.',

    // Footer
    'footer.social': 'Social',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tagline': 'Designing the future, one precision line at a time.',
  },
  es: {
    // Nav
    'nav.work': 'TRABAJO',
    'nav.philosophy': 'FILOSOFÍA',
    'nav.contact': 'CONTACTO',

    // Hero
    'hero.label': 'Práctica Arquitectónica 2024',
    'hero.title.part1': 'Espacio Definido.',
    'hero.title.part2': 'Refinado por la',
    'hero.title.part2.italic': 'Lógica.',
    'hero.description': 'Una síntesis de honestidad brutalista y precisión técnica. Creamos estructuras que se erigen como monumentos a la claridad funcional.',
    'hero.cta.view': 'Ver Portafolio',

    // Selected Works
    'works.title': 'TRABAJOS SELECCIONADOS',
    'works.scroll': 'DESPLAZA PARA MÁS',
    'works.pantheon.title': 'Sagrario Metropolitano',
    'works.pantheon.location': 'CDMX, México — 2024',
    'works.pantheon.type': 'Cúpula · Análisis Estructural',

    // Expertise
    'expertise.label': 'Especialidad',
    'expertise.title': 'Diseño Computacional e Ingeniería',

    // Stats
    'stats.years': 'Años de Experiencia',
    'stats.landmarks': 'Edificios Icónicos',

    // Process
    'process.title': 'Nuestro Proceso',
    'process.step1': 'Conceptualizar',
    'process.step2': 'Modelar',
    'process.step3': 'Ejecutar',

    // Philosophy
    'philosophy.label': 'FILOSOFÍA',
    'philosophy.quote': '"La arquitectura debe hablar de su tiempo y lugar, pero anhelar la atemporalidad."',
    'philosophy.author': '— Frank Gehry',

    // Vertex
    'vertex.title': 'Sagrario — Estudios de Cúpula',
    'vertex.location': 'CDMX, México',

    // Grid Availability Card
    'grid.status.label': 'Estado',
    'grid.status.value': 'Disponible para Proyectos',
    'grid.location.value': 'Ciudad de México, MX',
    'grid.scope': 'Área',
    'grid.scope.value': 'Residencial · Comercial · Cultural · Consultoría',
    'grid.reply': 'Resp.',
    'grid.reply.value': 'En menos de 24h',
    'grid.slots': 'Disp.',
    'grid.slots.value': '2 / 3 Espacios Libres',
    'grid.exp': 'Exp.',
    'grid.exp.value': 'Est. 2019 · 5+ Años',
    'grid.cta': 'Contáctame',

    // Contact Card
    'contact.title': 'Iniciar un Proyecto',
    'contact.description': 'Actualmente aceptamos nuevos encargos.',

    // CTA
    'cta.label': 'Abierta a Proyectos',
    'cta.title.line1': 'Construyamos',
    'cta.title.line2': 'Algo',
    'cta.title.line3': 'Extraordinario.',
    'cta.description': 'Toda gran estructura comienza con una conversación. Comparte tu visión y deja que la arquitectura haga el resto.',
    'cta.button': 'Enviar un Email',
    'cta.coord': '19.4326° N, 99.1332° W',

    // Meta
    'meta.description': 'Paulina Velazquez — Arquitecta especializada en diseño computacional y análisis estructural. Con sede en Ciudad de México.',

    // Footer
    'footer.social': 'Redes',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.tagline': 'Diseñando el futuro, una línea de precisión a la vez.',
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
