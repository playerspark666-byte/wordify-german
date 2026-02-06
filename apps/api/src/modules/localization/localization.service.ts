import { Injectable } from '@nestjs/common';
import { SupportedLanguage } from './localization.types';

@Injectable()
export class LocalizationService {
  getLanguageFromHeader(
    acceptLanguage?: string
  ): SupportedLanguage {
    if (acceptLanguage?.startsWith('de')) return 'de';
    return 'en';
  }
}
