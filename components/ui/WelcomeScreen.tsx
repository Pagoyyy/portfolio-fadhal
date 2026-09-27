"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function WelcomeScreen() {
	const [isOpen, setIsOpen] = useState(true);
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (!isOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.section
					className="opening-screen"
					role="dialog"
					aria-modal="true"
					aria-labelledby="opening-title"
					initial={prefersReducedMotion ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={prefersReducedMotion ? { opacity: 0 } : { y: "-100%" }}
					transition={{ duration: prefersReducedMotion ? 0 : 0.72, ease: [0.76, 0, 0.24, 1] }}
				>
					<header className="opening-screen__topline">
						<span className="opening-screen__monogram">FM</span>
						<span>PERSONAL PORTFOLIO</span>
						<span>TANGERANG / ID</span>
					</header>

					<div className="opening-screen__main">
						<div className="opening-screen__copy">
							<p className="opening-screen__eyebrow"><span /> INFORMATICS / UNTIRTA</p>
							<h1 id="opening-title">
								Welcome to
								<br />
								<span>my portfolio.</span>
							</h1>
							<p className="opening-screen__intro">
								Muhammad Fadhal Masykuri
								<br />
								Ideas, learning, and a little bit of curiosity.
							</p>
							<button className="opening-screen__enter" type="button" onClick={() => setIsOpen(false)}>
								<span>Masuk ke website</span><span aria-hidden="true">↗</span>
							</button>
						</div>

					</div>

					<footer className="opening-screen__footer">
						<span>01 / 04</span>
						<span>SCROLL INTO MY WORLD</span>
						<span>2025 - NOW</span>
					</footer>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
