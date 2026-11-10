import type { HomeContent } from './types';

const en: HomeContent = {
  meta: {
    title: 'Bryan “Beege” Berry | Engineering Leader',
    description: 'Beege: Engineering Leader, Builder, Community Organizer',
  },

  hero: {
    greeting: "Hi, I'm",
    name: 'Beege!',
    legalName: 'Or Bryan Berry if you want to be boring and legal',
    tagline: 'Engineering leader, builder, and community organizer based in Seoul.',
    availabilityHtml:
      'Open to engineering leadership roles. <span class="whitespace-nowrap">F-2-7</span> visa through 2028, no sponsorship required.',
    ctaContact: 'Get in touch',
    ctaResume: 'Resume',
    ctaWork: 'See my work',
    photoAlt: 'Photo of Beege',
  },

  about: {
    paragraphs: [
      "I'm a software engineer and engineering leader who's spent the last 16 years building things, 10 of which in Seoul. I've worked across gaming, insurance, AI, and medical tech, from Riot Games to PUBG to Lunit, where I led teams building annotation and data management tools for cancer detection AI.",
      "I like building things that matter, leading teams that ship, and teaching people who want to learn. I founded CodeSeoul to give developers in Seoul a place to grow, and I'm currently looking for new opportunities.",
      'Georgia Tech grad (Computational Media). American expat. Fluent in English, working on Korean.',
    ],
  },

  projects: {
    anvo: {
      title: 'Anvo',
      roles: ['Co-founder', 'CTO'],
      teamSize: '2',
      description:
        'A web app for assisting medical imaging device technicians in China. Designed to run models like Qwen on local infrastructure or with remote models like Claude. Uses agent tools to lookup repair guidance documentation via RAG and web search. Also includes a medical device management platform that tracks hospital equipment and service orders through a multi-step repair workflow, with hospital sign-off and a documented service history to support regulatory compliance.',
      imageAlts: [
        "Anvo landing page with the headline 'The Intelligent Era of Medical Device Repair'",
        'Anvo chat diagnosing white dots on a Philips EPIQ 4 ultrasound screen with step-by-step troubleshooting',
        'Anvo repair request showing hospital and equipment details at step 4 of 7, hospital sign-off',
      ],
    },
    arbor: {
      title: 'Arbor',
      roles: ['Co-founder', 'CTO'],
      teamSize: '3',
      description:
        'A SaaS tool for leaders to visualize alignment between company goals and the work teams are actually doing, identify bottlenecks and risks, and manage workload capacity. Connects to project management tools (Jira, Linear, etc.) and surfaces where planned work drifts from strategic objectives, giving leaders real visibility without micromanaging. Designed with a bidirectional sync strategy to meet teams where they already work.',
      imageAlts: [
        "Arbor landing page with the headline 'The alignment layer your tools are missing.' and a strategy-to-execution hierarchy diagram",
        'Arbor hierarchical tree view with nested task cards showing priority levels and roll-up progress',
        'Arbor team settings page showing member management and API key configuration',
      ],
    },
    'lunit-dms': {
      title: 'Data Management System',
      company: 'Lunit',
      roles: ['Product Manager', 'Project Manager'],
      teamSize: '6',
      highlight: '300 TPS sustained in production',
      description:
        'Centralized system for organizing DICOM metadata, file references, and clinical study data: the first successful effort to get all the data in one place for annotation and ML training. Ideated the original system and led product management, delivering features including manufacturer aliasing, acquisition project tracking, and versioned ML splits for EU AI Act reproducibility. Centralized ingestion also uncovered and resolved data quality and duplication issues.',
    },
    'lunit-pipeline': {
      title: 'Data Pipeline Platform',
      company: 'Lunit',
      roles: ['Project Manager'],
      teamSize: '6 data engineers',
      highlight: 'Reduced one inference task from 2 months to under 24 hours',
      description:
        'Massively concurrent pipeline for ingesting medical imaging data, preparing annotation datasets, and running bulk inference with in-house AI models. Conceived the original idea and built the proof of concept using Prefect before handing off to the team. Routinely processed hundreds of terabytes using spot instances and tuned autoscaling.',
    },
    'lunit-oncology': {
      title: 'Oncology Annotation Tool',
      company: 'Lunit',
      roles: ['Product Manager', 'Project Manager', 'DevOps Engineer', 'Engineering Manager'],
      teamSize: '7',
      description:
        'Internal tool for oncologists to label pathology whole slide images for cancer detection AI training, supporting distinct annotation modes (painting tissue areas, designating points, drawing cell contours, and sub-cellular labeling) on deeply zoomable WSIs. External contractor access with manager permissions enabled Lunit to scale annotation beyond its internal team.',
    },
    'lunit-radiology': {
      title: 'Radiology Annotation Tool',
      company: 'Lunit',
      roles: ['Product Manager', 'Project Manager', 'DevOps Engineer', 'Backend Engineer', 'Engineering Manager'],
      teamSize: '6',
      highlight: '“This is the smoothest annotation has ever gone.”',
      description:
        'Internal tool for radiologists to label medical images across chest X-rays, mammograms, and digital breast tomosynthesis, with queue-based and pool-based assignment and keyboard-shortcut-driven annotation. Took over as product manager and engineering manager. Introduced DBT modality support, multi-window current-prior comparison, cross-image annotation grouping, a reviewer feedback system, and an ML researcher API.',
    },
    'posicube-c2': {
      title: 'Command and Control System',
      company: 'Posicube',
      companyContext: 'Small startup (9–20 employees)',
      roles: ['Backend Engineer', 'Engineering Manager'],
      description:
        'Remote management system for monitoring and controlling edge devices deployed at client sites. Built WebSocket-over-TLS communication between central and edge nodes, with relay node support for client network segmentation. All remote functions explicitly defined to pass security audits.',
    },
    'posicube-robi': {
      title: 'Robi Backend (now robi T)',
      company: 'Posicube',
      companyContext: 'Small startup (9–20 employees)',
      roles: ['Backend Engineer', 'Engineering Manager'],
      description:
        'Backend for Robi, an AI-powered phone receptionist that routes callers to appropriate departments via Google Dialogflow for speech recognition, intent detection, and TTS. Architected the backend as a monorepo of six microservices controlled by feature flags.',
    },
    'sk-car-rental': {
      title: 'Car Rental Service',
      company: 'SK TechX (SK Telecom)',
      roles: ['Backend Engineer'],
      description:
        'Service enabling users to reserve and autonomously access rental cars without human intervention. Developed backend reservation and vehicle access APIs as part of an 8-service Spring Boot platform.',
    },
    'riot-network-impact': {
      title: 'Network Player Impact Report',
      company: 'Riot Games',
      roles: ['Data Analyst'],
      highlight:
        'Wired players showed a statistically significant 1% win-rate increase after normalizing for all identifiable factors',
      description:
        'Team analysis examining whether League of Legends players had a meaningful win-rate change on wired vs. wireless connections. Contributed by querying petabytes of game and infrastructure data from Hadoop Hive; statistical analysis led by teammate. Findings delivered via Tableau dashboards.',
    },
    'riot-monitoring': {
      title: 'Near Real-Time Service Monitoring',
      company: 'Riot Games',
      roles: ['Data Engineer'],
      description:
        'Minute-resolution metrics collection system feeding game server health data to the Network Operations Center. Built collectors for server availability, login queue size, and concurrent players across global infrastructure.',
    },
    'asurion-splunk': {
      title: 'Splunk Expansion',
      company: 'Asurion',
      roles: ['Monitoring Engineer'],
      highlight: 'Reduced incident isolation time by 80%',
      description:
        'Expanded Splunk from an unmaintained audit tool into a core component of company-wide monitoring. Deployed across all infrastructure and worked with Splunk professional services to build operational dashboards.',
    },
    'asurion-etl': {
      title: 'ETL Operations',
      company: 'Asurion',
      roles: ['ETL Operations Engineer'],
      description:
        'Administered and developed a homebrewed SSIS-based ETL framework running 600+ active jobs for insurance claims processing. Managed critical workflows for customer data acquisition, claims, and fulfillment. Built a knowledge management system and helped manage an offshore team in India.',
    },
    meddaas: {
      title: 'MedDaaS',
      description:
        'An AI-powered radiology training platform that helps medical students and radiologists sharpen their diagnostic skills. Students write diagnostic reports for chest X-rays, and the system compares them against expert ground truth using multi-step LLM analysis, delivering finding-by-finding scoring, educational feedback, and actionable improvement suggestions in real time via streaming. Built for the Spoon OS hackathon with CodeSeoul.',
      imageAlts: [
        'MedDaaS homepage with search bar and progress card showing a score of 62.9/100 with 2 reports completed',
        'MedDaaS reporting interface showing a chest X-ray with brightness and contrast controls alongside a report text editor',
        'MedDaaS detailed feedback page with scoring breakdown for similarity, completeness, accuracy, and terminology',
      ],
    },
    'monster-brawl': {
      title: 'Monster Brawl',
      description:
        'Turn-based battle game where players would pit classic monsters against each other. Included account management, matchmaking, gameplay, and stats. Never released.',
    },
  },

  otherContributions: {
    title: 'Other Contributions',
    entries: {
      'pubg-wordpress': {
        title: 'WordPress Deployment',
        company: 'PUBG',
        role: 'DevOps',
        summary: 'Deployed WordPress on AWS via Terraform to replace the company home page.',
      },
      'asurion-nagios': {
        title: 'Nagios Expansion',
        company: 'Asurion Mobile Apps',
        role: 'Monitoring',
        summary: 'Expanded Nagios metrics and refined alerting to reduce noise.',
      },
      'asurion-splunk-deployment': {
        title: 'Splunk Deployment',
        company: 'Asurion Mobile Apps',
        role: 'Monitoring',
        summary: 'Green-field Splunk deployment with log aggregation, metric extraction, and dashboards.',
      },
      'asurion-build-system': {
        title: 'Build System Prototype',
        company: 'Asurion Mobile Apps',
        role: 'Monitoring',
        summary: 'Prototyped build system migration from legacy Perl to Ruby on Rails; deployed after departure.',
      },
      'asurion-single-pane': {
        title: 'Single Pane of Glass',
        company: 'Asurion',
        role: 'Monitoring',
        summary: 'Deployed CA Spectrum and CA eHealth to overhaul the NOC with CA professional services.',
      },
    },
  },

  experience: {
    anvo: {
      title: 'Co-founder & CTO',
      org: 'Anvo, Seoul',
      period: 'November 2025 – Present (concurrent with Arbor)',
      bullets: [
        'Built medical device management platform and AI agent for medical device repair on ReactJS, PHP, Laravel, Python, LangGraph, PostgreSQL, and pgvector, using a semi-autonomous agentic development pipeline via Claude Code.',
        'Migrated legacy PHP application from ThinkPHP and defunct proprietary Chinese external services to Laravel.',
        'Built RAG to store medical device manuals, service order records, and online resources to support the AI agent.',
        'Filed patent pending (10-2026-0183554) for novel graph RAG specific to medical device operation and repair complexities.',
      ],
    },
    arbor: {
      title: 'Co-founder & CTO',
      org: 'Arbor, Seoul',
      period: 'November 2025 – August 2026 (10 months, concurrent with Anvo)',
      bullets: [
        'Built AI-enabled strategic goal and project management platform, focused on connecting work to company goals and organizational health on ReactJS, Supabase, and Cloudflare, using a semi-autonomous agentic development pipeline via Claude Code.',
        'Built a team of three, secured two alpha testing customers, contracted design and government grant application advisor, and interviewed over a dozen potential customers.',
        'Built MCP server and skills for AI integration and ease of customer onboarding.',
      ],
    },
    'lunit-pm-lead': {
      title: 'Product Management Team Lead, AI Platform',
      org: 'Lunit, Gangnam-gu, Seoul',
      period: 'August 2022 – October 2025 (3 years, 2 months)',
      bullets: [
        'Created the team by hiring 2 product managers, 1 program manager, 2 designers, and 1 QA engineer.',
        "Improved data management efficiency and regulatory compliance by planning, organizing, and implementing the first database for radiology products' training and validation data, covering petabytes of data.",
        'Ensured regulatory and legal compliance by planning and organizing structured contract tracking features and building processes around them.',
        'Reduced manual efforts and de-duplicated data by refining the data ingestion process, coordinating data model redesign, and defining de-duplication logic.',
        'Identified expired data, identified duplicated data, and clarified R&R by coordinating data cataloguing, contract verification, and ingestion of data into the new data management system, removing terabytes of duplicate data.',
        'Mitigated risk of data leakage in the AI model development process by defining and implementing allowed data usage management system.',
      ],
    },
    'lunit-platform-lead': {
      title: 'AI Platform Team Lead',
      org: 'Lunit, Gangnam-gu, Seoul',
      period: 'September 2021 – August 2022 (11 months)',
      bullets: [
        'Led team to improve annotation project flow in the annotation tool, lauded by customers as "the smoothest annotation projects have ever gone."',
        'Worked with customers and team to add additional radiological image modalities to the image annotation tool, supporting 2.5D images in addition to 2D image views.',
        'Expanded the team by hiring one DevOps engineer, a backend engineering lead, a backend engineer, and an MLOps engineering lead, conducting interviews and designing and reviewing technical assessments.',
        'Led extra-team effort to set up company hackathon.',
        'Helped design, planned, and led the team to add features to the annotation tool, including hierarchical data labels, contour annotations, reviewer system, annotation project progress visualization, and bad data reporting system.',
        'Set up and managed Scrum-adjacent development lifecycle, including asynchronous daily updates to support work-from-home team members, backlog grooming, and sprint planning.',
      ],
    },
    'lunit-senior-engineer': {
      title: 'Senior Back-end Engineer / DevOps Engineer',
      org: 'Lunit, Gangnam-gu, Seoul',
      period: 'January 2021 – September 2021 (8 months)',
      bullets: [
        'Assisted in hiring via interviews and technical assessment reviews.',
        'Expanded API to support administrative interface for annotation tool, reducing the time and effort required to start and manage annotation projects.',
        'Automated testing and deployment of the training data annotation system by building CI/CD system on Buildkite.',
        'Refactored FastAPI services to better follow microservice architecture for image annotation tool.',
        'Configured Kubernetes deployment of services on AWS EKS using Terraform and baremetal via Ansible.',
      ],
    },
    posicube: {
      title: 'Back-end Engineer / DevOps Engineer / Back-end Team Lead',
      org: 'Posicube, Seocho-gu, Seoul',
      period: 'September 2018 – December 2020 (2 years, 3 months)',
      bullets: [
        'Built back-end services for AI-driven phone reception product and internal administration console in Node.js with MySQL Aurora on AWS Lambda and supporting services, using Terraform for infrastructure.',
        'Built back-end services for AI-driven online delivery product in Node.js with Cloud SQL on GCP Kubernetes. Back-end services included company directory management service, authentication service, Docker Swarm management service, hardware provisioning service, and call logging service.',
        'Led back-end team of 4 total engineers to build MSA-compatible monorepo for handling communication between IoT device and AI system.',
        'Set up various infrastructure, such as site-to-site VPN, office network, self-hosted GitLab CI, and build pipelines.',
        'Designed and managed infrastructure in AWS and GCP using Terraform. Set up ELK logging on GCP Kubernetes.',
        'Built remote control service and client for client-located Raspberry Pi devices using Golang and AWS.',
        'Built status reporting and call logging services in Python managed by systemd for AI-driven software on Raspberry Pi devices.',
      ],
    },
    pubg: {
      title: 'Back-end Engineer',
      org: 'PUBG Corporation, Seocho-gu, Seoul',
      period: 'November 2017 – July 2018 (8 months)',
      bullets: [
        'Assisted in development of microservices using Go and C#.',
        'Automated infrastructure using Terraform for numerous projects, from WordPress to machine learning systems.',
        'Set up data pipelines for public API service, a machine learning system, and general data analysis using AWS Lambda, SQS, S3, Redshift, and Kinesis.',
        'Set up GitLab CI configuration to enable faster building, testing, and deployment of projects.',
        'Helped deliver public API service written in Go, running on AWS ECS.',
      ],
    },
    'sk-techx': {
      title: 'Back-end Engineer',
      org: 'SK Tech X, Gangnam-gu, Seoul',
      period: 'January 2017 – November 2017 (10 months)',
      bullets: [
        'Converted build pipeline to code in source control using Jenkins Job DSL and Pipeline DSL. Created ETL system for reporting using Spring Batch.',
        'Worked on service platform built on Spring consisting of 8 services, including web servers and REST APIs.',
        'Refactored build pipeline, reducing local build time from minimum 7 minutes for all services to maximum 2 minutes for the longest service and 20 seconds for the shortest.',
      ],
    },
    riot: {
      title: 'Live Data Analyst',
      org: 'Riot Games, Santa Monica, CA',
      period: 'October 2013 – September 2016 (2 years, 11 months)',
      bullets: [
        'Developed and maintained near-real-time, international data collection systems at minute-resolution for over 100 metrics using Bash, Python, and Go.',
        'Experimented with Kafka, Elasticsearch, Kibana, and Timelion for collecting and visualizing network data.',
        'Created Tableau reports on client network performance, game server capacity, NOC KPIs, and other game health metrics, using data in Hadoop Hive from millions of players across the globe.',
        'Developed a player impact REST API in Go, deployed on Docker, exposing abnormal metric values around the player experience.',
        'Automated over 400 requests and generation of promo codes by creating a PHP web app.',
        'Designed and taught Python basics class to NOC Technicians.',
      ],
    },
    'chainsaw-rabbit': {
      title: 'Co-founder & Developer',
      org: 'Chainsaw Rabbit Games, San Francisco, CA',
      period: 'November 2012 – June 2015 (2 years, 7 months, part-time)',
      bullets: [
        'Co-designed asynchronous, competitive, multi-platform mobile game.',
        'Created game client in Lua/CoronaSDK and Python-based game server using Twisted Matrix.',
      ],
    },
    asurion: {
      title: 'Analyst II → Production Systems Analyst',
      org: 'Asurion, Nashville, TN → San Francisco, CA',
      period: 'August 2010 – October 2013 (3 years)',
      bullets: [
        'Implemented distributed Splunk infrastructure from the ground up. Reduced incident isolation time by 80%.',
        'Administered homebrewed SSIS-based ETL framework of 600+ active jobs.',
      ],
    },
  },

  education: {
    degree: 'B.S. Computational Media',
    school: 'Georgia Institute of Technology',
    period: '2006 – 2011',
  },

  community: {
    paragraphsHtml: [
      'I founded <a href="https://www.meetup.com/codeseoul/" target="_blank" rel="noopener noreferrer" class="text-link">CodeSeoul<span class="sr-only"> (opens in new tab)</span></a> in 2016. It\'s a non-profit developer community in Seoul with 3,400+ members on Meetup, recently averaging 40 attendees per event. We run coding classes, workshops, lectures, hackathons, and socials. We also ran a DevOps bootcamp over Seollal (Lunar New Year).',
      "I've taught full Java courses that take students from zero to junior engineer level. I've also covered Kubernetes, Prefect, AWS, and Golang, plus soft skills like presentations, resume writing, and project management.",
      'Check us out on <a href="https://www.youtube.com/@codeseoul" target="_blank" rel="noopener noreferrer" class="text-link">YouTube<span class="sr-only"> (opens in new tab)</span></a>.',
    ],
  },

  contact: {
    title: 'Get in Touch',
    kakao: 'KakaoTalk: TheBeege',
    phoneKr: 'KR',
    phoneUs: 'US',
  },

  footerName: 'Bryan Berry',
};

export default en;
