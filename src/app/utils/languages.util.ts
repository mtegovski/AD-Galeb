export type Locale = 'mk' | 'en' | 'sr';

export const splitPath = (pathname: string) =>
  pathname.split('/').filter(Boolean);

export const detectLocale = (parts: string[]): Locale =>
  (parts[0] === 'en' || parts[0] === 'mk' || parts[0] === 'sr') ? (parts[0] as Locale) : 'mk';
