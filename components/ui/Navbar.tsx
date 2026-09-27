"use client";

import { useState } from "react";
import BandSoundControl from "../band/BandSoundControl";

const links = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Portfolio", href: "#portfolio" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="site-header">
			<nav className="nav-shell" aria-label="Navigasi utama">
				<a className="nav-signature" href="#home" aria-label="Kembali ke atas">
					<span className="nav-monogram">FM</span>
					<span className="nav-signature__text">
						<strong>PERSONAL PORTFOLIO</strong>
						<small>TANGERANG / ID</small>
					</span>
				</a>

				<div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-links">
					{links.map((link) => (
						<a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
							{link.label}
						</a>
					))}
				</div>

				<BandSoundControl />

				<button
					className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
					type="button"
					aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
					aria-expanded={menuOpen}
					aria-controls="primary-links"
					onClick={() => setMenuOpen((isOpen) => !isOpen)}
				>
					<span />
					<span />
				</button>
			</nav>
		</header>
	);
}