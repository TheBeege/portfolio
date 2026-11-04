import type { Lang } from '../../i18n/config';
import type { HomeContent } from './types';
import en from './en';
import ko from './ko';

export const content: Record<Lang, HomeContent> = { en, ko };
