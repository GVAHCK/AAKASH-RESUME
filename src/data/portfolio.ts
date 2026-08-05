import type { IconType } from 'react-icons';
import { DiMongodb } from 'react-icons/di';
import {
	FaBrain,
	FaCubes,
	FaDatabase,
	FaFileCode,
	FaGithub,
	FaJava,
	FaLinkedinIn,
	FaLock,
	FaNodeJs,
	FaReact,
	FaRobot,
} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import {
	SiApachekafka,
	SiDocker,
	SiFastapi,
	SiGithubactions,
	SiJavascript,
	SiKubernetes,
	SiMysql,
	SiN8N,
	SiNeo4J,
	SiPostgresql,
	SiPython,
	SiRedis,
	SiSolidity,
	SiSplunk,
	SiTypescript,
	SiVite,
} from 'react-icons/si';
import { TbBrandAws, TbRoute } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
};

export type ProjectItem = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	featured?: boolean;
	liveUrl?: string;
	githubUrl?: string;
	overview?: string;
	problemStatement?: string;
	solution?: string;
	architecture?: string;
	coreFeatures?: string[];
	techStackBadges: TechItem[];
	dataFlow?: string[];
	securityAndScalability?: string[];
	keyInnovations?: string[];
	impact?: string[];
};

export const personal = {
	name: 'AAKASH',
	fullName: 'Gudivada Venkata Aakash',
	title: 'Software Engineer',
	greeting: 'Hi, I am',
	repoUrl: 'https://github.com/GVAHCK/portfolio-latest',
	repoStarLabel: '⭐ Star this repo',
	showRepoStar: false,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/GVAHCK',
		icon: FaGithub,
		iconColor: 'rgba(255, 255, 255, 0.9)',
		glowColor: 'rgba(255, 255, 255, 0.4)',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/venkata-aakash-179415288/',
		icon: FaLinkedinIn,
		iconColor: 'rgb(0, 160, 220)',
		glowColor: 'rgba(0, 160, 220, 0.6)',
	},
	{
		label: 'Email',
		href: 'mailto:venkataaakash5@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(18, 122, 209)',
		glowColor: 'rgba(18, 122, 209, 0.7)',
	},
];

export const navButtons: NavButton[] = [
	{ label: 'About Me', href: '/about', className: 'first' },
	{ label: 'Projects', href: '/projects', className: 'sec' },
];

export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"👋 Hey, I'm Gudivada Venkata Aakash — a Software Engineer passionate about building secure, scalable, and intelligent systems.",
		'Final-year B.Tech CSE student (CGPA 8.45) specializing in blockchain infrastructure, cloud security, and AI/ML engineering. Two-time national hackathon winner with production experience across distributed systems, SIEM/SOC operations, and zero-trust architecture.',
		'I build end-to-end solutions — Hyperledger Fabric supply chains, IoT smart energy grids, SOC alert engines — and contribute to open-source smart contract tooling (GSoC 2026).',
	],
	timeline: [
		{
			heading: 'Experience',
			items: [
				{
					role: 'Founder & Lead Software Engineer',
					org: '@AyuSethu',
					period: 'Jan 2025 - Present',
					bullets: [
						'Spearheaded development of a Hyperledger Fabric + IPFS blockchain supply chain platform; integrated AI species-validation and satellite geo-intelligence module, driving a 40% reduction in counterfeit botanical incidents across 6 nodes.',
						'Launched QR-based consumer portal (FastAPI + ReactJS); won E-Summit 2K26 National Startup Expo and NHIDE 2026.',
					],
				},
				{
					role: 'Cloud & Security Intern',
					org: '@Plexis',
					period: 'Jun 2024 - Jan 2025',
					bullets: [
						'Strengthened Microsoft Azure environments (VMs, VNets, NSGs); slashed over-permissioned accounts by 60% via RBAC.',
						'Built Monitor dashboards reducing MTTD by 35%.',
					],
				},
				{
					role: 'SOC Intern',
					org: '@HRH Next Service Limited',
					period: 'Aug 2023 - May 2024',
					bullets: [
						'Investigated 10,000+ daily log events in Splunk SIEM; surfaced 3 critical incidents and reduced false-positive alert volume by 28% via custom correlation rules.',
						'Authored incident response runbooks and escalation playbooks, reducing mean resolution time by 20%.',
					],
				},
			],
		},
		{
			heading: 'Education',
			items: [
				{
					role: 'B.Tech in Computer Science and Engineering',
					org: 'SRKR Engineering College (Autonomous), Bhimavaram, AP',
					period: '2024 - 2027',
					bullets: ['CGPA: 8.45 / 10.0'],
				},
				{
					role: 'Diploma in Computer Science and Engineering (DCME)',
					org: 'Sir C.R. Reddy Polytechnic College, Eluru, AP',
					period: 'Nov 2021 - May 2024',
					bullets: ['89%'],
				},
			],
		},
		{
			heading: 'Achievements',
			items: [
				{
					role: 'Smart India Hackathon 2025 — Runner-Up',
					org: 'AyuSethu, Ministry of Ayush',
					period: '10,000+ national participants',
					bullets: [],
				},
				{
					role: 'E-Summit 2K26 — Winner, National Project Expo',
					org: 'AyuSethu',
					period: 'National Startup Expo',
					bullets: [],
				},
				{
					role: 'Prakalp 2K26 — 1st Place, Cybersecurity',
					org: 'NeuroSOC, 150+ teams',
					period: 'National Level',
					bullets: [],
				},
				{
					role: 'Prajwalan 2K25 Hackathon — Runner-Up',
					org: 'Primary Coordinator (60+ teams, 3 tracks)',
					period: 'ACE, SRKR',
					bullets: [],
				},
				{
					role: 'Google Developer Student Club Ambassador',
					org: 'SRKR Engineering College',
					period: 'Aug 2024 - Dec 2024',
					bullets: [
						'Coached 200+ students in cloud and AI/ML; scaled GDSC membership by 3x through workshops and a hands-on Google Cloud hackathon.',
					],
				},
			],
		},
	] satisfies TimelineSection[],
};

export const aboutPage = {
	title: 'ABOUT ME',
	subtitle: 'SOFTWARE ENGINEER & TECH ARCHITECT',
	photoUrl: 'https://res.cloudinary.com/domogztsv/image/upload/v1778937066/WhatsApp_Image_2025-09-16_at_10.09.05_PM_rvsmjz_crjniq.jpg',
	introParagraphs: [
		"I am Gudivada Venkata Aakash — a high-impact Software Engineer and Technical Lead specializing in enterprise blockchain infrastructure, cloud security, distributed systems, and sovereign AI solutions.",
		"Currently pursuing my B.Tech in Computer Science & Engineering at SRKR Engineering College (CGPA 8.45), I bridge the gap between complex low-level system design and intuitive modern user experiences.",
		"With a track record of winning multiple national hackathons (SIH 2025 Runner-Up, E-Summit 2K26 Winner, Prakalp 2K26 1st Place), I bring production-focused engineering discipline to every project."
	],
	summary: "Engineered high-scale distributed applications handling decentralized data verification, zero-trust cloud infrastructure, automated threat monitoring in SIEM/SOC environments, and air-gapped local LLM inference engines.",
	careerObjective: "Seeking to build mission-critical software systems that push the boundaries of decentralized consensus, cloud security, privacy-preserving AI, and resilient system architecture.",
	technicalExpertise: [
		"Distributed Systems & Enterprise Blockchain (Hyperledger Fabric, IPFS, Smart Contracts)",
		"Cloud Engineering & Infrastructure (AWS, Azure, Docker, Kubernetes, Terraform)",
		"Cybersecurity & Threat Detection (Splunk SIEM, SOC Operations, RBAC, Zero-Trust Architecture)",
		"Full-Stack Web & API Architecture (React, TypeScript, FastAPI, Node.js, REST & GraphQL)",
		"Sovereign AI & ML Pipelines (Local LLMs, RAG, FAISS Vector DB, OCR Engine Integration)"
	],
	areasOfInterest: [
		"Decentralized Identity & Supply Chain Traceability",
		"Zero-Knowledge Proofs & Cryptographic Audit Trails",
		"Air-Gapped Sovereign AI Systems & Local LLM Fine-Tuning",
		"Cloud Native Security Automation & Event Correlation Engine Design"
	],
	leadership: {
		title: "Tech Lead",
		organization: "ACE – Association of Computer Engineers",
		institution: "SRKR Engineering College, Bhimavaram",
		period: "2024 - Present",
		responsibilities: [
			"Directing core technical initiatives and architecting software platforms for college-wide technical events.",
			"Mentoring 300+ junior developers across full-stack engineering, cloud deployments, and git workflows.",
			"Organizing and coordinating national-level hackathons including Prajwalan 2K26, managing 60+ teams across multiple tracks.",
			"Conducting hands-on workshops on Docker, FastAPI, React, and Open-Source contributions.",
			"Managing multidisciplinary engineering teams to deliver production-ready software solutions under tight deadlines.",
			"Promoting a culture of engineering excellence, peer code reviews, and tech innovation across the institution."
		]
	},
	educationSummary: [
		"B.Tech in CSE — SRKR Engineering College (CGPA: 8.45 / 10.0)",
		"Diploma in CSE (DCME) — Sir C.R. Reddy Polytechnic College (89%)"
	],
	projectMindset: "Focus on zero-trust security, absolute data sovereignty, high system uptime, modular separation of concerns, and verifiable cryptographic execution trails.",
	passion: "Driven by curiosity and a relentless commitment to code craftsmanship. I believe in writing modular, self-documenting code that scales gracefully and delivers undeniable user value.",
	futureVision: "Building next-generation sovereign software platforms where data ownership, cryptographic verifiability, and privacy-first artificial intelligence form the core pillars of computing."
};

export const techStack = {
	section: { title: 'Tech', subtitle: 'SET' },
	groups: [
		{
			heading: 'Languages & Frameworks',
			items: [
				{
					label: 'Python',
					icon: SiPython,
					iconColor: 'rgb(55, 118, 171)',
					glowColor: 'rgba(55, 118, 171, 0.6)',
				},
				{
					label: 'JavaScript',
					icon: SiJavascript,
					iconColor: 'rgb(247, 223, 30)',
					glowColor: 'rgba(247, 223, 30, 0.5)',
				},
				{
					label: 'Solidity',
					icon: SiSolidity,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'Java',
					icon: FaJava,
					iconColor: 'rgb(237, 139, 0)',
					glowColor: 'rgba(237, 139, 0, 0.6)',
				},
				{
					label: 'React JS',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'FastAPI',
					icon: SiFastapi,
					iconColor: 'rgb(0, 150, 136)',
					glowColor: 'rgba(0, 150, 136, 0.6)',
				},
				{
					label: 'Node JS',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
			],
		},
		{
			heading: 'Cloud, DevOps & Security',
			items: [
				{
					label: 'AWS',
					icon: TbBrandAws,
					iconColor: 'rgb(255, 153, 0)',
					glowColor: 'rgba(255, 153, 0, 0.6)',
				},
				{
					label: 'Docker',
					icon: SiDocker,
					iconColor: 'rgb(36, 150, 237)',
					glowColor: 'rgba(36, 150, 237, 0.6)',
				},
				{
					label: 'Azure',
					icon: VscAzure,
					iconColor: 'rgb(0, 120, 212)',
					glowColor: 'rgba(0, 120, 212, 0.6)',
				},
				{
					label: 'Splunk',
					icon: SiSplunk,
					iconColor: 'rgb(0, 192, 0)',
					glowColor: 'rgba(0, 192, 0, 0.6)',
				},
				{
					label: 'GitHub Actions',
					icon: SiGithubactions,
					iconColor: 'rgb(36, 146, 255)',
					glowColor: 'rgba(36, 146, 255, 0.6)',
				},
				{
					label: 'Kubernetes',
					icon: SiKubernetes,
					iconColor: 'rgb(50, 108, 229)',
					glowColor: 'rgba(50, 108, 229, 0.6)',
				},
				{
					label: 'n8n',
					icon: SiN8N,
					iconColor: 'rgb(234, 76, 54)',
					glowColor: 'rgba(234, 76, 54, 0.6)',
				},
			],
		},
		{
			heading: 'Databases & Blockchain',
			items: [
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.75)',
				},
				{
					label: 'Redis',
					icon: SiRedis,
					iconColor: 'rgb(220, 56, 45)',
					glowColor: 'rgba(220, 56, 45, 0.6)',
				},
				{
					label: 'Neo4j',
					icon: SiNeo4J,
					iconColor: 'rgb(0, 143, 211)',
					glowColor: 'rgba(0, 143, 211, 0.6)',
				},
				{
					label: 'Apache Kafka',
					icon: SiApachekafka,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
			],
		},
	] satisfies TechGroup[],
};

export const projects: ProjectItem[] = [
	{
		id: 'ayusethu',
		title: 'AYUSETHU',
		subtitle: 'A blockchain-based platform for traceability of plant-based products',
		description: 'Enterprise blockchain supply chain platform engineered for end-to-end plant-based product provenance tracking, supply chain transparency, authenticity verification, and consumer confidence across multi-tier agricultural and botanical supplier networks.',
		featured: true,
		liveUrl: 'https://ayusethu-ui.vercel.app/register',
		githubUrl: 'https://github.com/GVAHCK/Ayusethu',
		overview: 'AYUSETHU is a pioneering blockchain-backed traceability platform designed to solve the critical challenges of counterfeit botanicals, unverified sourcing, and lack of transparency in the plant-based product ecosystem.',
		problemStatement: 'The global plant-based and botanical industry faces systemic fraud, species substitution, unverified farming origin, and opaque supply chain handoffs that compromise product trust and consumer safety.',
		solution: 'AYUSETHU establishes an immutable, decentralized ledger built on Hyperledger Fabric and IPFS. Every batch of plant-based products is logged with QR-based provenance records, AI species verification, and satellite geo-location tracking from farm to consumer shelf.',
		architecture: 'Permissioned Hyperledger Fabric blockchain network across 6 validation nodes, coupled with IPFS decentralized media storage, FastAPI backend API gateway, PostgreSQL metadata database, and a responsive React consumer portal.',
		coreFeatures: [
			'Immutable Blockchain Traceability: End-to-end batch logging on Hyperledger Fabric',
			'Supply Chain Transparency: Real-time visibility across farmers, processors, labs, and distributors',
			'Authenticity Verification: AI-driven botanical species verification and lab test certificate hashing',
			'Product Trust & Consumer Confidence: Instant consumer QR code scanning for batch provenance history',
			'Plant-Based Ecosystem Integration: Geo-tagged satellite verification of botanical cultivation sites',
			'Provenance Tracking: Tamper-proof custodial transfer history across multi-tier supply chain handoffs'
		],
		techStackBadges: [
			{ label: 'Hyperledger Fabric', icon: FaCubes, iconColor: 'rgb(47, 107, 150)', glowColor: 'rgba(47, 107, 150, 0.6)' },
			{ label: 'IPFS', icon: FaCubes, iconColor: 'rgb(101, 196, 206)', glowColor: 'rgba(101, 196, 206, 0.6)' },
			{ label: 'FastAPI', icon: SiFastapi, iconColor: 'rgb(0, 150, 136)', glowColor: 'rgba(0, 150, 136, 0.6)' },
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'Python', icon: SiPython, iconColor: 'rgb(55, 118, 171)', glowColor: 'rgba(55, 118, 171, 0.6)' },
			{ label: 'Docker', icon: SiDocker, iconColor: 'rgb(36, 150, 237)', glowColor: 'rgba(36, 150, 237, 0.6)' },
			{ label: 'PostgreSQL', icon: SiPostgresql, iconColor: 'rgb(51, 103, 145)', glowColor: 'rgba(51, 103, 145, 0.6)' }
		],
		dataFlow: [
			'1. Farm Harvesting: Farmer logs crop batch details, geo-coordinates, and harvest timestamps.',
			'2. AI Species Verification: Botanical image uploaded & validated via AI computer vision model.',
			'3. Decentralized Media Vault: Lab certificates & high-res images anchored to IPFS storage.',
			'4. Blockchain Block Commit: Hyperledger Fabric consensus node commits cryptographic state transaction.',
			'5. QR Code Minting: Unique batch QR code generated for product packaging.',
			'6. Consumer Provenance Audit: End consumer scans QR code to inspect full farm-to-shelf audit trail.'
		],
		securityAndScalability: [
			'Permissioned RBAC consensus preventing unauthorized data tampering across supply chain nodes.',
			'Cryptographic hash verification of lab test documentation on IPFS.',
			'National Hackathon Winner (Smart India Hackathon 2025 Runner-Up & E-Summit 2K26 Winner).'
		],
		keyInnovations: [
			'Zero-trust botanical provenance tracking with satellite geo-fencing.',
			'Direct farmer-to-consumer trust bridge built on open web standards.'
		],
		impact: [
			'Drove 40% reduction in counterfeit botanical incidents across test deployment nodes.',
			'Recognized with National Startup Expo 1st Place at E-Summit 2K26.'
		]
	},
	{
		id: 'nyaya-eval',
		title: 'NyayaEval Sovereign',
		subtitle: 'Sovereign AI Legal Evaluation & Document Analysis System',
		description: 'Enterprise-grade offline sovereign legal evaluation engine combining GPU-accelerated OCR, dense vector RAG, local LLMs, and cryptographic security for high-throughput automated legal document ingestion, contract auditing, and zero-trust compliance evaluation.',
		techStackBadges: [
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'FastAPI', icon: SiFastapi, iconColor: 'rgb(0, 150, 136)', glowColor: 'rgba(0, 150, 136, 0.6)' },
			{ label: 'Python', icon: SiPython, iconColor: 'rgb(55, 118, 171)', glowColor: 'rgba(55, 118, 171, 0.6)' },
			{ label: 'Local LLM', icon: FaBrain, iconColor: 'rgb(168, 85, 247)', glowColor: 'rgba(168, 85, 247, 0.6)' },
			{ label: 'FAISS Vector DB', icon: FaDatabase, iconColor: 'rgb(31, 195, 255)', glowColor: 'rgba(31, 195, 255, 0.6)' },
			{ label: 'Docker', icon: SiDocker, iconColor: 'rgb(36, 150, 237)', glowColor: 'rgba(36, 150, 237, 0.6)' },
			{ label: 'SHA-256', icon: FaLock, iconColor: 'rgb(34, 197, 94)', glowColor: 'rgba(34, 197, 94, 0.6)' }
		]
	},
	{
		id: 'dacc',
		title: 'DACC',
		subtitle: 'Decentralized Adaptive Cryptographic Cloud',
		description: 'A highly autonomous cloud platform utilizing blockchain verification and AI self-healing technology to maintain secure, fault-tolerant distributed cloud infrastructure and resilient zero-trust operations.',
		coreFeatures: [
			'Decentralized Cloud Architecture: Distributed node cluster eliminating single points of failure',
			'Blockchain-Backed Trust Layer: Cryptographic identity and consensus-based state verification',
			'Adaptive Fault Recovery: Real-time automated node failover and load redistribution',
			'AI Self-Healing: Machine learning anomaly detection & self-correcting cluster state engine',
			'Secure Distributed Operations: Zero-trust end-to-end encrypted storage & compute pipelines'
		],
		techStackBadges: [
			{ label: 'Blockchain Trust', icon: FaCubes, iconColor: 'rgb(31, 195, 255)', glowColor: 'rgba(31, 195, 255, 0.6)' },
			{ label: 'AI Self-Healing', icon: FaBrain, iconColor: 'rgb(168, 85, 247)', glowColor: 'rgba(168, 85, 247, 0.6)' },
			{ label: 'Python', icon: SiPython, iconColor: 'rgb(55, 118, 171)', glowColor: 'rgba(55, 118, 171, 0.6)' },
			{ label: 'Docker', icon: SiDocker, iconColor: 'rgb(36, 150, 237)', glowColor: 'rgba(36, 150, 237, 0.6)' },
			{ label: 'Kubernetes', icon: SiKubernetes, iconColor: 'rgb(50, 108, 229)', glowColor: 'rgba(50, 108, 229, 0.6)' },
			{ label: 'FastAPI', icon: SiFastapi, iconColor: 'rgb(0, 150, 136)', glowColor: 'rgba(0, 150, 136, 0.6)' }
		]
	},
	{
		id: 'aethervault',
		title: 'AETHERVAULT',
		subtitle: 'Holochain Decentralized Cloud Storage & P2P Sharing',
		description: 'A Holochain-based decentralized cloud project engineered for serverless peer-to-peer file storage, resilient data availability, and trustless access control without relying on central server authorities.',
		coreFeatures: [
			'Decentralized File Storage: Agent-centric distributed hash table (DHT) file storage',
			'Peer-to-Peer Architecture: Direct encrypted node-to-node file transfer protocol',
			'Secure Data Availability: Cryptographically validated redundant file chunking',
			'Distributed Cloud Model: Serverless peer network providing scalable storage capacity',
			'Trustless Access Layer: Zero-knowledge access control and encrypted file sharing'
		],
		techStackBadges: [
			{ label: 'Holochain P2P', icon: FaCubes, iconColor: 'rgb(101, 196, 206)', glowColor: 'rgba(101, 196, 206, 0.6)' },
			{ label: 'Decentralized Vault', icon: FaLock, iconColor: 'rgb(34, 197, 94)', glowColor: 'rgba(34, 197, 94, 0.6)' },
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'TypeScript', icon: SiTypescript, iconColor: 'rgb(49, 120, 198)', glowColor: 'rgba(49, 120, 198, 0.6)' },
			{ label: 'Node.js', icon: FaNodeJs, iconColor: 'rgb(104, 160, 99)', glowColor: 'rgb(104, 160, 99)' }
		]
	},
	{
		id: 'nebulasync-x',
		title: 'NEBULASYNC-X',
		subtitle: 'AWS Media Processing & Automated Notification Engine',
		description: 'An AWS cloud automation platform built with React and Node.js that converts raw text into video presentations and dispatches automated SMS, email, and scheduled push notifications.',
		coreFeatures: [
			'AWS Cloud Integration: Scalable AWS Lambda, S3, DynamoDB, and SNS serverless stack',
			'Text-to-Video Generation: Automated media synthesis pipeline converting text scripts into video',
			'Multi-Channel Notifications: Real-time SMS & email dispatch via AWS SNS and SES',
			'Scheduling Engine: Event-driven cron job automation for scheduled notification triggers',
			'Full-Stack Architecture: Modern React frontend dashboard with Node.js microservices backend'
		],
		techStackBadges: [
			{ label: 'AWS Cloud', icon: TbBrandAws, iconColor: 'rgb(255, 153, 0)', glowColor: 'rgba(255, 153, 0, 0.6)' },
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'Node.js', icon: FaNodeJs, iconColor: 'rgb(104, 160, 99)', glowColor: 'rgb(104, 160, 99)' },
			{ label: 'Text-to-Video', icon: FaFileCode, iconColor: 'rgb(189, 52, 254)', glowColor: 'rgba(189, 52, 254, 0.6)' },
			{ label: 'SMS & Email API', icon: IoMailOutline, iconColor: 'rgb(18, 122, 209)', glowColor: 'rgba(18, 122, 209, 0.7)' }
		]
	},
	{
		id: 'orbis-erp',
		title: 'ORBIS ERP',
		subtitle: 'Enterprise Resource Planning & Business Management System',
		description: 'An enterprise-grade ERP system enabling business owners to manage end-to-end operations, inventory levels, purchasing workflows, sales orders, and manufacturing analytics from a unified control center.',
		githubUrl: 'https://github.com/rajesh08114/ORBIS-ERP',
		coreFeatures: [
			'Products & Inventory: Real-time stock tracking, SKU management, and reorder alerts',
			'Sales & Purchasing: End-to-end order processing, vendor management, and invoice tracking',
			'Manufacturing Operations: Work order scheduling, bill of materials (BOM), and production metrics',
			'Executive Dashboards: Interactive visual analytics and financial reporting widgets',
			'Audit Logging & RBAC: Granular role-based access control and immutable transaction logs',
			'Full-Stack Architecture: Scalable modular backend with modern responsive frontend'
		],
		techStackBadges: [
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'Node.js', icon: FaNodeJs, iconColor: 'rgb(104, 160, 99)', glowColor: 'rgb(104, 160, 99)' },
			{ label: 'TypeScript', icon: SiTypescript, iconColor: 'rgb(49, 120, 198)', glowColor: 'rgba(49, 120, 198, 0.6)' },
			{ label: 'PostgreSQL', icon: SiPostgresql, iconColor: 'rgb(51, 103, 145)', glowColor: 'rgba(51, 103, 145, 0.6)' },
			{ label: 'Docker', icon: SiDocker, iconColor: 'rgb(36, 150, 237)', glowColor: 'rgba(36, 150, 237, 0.6)' }
		]
	},
	{
		id: 'traveloop',
		title: 'Traveloop',
		subtitle: 'AI Powered Smart Travel Assistant',
		description: 'Next-generation AI travel planner delivering real-time intelligent itinerary optimization, personalized travel recommendations, automated route scheduling, and interactive budget estimation powered by machine learning and user preference analytics.',
		liveUrl: 'https://aetherius-ten.vercel.app/',
		techStackBadges: [
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'Vite', icon: SiVite, iconColor: 'rgb(189, 52, 254)', glowColor: 'rgba(189, 52, 254, 0.6)' },
			{ label: 'TypeScript', icon: SiTypescript, iconColor: 'rgb(49, 120, 198)', glowColor: 'rgba(49, 120, 198, 0.6)' },
			{ label: 'AI Assistant', icon: FaRobot, iconColor: 'rgb(168, 85, 247)', glowColor: 'rgba(168, 85, 247, 0.6)' },
			{ label: 'Smart Route', icon: TbRoute, iconColor: 'rgb(31, 195, 255)', glowColor: 'rgba(31, 195, 255, 0.6)' },
			{ label: 'FastAPI', icon: SiFastapi, iconColor: 'rgb(0, 150, 136)', glowColor: 'rgba(0, 150, 136, 0.6)' }
		]
	},
	{
		id: 'prajwalan-2k26',
		title: 'PRAJWALAN 2K26',
		subtitle: 'Official National Level Hackathon Platform',
		description: 'Official digital platform for Prajwalan 2K26 national-level hackathon. Engineered high-performance responsive web architecture handling registration workflows, team formation, live event schedules, evaluation metrics, and real-time announcements for 60+ participating teams.',
		liveUrl: 'https://www.prajwalan-2k26.tech/',
		techStackBadges: [
			{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.6)' },
			{ label: 'TypeScript', icon: SiTypescript, iconColor: 'rgb(49, 120, 198)', glowColor: 'rgba(49, 120, 198, 0.6)' },
			{ label: 'Vite', icon: SiVite, iconColor: 'rgb(189, 52, 254)', glowColor: 'rgba(189, 52, 254, 0.6)' },
			{ label: 'Node.js', icon: FaNodeJs, iconColor: 'rgb(104, 160, 99)', glowColor: 'rgb(104, 160, 99)' }
		]
	}
];


