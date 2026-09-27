"use client";

import type { FormEvent } from "react";
import RevealText from "../ui/RevealText";

export default function ContactSection() {
	const submitContact = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("name") ?? "");
		const email = String(formData.get("email") ?? "");
		const message = String(formData.get("message") ?? "");
		const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
		const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

		window.location.href = `mailto:fadhalcs80@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<section className="contact-section section-shell" id="contact">
			<div className="contact-topline">
				<p className="section-kicker"><span>04</span> / CONTACT</p>
				<span className="contact-location">TANGERANG, INDONESIA</span>
			</div>
			<div className="contact-content">
				<h2>
					<RevealText>Let&apos;s make</RevealText>
					<RevealText className="reveal-text--accent" delay={0.08}>something matter.</RevealText>
				</h2>
				<a className="contact-cta" href="mailto:fadhalcs80@gmail.com">
					<span>Mulai percakapan</span><span aria-hidden="true">↗</span>
				</a>
			</div>
			<form className="contact-form" onSubmit={submitContact}>
				<label className="contact-field">
					<span>Nama</span>
					<input autoComplete="name" name="name" placeholder="Nama Anda" required />
				</label>
				<label className="contact-field">
					<span>Email</span>
					<input autoComplete="email" name="email" placeholder="nama@email.com" required type="email" />
				</label>
				<label className="contact-field contact-field--message">
					<span>Pesan</span>
					<textarea name="message" placeholder="Ceritakan hal yang ingin Anda diskusikan" required rows={4} />
				</label>
				<button className="contact-form__submit" type="submit">Kirim pesan <span aria-hidden="true">↗</span></button>
			</form>
			<div className="contact-details">
				<a href="mailto:fadhalcs80@gmail.com"><small>EMAIL</small>fadhalcs80@gmail.com</a>
				<a href="tel:+6285721681675"><small>PHONE</small>+62 857-2168-6175</a>
				<span><small>BASED IN</small>Tangerang, Indonesia</span>
			</div>
		</section>
	);
}
