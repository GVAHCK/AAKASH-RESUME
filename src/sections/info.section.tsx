import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';
import { navButtons, personal, socialLinks } from '../data/portfolio';

export const InfoSection = () => {
	const [aboutNav, projectsNav] = navButtons;

	return (
		<div className='hero-section'>
			{personal.showRepoStar && (
				<a
					href={personal.repoUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='github-ribbon'
				>
					<div>{personal.repoStarLabel}</div>
					<span></span>
				</a>
			)}

			<FloatingButton
				label={aboutNav.label}
				className={aboutNav.className}
				href={aboutNav.href}
			/>

			<div className='hero-entrance hero-entrance-1'>
				<p>{personal.greeting}</p>
			</div>
			<div className='hero-entrance hero-entrance-2'>
				<TextHover
					text={personal.name}
					className='name'
				/>
			</div>
			<div className='hero-entrance hero-entrance-3'>
				<p>{personal.title}</p>
			</div>

			<FloatingButton
				label={projectsNav.label}
				className={projectsNav.className}
				href={projectsNav.href}
			/>

			<div className='hero-ambient-glow'></div>
			<div className='blur'></div>
			<div className='bottom-bar hero-entrance hero-entrance-4'>
				{socialLinks.map((link) => (
					<GlowLink
						key={link.label}
						href={link.href}
						color={link.glowColor}
						icon={<link.icon color={link.iconColor} />}
						aria-label={link.label.toLowerCase()}
					/>
				))}
			</div>
		</div>
	);
};
