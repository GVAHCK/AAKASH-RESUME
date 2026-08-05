import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardSpotlight } from '../components/card-spotlight';
import { GlowBox } from '../components/glow-box';
import { ScrollReveal, TiltCard } from '../components/motion.component';
import { SectionTitle } from '../components/section-title.component';
import { projects } from '../data/portfolio';

export const ProjectsPage = () => {
	const featuredProject = projects.find((p) => p.featured) || projects[0];
	const standardProjects = projects.filter((p) => p.id !== featuredProject.id);

	return (
		<div className='projects-page-container'>
			{/* Clean Top Subpage Header */}
			<div className='subpage-nav'>
				<Link
					to='/'
					className='subpage-btn'
				>
					Home
				</Link>
				<Link
					to='/about'
					className='subpage-btn'
				>
					About Me
				</Link>
			</div>

			{/* Section Header - Fixed title split */}
			<div className='projects-page-header'>
				<SectionTitle
					title='MY'
					subTitle='PROJECTS'
				/>
			</div>

			<div className='projects-grid'>
				{/* FEATURED PROJECT 1: AYUSETHU */}
				{featuredProject && (
					<ScrollReveal delay={100}>
						<CardSpotlight>
						<TiltCard className='project-card featured'>
							<div className='featured-badge'>
								<FaStar style={{ marginRight: '0.4rem', inlineSize: 'auto' }} /> Featured Traceability Platform
							</div>

							<div className='project-header'>
								<h2 className='project-title'>{featuredProject.title}</h2>
								<div className='project-subtitle'>{featuredProject.subtitle}</div>
							</div>

							<div className='project-description'>{featuredProject.description}</div>

							{/* Extended Sections for Featured Project */}
							{featuredProject.overview && (
								<div className='project-section-block'>
									<div className='project-section-title'>Overview</div>
									<div className='project-section-content'>{featuredProject.overview}</div>
								</div>
							)}

							{featuredProject.problemStatement && (
								<div className='project-section-block'>
									<div className='project-section-title'>Problem Statement</div>
									<div className='project-section-content'>{featuredProject.problemStatement}</div>
								</div>
							)}

							{featuredProject.solution && (
								<div className='project-section-block'>
									<div className='project-section-title'>Solution & Ecosystem</div>
									<div className='project-section-content'>{featuredProject.solution}</div>
								</div>
							)}

							{featuredProject.architecture && (
								<div className='project-section-block'>
									<div className='project-section-title'>Architecture</div>
									<div className='project-section-content'>{featuredProject.architecture}</div>
								</div>
							)}

							{featuredProject.coreFeatures && featuredProject.coreFeatures.length > 0 && (
								<div className='project-section-block'>
									<div className='project-section-title'>Core Features & Provenance Capabilities</div>
									<ul className='project-bullets-list'>
										{featuredProject.coreFeatures.map((feature, i) => (
											<li key={i} className='project-bullet-item'>{feature}</li>
										))}
									</ul>
								</div>
							)}

							{/* Data Flow */}
							{featuredProject.dataFlow && featuredProject.dataFlow.length > 0 && (
								<div className='project-section-block'>
									<div className='project-section-title'>Supply Chain Data Flow</div>
									<ul className='project-bullets-list'>
										{featuredProject.dataFlow.map((flow, i) => (
											<li key={i} className='project-bullet-item'>{flow}</li>
										))}
									</ul>
								</div>
							)}

							{/* Security & Scalability */}
							{featuredProject.securityAndScalability && (
								<div className='project-section-block'>
									<div className='project-section-title'>Security & Scalability</div>
									<ul className='project-bullets-list'>
										{featuredProject.securityAndScalability.map((sec, i) => (
											<li key={i} className='project-bullet-item'>{sec}</li>
										))}
									</ul>
								</div>
							)}

							{/* Key Innovations */}
							{featuredProject.keyInnovations && (
								<div className='project-section-block'>
									<div className='project-section-title'>Key Innovations</div>
									<ul className='project-bullets-list'>
										{featuredProject.keyInnovations.map((inn, i) => (
											<li key={i} className='project-bullet-item'>{inn}</li>
										))}
									</ul>
								</div>
							)}

							{/* Impact */}
							{featuredProject.impact && (
								<div className='project-section-block'>
									<div className='project-section-title'>Impact & National Recognition</div>
									<ul className='project-bullets-list'>
										{featuredProject.impact.map((imp, i) => (
											<li key={i} className='project-bullet-item'>{imp}</li>
										))}
									</ul>
								</div>
							)}

							{/* Technology Badges */}
							<div className='project-section-block'>
								<div className='project-section-title'>Technology Stack</div>
								<div className='project-tech-badges'>
									{featuredProject.techStackBadges.map((badge, idx) => {
										const IconComp = badge.icon;
										return (
											<GlowBox
												key={idx}
												title={badge.label}
												color={badge.glowColor}
												icon={<IconComp color={badge.iconColor} />}
											/>
										);
									})}
								</div>
							</div>

							{/* Project Actions */}
							<div className='project-actions'>
								{featuredProject.liveUrl && (
									<a
										href={featuredProject.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='project-btn project-btn-primary'
									>
										<FaExternalLinkAlt /> Visit Live Demo
									</a>
								)}
								{featuredProject.githubUrl && (
									<a
										href={featuredProject.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='project-btn project-btn-secondary'
									>
										<FaGithub /> GitHub Repository
									</a>
								)}
							</div>
						</TiltCard>
						</CardSpotlight>
					</ScrollReveal>
				)}

				{/* STANDARD PROJECTS GRID */}
				<div className='standard-projects-grid'>
					{standardProjects.map((project, idx) => (
						<ScrollReveal key={project.id} delay={150 + (idx % 3) * 100}>
							<CardSpotlight>
							<TiltCard className='project-card'>
								<div className='project-header'>
									<h3 className='project-title' style={{ fontSize: '1.6rem' }}>
										{project.title}
									</h3>
									<div className='project-subtitle' style={{ fontSize: '1rem' }}>
										{project.subtitle}
									</div>
								</div>

								<div className='project-description' style={{ fontSize: '0.98rem' }}>
									{project.description}
								</div>

								{project.coreFeatures && project.coreFeatures.length > 0 && (
									<div style={{ marginBottom: '1.2rem' }}>
										<ul className='project-bullets-list' style={{ gridTemplateColumns: '1fr' }}>
											{project.coreFeatures.map((feat, bIdx) => (
												<li key={bIdx} className='project-bullet-item' style={{ fontSize: '0.9rem' }}>
													{feat}
												</li>
											))}
										</ul>
									</div>
								)}

								{/* Tech stack icons */}
								<div className='project-tech-badges' style={{ marginTop: 'auto' }}>
									{project.techStackBadges.map((badge, bIdx) => {
										const IconComp = badge.icon;
										return (
											<GlowBox
												key={bIdx}
												title={badge.label}
												color={badge.glowColor}
												icon={<IconComp color={badge.iconColor} />}
											/>
										);
									})}
								</div>

								{/* Actions */}
								<div className='project-actions'>
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='project-btn project-btn-primary'
										>
											<FaExternalLinkAlt /> Live Demo
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='project-btn project-btn-secondary'
										>
											<FaGithub /> GitHub
										</a>
									)}
								</div>
							</TiltCard>
							</CardSpotlight>
						</ScrollReveal>
					))}
				</div>
			</div>
		</div>
	);
};


