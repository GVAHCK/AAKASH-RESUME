import { FaArrowRight, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardSpotlight } from '../components/card-spotlight';
import { GlowBox } from '../components/glow-box';
import { ScrollReveal, TiltCard } from '../components/motion.component';
import { SectionTitle } from '../components/section-title.component';
import { projects } from '../data/portfolio';

export const HomeFeaturedWork = () => {
	const featuredProject = projects.find((p) => p.featured) || projects[0];

	return (
		<section className='home-featured-section'>
			<ScrollReveal>
				<div className='home-featured-title'>
					<SectionTitle
						title='FEATURED'
						subTitle='WORK'
					/>
				</div>
			</ScrollReveal>

			{featuredProject && (
				<ScrollReveal delay={150}>
					<CardSpotlight>
					<TiltCard className='project-card featured'>
						<div className='featured-badge'>
							<FaStar style={{ marginRight: '0.4rem', inlineSize: 'auto' }} /> Featured Engineering Landmark
						</div>

						<div className='project-header'>
							<h2 className='project-title'>{featuredProject.title}</h2>
							<div className='project-subtitle'>{featuredProject.subtitle}</div>
						</div>

						<div className='project-description'>{featuredProject.description}</div>

						{/* Tech stack icons */}
						<div className='project-tech-badges' style={{ marginTop: '1rem' }}>
							{featuredProject.techStackBadges.slice(0, 6).map((badge, idx) => {
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

						{/* Actions */}
						<div className='project-actions'>
							{featuredProject.liveUrl && (
								<a
									href={featuredProject.liveUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='project-btn project-btn-primary'
								>
									<FaExternalLinkAlt /> Live Demo
								</a>
							)}
							<Link
								to='/projects'
								className='project-btn project-btn-secondary'
							>
								View All 8 Projects <FaArrowRight />
							</Link>
						</div>
					</TiltCard>
					</CardSpotlight>
				</ScrollReveal>
			)}

			{/* Call to Actions Bar */}
			<ScrollReveal delay={300}>
				<div className='home-cta-bar'>
					<Link
						to='/about'
						className='home-cta-btn'
					>
						Read Full Bio & Leadership <FaArrowRight />
					</Link>
					<Link
						to='/projects'
						className='home-cta-btn'
					>
						Explore Project Showcase <FaArrowRight />
					</Link>
				</div>
			</ScrollReveal>
		</section>
	);
};
