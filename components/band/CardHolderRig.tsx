"use client";

import { motion, useSpring, useTransform, type MotionValue } from "motion/react";

type CardHolderRigProps = {
	dragX: MotionValue<number>;
	dragY: MotionValue<number>;
};

export default function CardHolderRig({ dragX, dragY }: CardHolderRigProps) {
	const swingX = useSpring(dragX, { stiffness: 170, damping: 18, mass: 0.65 });
	const swingY = useSpring(dragY, { stiffness: 150, damping: 16, mass: 0.7 });
	const leftStrap = useTransform(() => {
		const attachX = 179 + dragX.get();
		const attachY = 82 + dragY.get();
		return `M 126 2 C 130 38 ${attachX - 42 + swingX.get() * 0.18} ${attachY - 43 + swingY.get() * 0.2} ${attachX - 7} ${attachY}`;
	});
	const rightStrap = useTransform(() => {
		const attachX = 179 + dragX.get();
		const attachY = 82 + dragY.get();
		return `M 214 2 C 210 38 ${attachX + 42 + swingX.get() * 0.18} ${attachY - 43 + swingY.get() * 0.2} ${attachX + 7} ${attachY}`;
	});

	return (
		<svg className="hero-portrait-rig__straps" viewBox="0 0 340 540" preserveAspectRatio="none" aria-hidden="true" focusable="false">
			<motion.path d={leftStrap} fill="none" stroke="#080c09" strokeWidth="9" strokeLinecap="round" opacity="0.72" />
			<motion.path d={leftStrap} fill="none" stroke="var(--lime)" strokeWidth="4" strokeLinecap="round" />
			<motion.path d={rightStrap} fill="none" stroke="#080c09" strokeWidth="9" strokeLinecap="round" opacity="0.72" />
			<motion.path d={rightStrap} fill="none" stroke="var(--coral)" strokeWidth="4" strokeLinecap="round" />
		</svg>
	);
}