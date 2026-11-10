/**
 * Language-neutral site data: ids, URLs, tags, and image paths.
 * Translatable text for each id lives in src/data/content/<lang>.ts,
 * and TypeScript requires every language file to cover every id below.
 */

export const RESUME_URL =
  'https://docs.google.com/document/d/1JfpCW-rgDlxkCKuHGg8_kJIpEeM0M-q7cFDbakq9uo8/edit?tab=t.0';

export interface ProjectData {
  id: string;
  tags: readonly string[];
  links?: readonly { kind: 'live' | 'github'; url: string }[];
  /** Screenshot paths under public/; alt text comes from the language files */
  images?: readonly string[];
}

export const professionalProjects = [
  {
    id: 'anvo',
    links: [{ kind: 'live', url: 'https://anvo.tech' }],
    images: ['/projects/anvo/1.png', '/projects/anvo/2.png', '/projects/anvo/3.png'],
    tags: ['Python', 'LLM Inference', 'Medical AI', 'Self-Hosted', 'Agent Tooling', 'RAG', 'pgvector'],
  },
  {
    id: 'arbor',
    links: [{ kind: 'live', url: 'https://arbortech.io' }],
    images: ['/projects/arbor/1.png', '/projects/arbor/2.png', '/projects/arbor/3.png'],
    tags: ['React', 'TypeScript', 'Supabase', 'SaaS', 'Model Context Protocol', 'PostgreSQL'],
  },
  {
    id: 'lunit-dms',
    tags: ['PostgreSQL', 'Python', 'DICOM', 'GitHub Actions', 'Google Cloud Platform', 'HashiCorp Terraform', 'Kubernetes', 'Scrum', 'Agile Development'],
  },
  {
    id: 'lunit-pipeline',
    tags: ['PostgreSQL', 'Python', 'Prefect', 'DICOM', 'GitHub Actions', 'Google Cloud Platform', 'HashiCorp Terraform', 'Kubernetes', 'Scrum', 'Agile Development'],
  },
  {
    id: 'lunit-oncology',
    tags: ['PostgreSQL', 'Python', 'Django', 'MessagePack', 'WebGL', 'GitHub Actions', 'Google Cloud Platform', 'HashiCorp Terraform', 'Kubernetes', 'Scrum', 'Agile Development'],
  },
  {
    id: 'lunit-radiology',
    tags: ['MongoDB', 'Python', 'FastAPI', 'DICOM', 'Cornerstone', 'GitHub Actions', 'Amazon Web Services', 'Google Cloud Platform', 'HashiCorp Terraform', 'Kubernetes', 'Scrum', 'Agile Development'],
  },
  {
    id: 'posicube-c2',
    tags: ['Golang', 'Web Sockets', 'GitLab CI', 'On-Premise', 'Amazon Web Services', 'HashiCorp Terraform', 'Agile Development'],
  },
  {
    id: 'posicube-robi',
    tags: ['JavaScript', 'Node.js', 'Firestore', 'Google Dialogflow', 'Google Cloud Platform', 'Amazon Web Services', 'HashiCorp Consul', 'Docker Swarm', 'Kubernetes', 'HashiCorp Terraform', 'Elasticsearch', 'Kibana', 'Datadog', 'GitLab CI', 'Agile Development'],
  },
  {
    id: 'sk-car-rental',
    tags: ['Java', 'Spring Boot', 'Maven', 'Bitbucket'],
  },
  {
    id: 'riot-network-impact',
    tags: ['Tableau', 'Hadoop Hive'],
  },
  {
    id: 'riot-monitoring',
    tags: ['Bash', 'Python', 'MySQL', 'JMX'],
  },
  {
    id: 'asurion-splunk',
    tags: ['Splunk', 'Python'],
  },
  {
    id: 'asurion-etl',
    tags: ['SSIS', 'Microsoft SQL Server', 'PHP'],
  },
] as const satisfies readonly ProjectData[];

export const personalProjects = [
  {
    id: 'meddaas',
    links: [
      { kind: 'live', url: 'https://meddaas.beege.works' },
      { kind: 'github', url: 'https://github.com/CodeSeoul/MedDaaS' },
    ],
    images: ['/projects/meddaas/1.png', '/projects/meddaas/2.png', '/projects/meddaas/3.png'],
    tags: ['FastAPI', 'Python', 'LLM / RAG', 'PostgreSQL', 'SpoonAI SDK'],
  },
  {
    id: 'monster-brawl',
    tags: ['Lua', 'CoronaSDK', 'Python', 'Twisted Matrix'],
  },
] as const satisfies readonly ProjectData[];

export const otherContributions = [
  { id: 'pubg-wordpress', tags: ['AWS', 'Terraform'] },
  { id: 'asurion-nagios', tags: ['Nagios', 'Python'] },
  { id: 'asurion-splunk-deployment', tags: ['Splunk', 'Python'] },
  { id: 'asurion-build-system', tags: ['Ruby', 'Rails'] },
  { id: 'asurion-single-pane', tags: ['CA Spectrum', 'CA eHealth'] },
] as const;

/** Newest first. `accent` highlights the most recent chapter of the timeline. */
export const experience = [
  { id: 'anvo', accent: true },
  { id: 'arbor', accent: true },
  { id: 'lunit-pm-lead', accent: true },
  { id: 'lunit-platform-lead', accent: true },
  { id: 'lunit-senior-engineer', accent: true },
  { id: 'posicube', accent: false },
  { id: 'pubg', accent: false },
  { id: 'sk-techx', accent: false },
  { id: 'riot', accent: false },
  { id: 'chainsaw-rabbit', accent: false },
  { id: 'asurion', accent: false },
] as const;

export type ProjectId =
  | (typeof professionalProjects)[number]['id']
  | (typeof personalProjects)[number]['id'];
export type ContributionId = (typeof otherContributions)[number]['id'];
export type ExperienceId = (typeof experience)[number]['id'];
