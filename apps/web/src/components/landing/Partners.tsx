import partnerData from "./partners.json";
import PartnerCard from "./PartnerCard";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

export default async function Partners() {
	// Christian Walker: Aware of weird bug from 1280px to 1286 px where background dissapears
	const BreakThruTech: Partner = {
		name: "Break Thru Tech",
		logo: "/img/landing/Break_Through_Tech_Logo.svg",
		url: "https://www.breakthroughtech.org/",
		tier: "Sponsor",
	};
	const HEB: Partner = {
		name: "H-E-B",
		logo: "/img/landing/H-E-B_logo.svg",
		url: "https://www.heb.com/",
		tier: "Sponsor",
	};
	const Dell: Partner = {
		name: "Dell",
		logo: "/img/landing/Dell_Technologies_logo.svg",
		url: "https://www.dell.com/",
		tier: "Sponsor",
	};
	const StandOutStickers: Partner = {
		name: "Stand Out Stickers",
		logo: "/img/landing/standout-stickers-logo.svg",
		url: "https://www.standoutstickers.com",
		tier: "InKind",
	};
	const InterviewCake: Partner = {
		name: "Interview Cake",
		logo: "/img/landing/interview-cake-logo.svg",
		url: "https://www.interviewcake.com/",
		tier: "InKind",
	};
	// fix mobile view for partners
	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-y-10 bg-cqWhite">
			<h1 className="z-20 pt-7 text-center font-oswald text-4xl font-bold italic text-cqPurple sm:pb-8 sm:text-5xl md:text-6xl">
				A Huge Thanks To Our Code Quantum Partners!
			</h1>
			<div className="z-20 grid h-full grid-cols-2 gap-5 px-2 pt-12 sm:grid-cols-3 lg:px-0">
				<PartnerCard partner={BreakThruTech} is_title={true} />
				<PartnerCard partner={HEB} is_title={true} />
				<PartnerCard partner={Dell} is_title={true} />
			</div>
			<div className="z-20 grid h-full grid-cols-2 gap-5 px-2 pt-12 lg:px-0">
				<PartnerCard partner={StandOutStickers} is_title={true} />
				<PartnerCard partner={InterviewCake} is_title={true} />
			</div>
		</section>
	);
}
