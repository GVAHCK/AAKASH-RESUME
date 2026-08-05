import { useState } from 'react';
import { FaAward, FaBrain, FaCompass, FaGraduationCap, FaLightbulb, FaRocket, FaUserCheck, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardSpotlight } from '../components/card-spotlight';
import { ScrollReveal, ScrollRevealBlur, TiltCard } from '../components/motion.component';
import { SectionTitle } from '../components/section-title.component';
import { aboutPage } from '../data/portfolio';

export const AboutPage = () => {
	const [imgError, setImgError] = useState(false);

	return (
		<div className='about-page-container'>
			{/* Clean Top Subpage Header */}
			<div className='subpage-nav'>
				<Link
					to='/'
					className='subpage-btn'
				>
					Home
				</Link>
				<Link
					to='/projects'
					className='subpage-btn'
				>
					Projects
				</Link>
			</div>

			{/* Section Header */}
			<div className='about-page-header'>
				<SectionTitle
					title={aboutPage.title}
					subTitle={aboutPage.subtitle}
				/>
			</div>

			{/* Split Layout */}
			<div className='about-page-split'>
				{/* LEFT COLUMN: Professional Content */}
				<div className='about-page-left'>
					{/* Professional Intro Card */}
					<ScrollReveal delay={100}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaUserCheck /> Professional Summary
								</div>
								<div className='about-card-text'>
									{aboutPage.introParagraphs.map((para, i) => (
										<p key={i}>{para}</p>
									))}
								</div>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Summary & Objective Card */}
					<ScrollReveal delay={150}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaCompass /> Career Objective & Vision
								</div>
								<div className='about-card-text'>
									<p><strong>Summary:</strong> {aboutPage.summary}</p>
									<p><strong>Objective:</strong> {aboutPage.careerObjective}</p>
								</div>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Leadership Card - ACE Tech Lead */}
					<ScrollReveal delay={200}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaUserShield /> Leadership & Technical Direction
								</div>
								<div className='leadership-header'>
									<div className='leadership-role'>{aboutPage.leadership.title}</div>
									<div className='leadership-org'>{aboutPage.leadership.organization} • {aboutPage.leadership.institution}</div>
									<div className='leadership-period'>{aboutPage.leadership.period}</div>
								</div>
								<ul className='about-list'>
									{aboutPage.leadership.responsibilities.map((resp, i) => (
										<li key={i} className='about-list-item'>{resp}</li>
									))}
								</ul>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Technical Profile Card */}
					<ScrollReveal delay={250}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaBrain /> Technical Profile & Expertise
								</div>
								<ul className='about-list'>
									{aboutPage.technicalExpertise.map((exp, i) => (
										<li key={i} className='about-list-item'>{exp}</li>
									))}
								</ul>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Areas of Interest Card */}
					<ScrollReveal delay={300}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaRocket /> Research & Engineering Interests
								</div>
								<ul className='about-list'>
									{aboutPage.areasOfInterest.map((item, i) => (
										<li key={i} className='about-list-item'>{item}</li>
									))}
								</ul>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Education Summary & Project Mindset */}
					<ScrollReveal delay={350}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaGraduationCap /> Education & Engineering Mindset
								</div>
								<ul className='about-list' style={{ marginBottom: '1.2rem' }}>
									{aboutPage.educationSummary.map((edu, i) => (
										<li key={i} className='about-list-item'>{edu}</li>
									))}
								</ul>
								<div className='about-card-text'>
									<p><strong>Project Mindset:</strong> {aboutPage.projectMindset}</p>
								</div>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>

					{/* Passion & Future Vision Card */}
					<ScrollReveal delay={400}>
						<CardSpotlight>
							<TiltCard className='about-card'>
								<div className='about-card-title'>
									<FaLightbulb /> Engineering Ethos & Future Vision
								</div>
								<div className='about-card-text'>
									<p><strong>Passion:</strong> {aboutPage.passion}</p>
									<p><strong>Future Vision:</strong> {aboutPage.futureVision}</p>
								</div>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>
				</div>

				{/* RIGHT COLUMN: Professional Photograph & Quick Specs */}
				<div className='about-page-right'>
					<ScrollRevealBlur delay={150}>
						<div className='photo-frame'>
							{!imgError ? (
								<img
									src={aboutPage.photoUrl}
									alt='Gudivada Venkata Aakash'
									className='photo-img'
									onError={() => setImgError(true)}
								/>
							) : (
								<div className='photo-fallback'>
									<FaGraduationCap className='photo-fallback-icon' />
									<div>
										<h3 style={{ fontFamily: 'Fugaz One', margin: '0.5rem 0' }}>G. V. Aakash</h3>
										<p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
											Software Engineer & Tech Lead
										</p>
									</div>
								</div>
							)}
							<div className='photo-glow'></div>
						</div>
					</ScrollRevealBlur>

					{/* Quick Highlight Stats below Photo */}
					<ScrollReveal delay={250}>
						<CardSpotlight>
							<TiltCard className='about-card' style={{ width: '100%', maxWidth: '420px', marginTop: '2rem' }}>
								<div className='about-card-title' style={{ fontSize: '1.2rem' }}>
									<FaAward /> Key Highlights
								</div>
								<ul className='about-list' style={{ fontSize: '0.95rem' }}>
									<li className='about-list-item'>Smart India Hackathon 2025 Runner-Up</li>
									<li className='about-list-item'>E-Summit 2K26 National Winner</li>
									<li className='about-list-item'>Prakalp 2K26 1st Place (Cybersecurity)</li>
									<li className='about-list-item'>Google Developer Student Club Ambassador</li>
									<li className='about-list-item'>B.Tech CSE — 8.45 CGPA</li>
								</ul>
							</TiltCard>
						</CardSpotlight>
					</ScrollReveal>
				</div>
			</div>
		</div>
	);
};

