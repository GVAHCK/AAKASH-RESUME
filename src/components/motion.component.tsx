import React, { useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
	children,
	className = '',
	delay = 0,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Respect reduced motion
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		if (prefersReducedMotion) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
			style={{
				transitionDelay: `${delay}ms`,
			}}
		>
			{children}
		</div>
	);
};

type TiltCardProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

export const TiltCard: React.FC<TiltCardProps> = ({
	children,
	className = '',
	style = {},
}) => {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -4; // Subtle 4 deg max tilt
		const rotateY = ((x - centerX) / centerX) * 4;

		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
	};

	const handleMouseLeave = () => {
		const card = cardRef.current;
		if (!card) return;
		card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
	};

	return (
		<div
			ref={cardRef}
			className={`tilt-card ${className}`}
			style={{
				transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
				transformStyle: 'preserve-3d',
				willChange: 'transform',
				...style,
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};

/* ── Additional Scroll Reveal Variants ── */

type ScrollRevealBlurProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

/**
 * Fades in + removes a soft blur. Ideal for images and photo frames.
 */
export const ScrollRevealBlur: React.FC<ScrollRevealBlurProps> = ({
	children,
	className = '',
	delay = 0,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		if (prefersReducedMotion) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`scroll-reveal-blur ${isVisible ? 'is-visible' : ''} ${className}`}
			style={{
				transitionDelay: `${delay}ms`,
			}}
		>
			{children}
		</div>
	);
};

type ScrollRevealScaleProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

/**
 * Scales from 0.96 + fades in. Ideal for section titles and hero elements.
 */
export const ScrollRevealScale: React.FC<ScrollRevealScaleProps> = ({
	children,
	className = '',
	delay = 0,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		if (prefersReducedMotion) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`scroll-reveal-scale ${isVisible ? 'is-visible' : ''} ${className}`}
			style={{
				transitionDelay: `${delay}ms`,
			}}
		>
			{children}
		</div>
	);
};

type StaggerGroupProps = {
	children: React.ReactNode;
	className?: string;
	staggerInterval?: number;
};

/**
 * Parent wrapper that assigns --stagger-index to each child,
 * enabling sequential CSS transition delays.
 */
export const StaggerGroup: React.FC<StaggerGroupProps> = ({
	children,
	className = '',
	staggerInterval = 80,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		if (prefersReducedMotion) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{ threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`stagger-group ${isVisible ? 'is-visible' : ''} ${className}`}
			style={{
				'--stagger-interval': `${staggerInterval}ms`,
			}}
		>
			{React.Children.map(children, (child, index) => (
				<div
					className='stagger-item'
					style={{ '--stagger-index': index }}
				>
					{child}
				</div>
			))}
		</div>
	);
};
