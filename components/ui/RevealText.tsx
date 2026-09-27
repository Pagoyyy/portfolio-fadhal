"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealTextProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export default function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.span
			className={`reveal-text ${className}`.trim()}
			initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
			whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.8 }}
			transition={{ type: "spring", stiffness: 105, damping: 17, delay }}
		>
			{children}
		</motion.span>
	);
}