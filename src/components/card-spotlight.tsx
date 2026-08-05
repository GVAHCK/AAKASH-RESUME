import React, { useCallback, useRef } from 'react';

type CardSpotlightProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

/**
 * Wraps a card element with a mouse-tracked radial spotlight overlay.
 * Sets --mouse-x and --mouse-y CSS custom properties on the container,
 * which the card's ::before pseudo-element uses for a radial gradient.
 */
export const CardSpotlight: React.FC<CardSpotlightProps> = ({
	children,
	className = '',
	style = {},
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
		el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
	}, []);

	const handleMouseLeave = useCallback(() => {
		const el = containerRef.current;
		if (!el) return;
		el.style.setProperty('--mouse-x', `-999px`);
		el.style.setProperty('--mouse-y', `-999px`);
	}, []);

	return (
		<div
			ref={containerRef}
			className={`card-spotlight ${className}`}
			style={style}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};
