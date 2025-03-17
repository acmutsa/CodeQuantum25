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
	const StandOutStickers: Partner = {
		name: "Stand Out Stickers",
		logo: "/img/landing/standout-stickers-logo.svg",
		url: "https://www.standoutstickers.com",
		tier: "InKind"
	}

	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-y-10 bg-cqWhite">
			{/*<div className="flex w-full flex-col items-center justify-center space-y-4">*/}
			{/*	<h1 className="text-center text-4xl font-black md:text-5xl">*/}
			{/*		Partners Sections*/}
			{/*	</h1>*/}
			{/*	<h3 className="px-4 text-center text-lg font-bold md:text-2xl lg:px-0">*/}
			{/*		{*/}
			{/*			"See the Partners Component inside components/landing/Partners for an example"*/}
			{/*		}*/}
			{/*	</h3>*/}
			{/*</div>*/}
			{/* Example Code of what our previous partner section looked like */}
			<h1 className="z-20 text-4xl sm:text-5xl md:text-6xl font-bold font-oswald italic text-cqPurple text-center pt-7 sm:pb-8">
        A Huge Thanks To Our Code Quantum Partners!
      </h1>

      <div className="z-20 flex justify-center items-center w-full h-full pt-12 gap-5">
        <PartnerCard partner={BreakThruTech} is_title={true}/>
		  <PartnerCard partner={StandOutStickers} is_title={true}/>
      </div>

      {/*<div className="z-20 grid place-items-center justify-center grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 lg:gap-12 w-[98%] pt-8 sm:pt-10 md:pt-[3.5rem] lg:pt-[4rem] pb-2 sm:pb-8 lg:pb-12 overflow-y-hidden overflow-x-visible no-scrollbar">*/}
      {/*  {partnerData.partners.map((partner: Partner) => (*/}
      {/*    <PartnerCard key={partner.name} partner={partner} is_title={false} />*/}
      {/*  ))}*/}
      {/*</div>*/}
		</section>
	);
}
