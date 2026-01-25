import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, getAlternateUrl } from './i18n';

describe('i18n utilities', () => {
  describe('getLangFromUrl', () => {
    it('should extract language from URL pathname', () => {
      const url = new URL('http://example.com/es/about');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return default language for root path', () => {
      const url = new URL('http://example.com/');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should return default language for non-language path', () => {
      const url = new URL('http://example.com/about');
      expect(getLangFromUrl(url)).toBe('en');
    });
  });

  describe('useTranslations', () => {
    it('should return translation for given key and language', () => {
      const t = useTranslations('es');
      expect(t('nav.work')).toBe('TRABAJO');
    });

    it('should return translation for English', () => {
      const t = useTranslations('en');
      expect(t('nav.work')).toBe('WORK');
    });

    it('should return key if translation not found', () => {
      const t = useTranslations('en');
      expect(t('nonexistent.key')).toBe('nonexistent.key');
    });

    it('should handle missing language gracefully', () => {
      const t = useTranslations('fr');
      expect(t('nav.work')).toBe('nav.work');
    });
  });

  describe('getAlternateUrl', () => {
    it('should return Spanish URL for English page', () => {
      expect(getAlternateUrl('/', 'en')).toBe('/es/');
    });

    it('should return English URL for Spanish page', () => {
      expect(getAlternateUrl('/es/', 'es')).toBe('/');
    });
  });
});
