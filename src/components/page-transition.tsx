import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type PageTransitionProps = {
	children: React.ReactNode;
};

/**
 * Wraps page content with a CSS-driven fade transition on route change.
 * Uses opacity + translateY for GPU-composited animation.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
	const { pathname } = useLocation();
	const [isVisible, setIsVisible] = useState(true);
	const prevPath = useRef(pathname);

	useEffect(() => {
		// Respect reduced motion
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		if (prefersReducedMotion || prevPath.current === pathname) {
			prevPath.current = pathname;
			return;
		}

		prevPath.current = pathname;
		setIsVisible(false);

		// Small RAF delay to ensure the hidden state renders before transition
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setIsVisible(true);
			});
		});
	}, [pathname]);

	return (
		<div className={`page-transition ${isVisible ? 'page-visible' : 'page-entering'}`}>
			{children}
		</div>
	);
};
