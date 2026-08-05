import { Link } from 'react-router-dom';

type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
};

export const FloatingButton = ({ label, className, href = '#' }: TFloatingBtn) => {
	const isInternalRoute = href.startsWith('/') && !href.startsWith('/#');

	if (isInternalRoute) {
		return (
			<Link
				to={href}
				className={`floating-btn ${className || ''}`}
			>
				<div>{label}</div>
				<span></span>
			</Link>
		);
	}

	return (
		<a
			href={href}
			className={`floating-btn ${className || ''}`}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};

