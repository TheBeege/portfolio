import type { ContributionId, ExperienceId, ProjectId } from '../site';

export interface ProjectText {
  title: string;
  company?: string;
  companyContext?: string;
  roles?: string[];
  teamSize?: string;
  highlight?: string;
  description: string;
  /** Alt text for each screenshot, in the same order as the images in site.ts */
  imageAlts?: string[];
}

export interface ExperienceText {
  title: string;
  /** Company and location, e.g. "Lunit, Gangnam-gu, Seoul" */
  org: string;
  period: string;
  bullets: string[];
}

/**
 * Everything translatable on the home page.
 * Fields named `*Html` are rendered as trusted HTML (author-written only).
 */
export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    greeting: string;
    name: string;
    /** Text glued to the name, e.g. Korean "입니다!"; the line may break between the two */
    nameSuffix?: string;
    legalName: string;
    tagline: string;
    availabilityHtml: string;
    ctaContact: string;
    ctaResume: string;
    ctaWork: string;
    photoAlt: string;
  };
  about: {
    paragraphs: string[];
  };
  projects: Record<ProjectId, ProjectText>;
  otherContributions: {
    title: string;
    entries: Record<ContributionId, { title: string; company: string; role: string; summary: string }>;
  };
  experience: Record<ExperienceId, ExperienceText>;
  education: {
    degree: string;
    school: string;
    period: string;
  };
  community: {
    paragraphsHtml: string[];
  };
  contact: {
    title: string;
    kakao: string;
    phoneKr: string;
    phoneUs: string;
  };
  footerName: string;
}
