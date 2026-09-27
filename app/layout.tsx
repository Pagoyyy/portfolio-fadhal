import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Muhammad Fadhal Masykuri | Informatics Portfolio",
	description:
		"Portfolio Muhammad Fadhal Masykuri, mahasiswa Informatika Universitas Sultan Ageng Tirtayasa.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="id" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
			<body>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
