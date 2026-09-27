"use client";

import { useRef, useState } from "react";

export default function BandSoundControl() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [soundEnabled, setSoundEnabled] = useState(false);

	const toggleSound = async () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (audio.muted || audio.paused) {
			audio.muted = false;
			audio.volume = 0.4;
			try {
				await audio.play();
				setSoundEnabled(true);
			} catch {
				audio.muted = true;
				setSoundEnabled(false);
			}
			return;
		}

		audio.muted = true;
		setSoundEnabled(false);
	};

	return (
		<>
			<button
				className={`sound-toggle${soundEnabled ? " is-on" : ""}`}
				type="button"
				onClick={toggleSound}
				aria-pressed={soundEnabled}
				aria-label={soundEnabled ? "Matikan lagu" : "Nyalakan lagu"}
			>
				<span className="sound-toggle__light" aria-hidden="true" />
				<span>{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
			</button>
			<audio
				ref={audioRef}
				className="background-audio"
				src="/lagu-selepas-hujan.mp3"
				autoPlay
				muted
				loop
				preload="auto"
				aria-label="Lagu latar"
			/>
		</>
	);
}