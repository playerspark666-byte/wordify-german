import { Locale } from './config';

export async function getMessages(locale: Locale) {
  return (await import(
    `@wordify/shared-translations/${locale}/common.json`
  )).default;
}
