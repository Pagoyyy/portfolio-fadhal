"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type ScrollRevealProps = {
	children: ReactNode;
	delay?: number;
};

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion) {
		return <div>{children}</div>;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 48 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.16 }}
			transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.8, delay }}
		>
			{children}
		</motion.div>
	);
}