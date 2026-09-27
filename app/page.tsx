import About from "../components/sections/About";
import ContactSection from "../components/sections/ContactSection";
import Hero from "../components/sections/Hero";
import PortfolioShowcase from "../components/sections/PortfolioShowcase";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import Navbar from "../components/ui/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";
import WelcomeScreen from "../components/ui/WelcomeScreen";

export default function HomePage() {
	return (
		<>
			<AnimatedBackground />
			<Navbar />
			<WelcomeScreen />
			<main>
				<Hero />
				<ScrollReveal><About /></ScrollReveal>
				<ScrollReveal delay={0.06}><PortfolioShowcase /></ScrollReveal>
				<ScrollReveal delay={0.12}><ContactSection /></ScrollReveal>
			</main>
			<footer className="site-footer">
				<span>MUHAMMAD FADHAL MASYKURI</span>
			</footer>
		</>
	);
}
