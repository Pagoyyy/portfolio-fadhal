import RevealText from "../ui/RevealText";

const strengths = [
	"Analytical thinking",
	"Problem solving",
	"Communication",
	"Public speaking",
	"Team collaboration",
];

export default function About() {
	return (
		<section className="about-section section-shell" id="about">
			<div className="section-heading">
				<p className="section-kicker"><span>01</span> / ABOUT</p>
				<h2>
					<RevealText>Belajar luas.</RevealText>
					<RevealText className="reveal-text--muted" delay={0.08}>Berpikir terarah.</RevealText>
				</h2>
			</div>

			<div className="about-grid">
				<div className="about-copy">
					<p className="about-lead">
						Informatika memberi saya ruang untuk memahami masalah, merancang kemungkinan, lalu membangun sesuatu yang benar-benar berguna.
					</p>
					<p>
						Saat ini saya menempuh studi di Universitas Sultan Ageng Tirtayasa. Saya menikmati proses belajar mandiri, eksplorasi teknologi baru, dan kerja bersama tim dengan sudut pandang yang berbeda.
					</p>
					<div className="strength-list" aria-label="Kekuatan utama">
						{strengths.map((strength, index) => (
							<span key={strength}><small>0{index + 1}</small>{strength}</span>
						))}
					</div>
				</div>

				<div className="about-facts">
					<div className="fact-block fact-block--accent">
						<span className="fact-label">CURRENTLY</span>
						<strong>Learning<br />by building.</strong>
						<span className="fact-foot">INFORMATICS / S1</span>
					</div>
					<div className="fact-pair">
						<div className="fact-block">
							<strong>4<span>+</span></strong>
							<span className="fact-label">LANGUAGES EXPLORED</span>
						</div>
						<div className="fact-block fact-block--coral">
							<strong>1</strong>
							<span className="fact-label">WORK EXPERIENCE</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
