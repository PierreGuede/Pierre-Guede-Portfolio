import { createContext, useContext } from 'react';

export type Locale = 'fr' | 'en';
export type Theme = 'light' | 'dark';

export interface PortfolioPreferences {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const PreferencesContext = createContext<PortfolioPreferences | null>(null);

export const usePreferences = (): PortfolioPreferences => {
  const preferences = useContext(PreferencesContext);
  if (!preferences) throw new Error('usePreferences must be used inside PreferencesContext.Provider');
  return preferences;
};
