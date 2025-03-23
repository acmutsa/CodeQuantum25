"use client";

import { motion } from "framer-motion";
import {
	Rabbit,
	Crown,
	Sparkles,
	HeartIcon,
	Clock,
	CupSoda,
} from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { Card } from "../shadcn/ui/card";
import { useState, useEffect } from "react";

export default function WorkWithUs() {
	const [innerWidth, setInnerWidth] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);
	useEffect(() => {
		setInnerWidth(window.innerWidth);
		setInnerHeight(window.innerHeight);
	}, []);
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-purple-50 py-20">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				{Array.from({ length: 15 }).map((_, i) => (
					<motion.div
						key={i}
						className="absolute opacity-30"
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: [0.2, 0.5, 0.2],
							scale: [1, 2, 1],
							x: [
								Math.random() * innerWidth,
								Math.random() * innerWidth,
							],
							y: [
								Math.random() * innerHeight,
								Math.random() * innerHeight,
							],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 5,
						}}
					>
						<Sparkles className="h-4 w-4 text-purple-300" />
					</motion.div>
				))}
			</div>

			<motion.div
				className="container relative mx-auto px-4"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Header Section */}
				<motion.div
					className="mb-16 text-center"
					variants={itemVariants}
				>
					<motion.div
						className="mb-4 inline-block"
						animate={{
							rotate: [0, 10, -10, 0],
						}}
						transition={{
							duration: 5,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						<Crown className="mx-auto h-16 w-16 text-purple-600" />
					</motion.div>
					<h2 className="mb-6 text-4xl font-bold text-purple-800 md:text-5xl">
						Join Us!
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-purple-600">
						Not a beginner? Join as a volunteer or mentor!
					</p>
				</motion.div>

				{/* Cards Section */}
				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
					{/* Card 1 - For Creators */}
					<motion.div variants={itemVariants}>
						<Card className="group relative h-full overflow-hidden border-cqYellow bg-cqYellow drop-shadow-lg">
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								animate={{
									background: [
										"radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
										"radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
										"radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
									],
								}}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							/>
							<div className="relative p-8">
								<div className="mb-6 flex items-center justify-between">
									<motion.div
										whileHover={{ scale: 1.1, rotate: 360 }}
										transition={{ duration: 0.3 }}
									>
										<Rabbit className="h-12 w-12 text-purple-600" />
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.2 }}
									>
										<HeartIcon className="h-8 w-8 text-red-400" />
									</motion.div>
								</div>
								<h3 className="mb-4 text-2xl font-bold text-purple-800">
									Volunteer/Mentor
								</h3>
								<ul className="mb-6 space-y-4 text-purple-600">
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<Clock className="h-5 w-5 text-purple-500" />
										<span>
											Volunteers help out with management
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<CupSoda className="h-5 w-5 text-purple-500" />
										<span>Mentors help assist hackers</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<Crown className="h-5 w-5 text-purple-500" />
										<span>
											Help make our event even more
											magical!
										</span>
									</motion.li>
								</ul>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<a
										href={
											"https://form.cqhacks.org/mentorandvolunteer"
										}
									>
										<Button className="w-full rounded-full bg-purple-600 py-6 text-lg text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
											Show Your Interest
										</Button>
									</a>
								</motion.div>
							</div>
						</Card>
					</motion.div>

					{/* Card 2 - For Companies */}
					<motion.div variants={itemVariants}>
						<Card className="group relative h-full overflow-hidden border-cqOrange bg-cqOrange drop-shadow-lg">
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								animate={{
									background: [
										"radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
										"radial-gradient(circle at 0% 100%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
										"radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
									],
								}}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							/>
							<div className="relative p-8">
								<div className="mb-6 flex items-center justify-between">
									<motion.div
										whileHover={{
											scale: 1.1,
											rotate: -360,
										}}
										transition={{ duration: 0.3 }}
									>
										<Crown className="h-12 w-12 text-purple-600" />
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.4 }}
									>
										<Sparkles className="h-8 w-8 text-amber-400" />
									</motion.div>
								</div>
								<h3 className="mb-4 text-2xl font-bold text-purple-800">
									Partners
								</h3>
								<ul className="mb-6 space-y-4 text-purple-600">
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<Rabbit className="h-5 w-5 text-purple-500" />
										<span>
											Partner with Code Quantum for
											Benefits
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<HeartIcon className="h-5 w-5 text-purple-500" />
										<span>Logo on Website</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
									>
										<Clock className="h-5 w-5 text-purple-500" />
										<span>Mention at Opening Ceremony</span>
									</motion.li>
								</ul>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<a href={"mailto:admin@cqhacks.org"}>
										<Button
											variant="outline"
											className="group w-full rounded-full border-purple-300 py-6 text-lg text-purple-600 transition-all duration-300 hover:text-purple-700"
										>
											Contact Us
										</Button>
									</a>
								</motion.div>
							</div>
						</Card>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
