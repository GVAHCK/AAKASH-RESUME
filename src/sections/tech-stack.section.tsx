import { GlowBox } from '../components/glow-box';
import { ScrollReveal, StaggerGroup } from '../components/motion.component';
import { SectionTitle } from '../components/section-title.component';
import { techStack } from '../data/portfolio';

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techStack.groups.map((group, idx) => (
					<ScrollReveal key={idx} delay={idx * 120}>
						<div>
							<p>{group.heading}</p>
							<StaggerGroup className='tech-row' staggerInterval={60}>
								{group.items.map((item) => (
									<GlowBox
										key={item.label}
										icon={<item.icon color={item.iconColor} />}
										color={item.glowColor}
										title={item.label}
									/>
								))}
							</StaggerGroup>
						</div>
					</ScrollReveal>
				))}
			</div>
			<div>
				<SectionTitle
					title={techStack.section.title}
					subTitle={techStack.section.subtitle}
				/>
			</div>
		</section>
	);
};
