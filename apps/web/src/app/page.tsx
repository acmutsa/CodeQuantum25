import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/landing/Hero";

import About from "@/components/landing/About";

import Partners from "@/components/landing/Partners";
import Footer from "@/components/landing/Footer";
import MLHBadge from "@/components/landing/MLHBadge";
import FAQ from "@/components/landing/FAQ";

import { Oswald } from "next/font/google";
import WorkWithUs from "@/components/landing/WorkWithUs";
import localFont from "next/font/local";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const alice = localFont({
	src: '../../public/fonts/alice.ttf',
	variable: '--font-alice',
})

export default function Home() {
	return (
		<div className={`${alice.variable} w-full overflow-x-hidden`}>
			<Navbar />
			{/*<MLHBadge />*/}
			<main className="overflow-x-hidden">
				<Hero />
				<About />
				<FAQ/>
				<Partners />
				<WorkWithUs />
				<Footer />
			</main>
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 30;
