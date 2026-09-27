"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import CardHolderRig from "../band/CardHolderRig";

export default function Hero() {
	const prefersReducedMotion = useReducedMotion();
	const dragX = useMotionValue(0);
	const dragY = useMotionValue(0);

	const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
		if (event.pointerType !== "mouse") return;

		const bounds = event.currentTarget.getBoundingClientRect();
		const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
		const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
		event.currentTarget.style.setProperty("--tilt-x", `${-vertical * 5}deg`);
		event.currentTarget.style.setProperty("--tilt-y", `${horizontal * 6}deg`);
		event.currentTarget.style.setProperty("--photo-x", `${horizontal * 8}px`);
		event.currentTarget.style.setProperty("--photo-y", `${vertical * 8}px`);
	};

	const resetPointer = (event: PointerEvent<HTMLElement>) => {
		event.currentTarget.style.setProperty("--tilt-x", "0deg");
		event.currentTarget.style.setProperty("--tilt-y", "0deg");
		event.currentTarget.style.setProperty("--photo-x", "0px");
		event.currentTarget.style.setProperty("--photo-y", "0px");
	};

	return (
		<section className="hero-section page-shell" id="home">
			<div className="hero-copy">
				<div className="welcome-label" role="status">
					<span className="welcome-label__dot" aria-hidden="true" />
					<span>UNTIRTA / INFORMATICS</span>
					<span className="welcome-label__year">2025 - NOW</span>
				</div>
				<p className="eyebrow">CURIOUS BY NATURE. BUILT TO LEARN.</p>
				<h1>
					Ideas into
					<br />
					<span>something</span>
					<br />
					<span className="hero-heading__accent">real.</span>
				</h1>
				<p className="hero-intro">
					Saya Muhammad Fadhal Masykuri, mahasiswa Informatika yang senang mengubah rasa ingin tahu menjadi solusi yang berguna.
				</p>
				<div className="hero-actions">
					<a className="button button--lime" href="#portfolio">
						Lihat perjalanan <span aria-hidden="true">↘</span>
					</a>
					<a className="text-link" href="#about">
						Kenali saya <span aria-hidden="true">↗</span>
					</a>
				</div>
				<div className="hero-index" aria-label="Ringkasan">
					<div>
						<strong>01</strong>
						<span>INFORMATICS</span>
					</div>
					<div>
						<strong>UNTIRTA</strong>
						<span>UNIVERSITY</span>
					</div>
					<div>
						<strong>TGR</strong>
						<span>INDONESIA</span>
					</div>
				</div>
			</div>

			<div className="hero-portrait-rig">
				<CardHolderRig dragX={dragX} dragY={dragY} />
				<motion.figure
					className="hero-portrait"
					style={{ x: dragX, y: dragY }}
					initial={prefersReducedMotion ? false : { opacity: 0, rotate: 1 }}
					animate={{ opacity: 1, rotate: 0 }}
					transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.1, ease: "easeOut" }}
					drag={!prefersReducedMotion}
					dragConstraints={{ top: -48, right: 48, bottom: 48, left: -48 }}
					dragElastic={0.58}
					dragSnapToOrigin
					dragTransition={{ bounceStiffness: 520, bounceDamping: 16 }}
					whileDrag={prefersReducedMotion ? undefined : { scale: 1.04, rotate: 1.5, zIndex: 5 }}
					onPointerMove={handlePointerMove}
					onPointerLeave={resetPointer}
				>
					<span className="hero-portrait__holder" aria-hidden="true" />
					<div className="hero-portrait__frame">
						<Image
							src="/fadhal-dongker.jpeg"
							alt="Potret Muhammad Fadhal Masykuri"
							fill
							draggable={false}
							priority
							sizes="(max-width: 680px) 78vw, (max-width: 900px) 33vw, 340px"
						/>
						<span className="hero-portrait__vertical" aria-hidden="true">FADHAL / 2025</span>
						<figcaption>
							<span>MUHAMMAD FADHAL MASYKURI</span>
							<span>INFORMATICS STUDENT</span>
						</figcaption>
					</div>
					<div className="hero-portrait__index" aria-hidden="true">01 / 04</div>
				</motion.figure>
			</div>
		</section>
	);
}
