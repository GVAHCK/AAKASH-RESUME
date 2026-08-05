import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HexBg } from './components/hex-bg';
import { MouseTrail } from './components/mouse-trail';
import { PageTransition } from './components/page-transition';
import { ScrollBar } from './components/scroll-bar';
import { AboutPage } from './pages/about.page';
import { ProjectsPage } from './pages/projects.page';
import { HomeFeaturedWork } from './sections/home-featured.section';
import { InfoSection } from './sections/info.section';
import { TechStack } from './sections/tech-stack.section';
import './styles/about-me.css';
import './styles/about-page.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/hex-bg.css';
import './styles/info-section.css';
import './styles/motion-tokens.css';
import './styles/motion.css';
import './styles/mouse-trail.css';
import './styles/page-transition.css';
import './styles/projects-page.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const HomePage = () => (
	<>
		<InfoSection />
		<TechStack />
		<HomeFeaturedWork />
	</>
);

function App() {
	return (
		<>
			<ScrollToTop />
			<HexBg />
			<ScrollBar />
			<MouseTrail />
			<PageTransition>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/about'
						element={<AboutPage />}
					/>
					<Route
						path='/projects'
						element={<ProjectsPage />}
					/>
				</Routes>
			</PageTransition>
		</>
	);
}

export default App;


