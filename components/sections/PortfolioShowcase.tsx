import RevealText from "../ui/RevealText";

const milestones = [
	{
		type: "EXPERIENCE",
		date: "MEI - AGUSTUS 2025",
		title: "Barista / Part-Time Staff",
		place: "ARAH Coffee",
		description: "Melayani pelanggan, menjaga ritme operasional, dan berkolaborasi saat jam sibuk.",
		tone: "lime",
	},
	{
		type: "EDUCATION",
		date: "2025 - NOW",
		title: "Universitas Sultan Ageng Tirtayasa",
		place: "Sarjana Informatika / S1",
		description: "Mendalami fondasi komputasi sambil mengasah kemampuan teknis dan kolaboratif.",
		tone: "coral",
	},
	{
		type: "FOUNDATION",
		date: "GRADUATED 2025",
		title: "SMA Nusantara 1",
		place: "Kota Tangerang",
		description: "Awal perjalanan akademik dan kebiasaan belajar yang terus saya bawa.",
		tone: "plain",
	},
];

const tools = ["Python", "Java", "C++", "JavaScript", "HTML & CSS", "React", "Next.js", "TypeScript", "Vercel", "MySQL", "Git & GitHub"];

export default function PortfolioShowcase() {
	return (
		<section className="journey-section section-shell" id="portfolio">
			<div className="section-heading section-heading--split">
				<div>
					<p className="section-kicker"><span>02</span> / SELECTED MILESTONES</p>
					<h2>
						<RevealText>Learning</RevealText>
						<RevealText className="reveal-text--muted" delay={0.08}>in motion.</RevealText>
					</h2>
				</div>
				<p className="section-summary">Setiap pengalaman menambah cara baru untuk memahami pekerjaan, manusia, dan teknologi.</p>
			</div>

			<div className="portfolio-grid">
				{milestones.map((milestone, index) => (
					<article className={`portfolio-card portfolio-card--${milestone.tone}`} key={milestone.title}>
						<div className="portfolio-card__meta">
							<span>0{index + 1}</span>
							<span>{milestone.type}</span>
						</div>
						<div>
							<p className="portfolio-card__date">{milestone.date}</p>
							<h3>{milestone.title}</h3>
							<p className="portfolio-card__place">{milestone.place}</p>
						</div>
						<p className="portfolio-card__description">{milestone.description}</p>
					</article>
				))}
			</div>

			<div className="toolkit">
				<div className="toolkit-heading">
					<p className="section-kicker"><span>03</span> / TOOLKIT</p>
					<h3>Tools I explore</h3>
				</div>
				<div className="tool-list">
					{tools.map((tool, index) => <span key={tool}><small>{String(index + 1).padStart(2, "0")}</small>{tool}</span>)}
				</div>
			</div>
		</section>
	);
}
