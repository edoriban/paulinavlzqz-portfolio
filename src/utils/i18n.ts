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
    'works.pantheon.title': 'Pantheon Revival',
    'works.pantheon.location': 'Rome, Italy — 2023',
    'works.pantheon.type': 'TYPE A1 : r/e: 43',

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
    'vertex.title': 'Vertex Tower',
    'vertex.location': 'London, UK',

    // Contact Card
    'contact.title': 'Start a Project',
    'contact.description': 'We are currently accepting new commissions.',

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
    'hero.title.part1': 'Definiendo el Espacio.',
    'hero.title.part2': 'Refinado por la',
    'hero.title.part2.italic': 'Lógica.',
    'hero.description': 'Una síntesis de honestidad brutalista y precisión técnica. Creamos estructuras que se erigen como monumentos a la claridad funcional.',
    'hero.cta.view': 'Ver Portafolio',

    // Selected Works
    'works.title': 'TRABAJOS SELECCIONADOS',
    'works.scroll': 'DESPLAZA PARA MÁS',
    'works.pantheon.title': 'Renacimiento del Panteón',
    'works.pantheon.location': 'Roma, Italia — 2023',
    'works.pantheon.type': 'TIPO A1 : r/e: 43',

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
    'vertex.title': 'Torre Vertex',
    'vertex.location': 'Londres, Reino Unido',

    // Contact Card
    'contact.title': 'Iniciar un Proyecto',
    'contact.description': 'Actualmente aceptamos nuevos encargos.',

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
