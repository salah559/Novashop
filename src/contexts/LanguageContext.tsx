/*
 * File: src/contexts/LanguageContext.tsx
 */
"use client";

import React, { createContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { translations, TranslationKeys } from '@/lib/translations';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: TranslationKeys): string => {
      return translations[language][key] || translations['en'][key];
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};// Placeholder for LanguageContext.tsx
