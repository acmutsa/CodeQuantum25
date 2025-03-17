import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Github } from "lucide-react";
import c from "config";
import { camelCaseToWords } from "@/lib/utils/shared/camelCaseToWords";
import FooterLinks from "./FooterComponents/FooterLinks";
import ManagedByHackkit from "./FooterComponents/ManagedByHackKit";

export default function Footer() {
	return (
		<section className="bg-cqBlue min-h-[25vh] w-full items-center justify-center border-t-2 border-muted-foreground p-1 py-8 sm:p-8 md:px-10">
			<div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 md:justify-items-center lg:grid-cols-5 lg:justify-items-start">
				<div className="col-span-2 row-span-1 flex items-center justify-self-center font-black sm:row-span-3 lg:row-span-1 lg:justify-self-start">
					<Image
						className="w-20 sm:w-28"
						src="/img/logo/CQFinalLogo.svg"
						alt="logo"
						width={100}
						height={50}
					/>
					<div className={"flex flex-col"}>
						<h1 className={"text-cqOrange pl-0 pr-2 text-3xl sm:text-4xl"}>Code Quantum</h1>
						<h1 className="text-cqOrange pl-0 pr-2 text-2xl sm:text-xl">
							Down the Rabbit Hole
						</h1>
					</div>
				</div>
				{Object.entries(c.footerLinkItems).map(([title, data], idx) => (
					<FooterLinks
						title={camelCaseToWords(title)}
						data={data}
						key={idx}
					/>
				))}
				<div className="col-span-2 flex flex-col gap-y-3 justify-self-center lg:col-span-1">
					<Link href="https://github.com/acmutsa/HackKit">
						<ManagedByHackkit />
					</Link>
				</div>
				<div className="col-span-2 flex h-[41px] w-[200px] items-center justify-between gap-2 justify-self-center rounded-lg bg-black px-2 lg:col-span-1 lg:col-start-5">
					{/* TODO: Change these links */}
					<Link href={c.links.twitter}>
						<Twitter className="invert dark:invert-0" />
					</Link>
					<Link href={c.links.instagram}>
						<Instagram className="invert dark:invert-0" />
					</Link>
					<Link href="https://www.facebook.com/UTSA.ACM">
						<Facebook className="invert dark:invert-0" />
					</Link>
					<Link href={c.links.github}>
						<Github className="invert dark:invert-0" />
					</Link>
					<Link href={c.links.discord}>
						<Image
							className="select-none dark:invert"
							src="/img/landing/discord_icon.svg"
							alt="Discord logo"
							width={20}
							height={20}
						/>
					</Link>
				</div>
				<p className="text-cqYellow col-span-2 self-center justify-self-center text-center font-mono text-xs sm:col-start-2 md:py-0 lg:col-span-3 lg:col-start-2 lg:row-start-2 lg:w-11/12">
					Made with &lt;/&gt; &amp; ♥ @ Code Quantum
					<br />© Code Quantum &amp; Association of Computing
					Machinery at UTSA 2025. All Rights Reserved.
				</p>
			</div>
		</section>
	);
}
