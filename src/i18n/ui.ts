import type { Lang } from './config';

/** Short interface strings shared by the layout and components. */
const en = {
  skipToContent: 'Skip to main content',
  opensInNewTab: '(opens in new tab)',
  homeLabel: 'Home',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  switchLanguage: 'Language',
  nav: {
    about: 'About',
    professionalProjects: 'Professional Projects',
    personalProjects: 'Personal Projects',
    experience: 'Experience',
    community: 'Community',
    contact: 'Contact',
  },
  experienceHeading: 'Professional Experience',
  project: {
    team: 'Team',
    live: 'Live',
    github: 'GitHub',
    screenshotComingSoon: 'Screenshot coming soon',
    viewFullSize: 'View full size',
  },
  lightbox: {
    label: 'Full-size screenshot',
    close: 'Close',
  },
};

export type UIStrings = typeof en;

const ko: UIStrings = {
  skipToContent: '본문으로 건너뛰기',
  opensInNewTab: '(새 탭에서 열림)',
  homeLabel: '홈',
  openMenu: '메뉴 열기',
  closeMenu: '메뉴 닫기',
  switchLanguage: '언어',
  nav: {
    about: '소개',
    professionalProjects: '업무 프로젝트',
    personalProjects: '개인 프로젝트',
    experience: '경력',
    community: '커뮤니티',
    contact: '연락처',
  },
  experienceHeading: '경력 사항',
  project: {
    team: '팀 규모',
    live: '사이트',
    github: 'GitHub',
    screenshotComingSoon: '스크린샷 준비 중',
    viewFullSize: '크게 보기',
  },
  lightbox: {
    label: '원본 크기 스크린샷',
    close: '닫기',
  },
};

export const ui: Record<Lang, UIStrings> = { en, ko };

export function useTranslations(lang: Lang): UIStrings {
  return ui[lang];
}
