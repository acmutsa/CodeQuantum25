import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";

export default function Hero() {
	console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
	return (
		<section className="grid min-h-dvh w-full grid-cols-1 overflow-hidden">
			<div className="bg-cqPurple relative">
				<div className="">Code Quantum</div>
			</div>
		</section>
	);
}
