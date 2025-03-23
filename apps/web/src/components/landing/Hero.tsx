"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Clock,
	Heart,
	Rabbit,
	CupSoda,
	Crown,
	Key,
	Sparkles,
} from "lucide-react";
import { Button } from "../shadcn/ui/button";
import Image from "next/image";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);
	const [innerWidth, setInnerWidth] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		setInnerWidth(window.innerWidth);
		setInnerHeight(window.innerHeight);
	}, []);

	const floatingIcons = [
		{ Icon: Rabbit, color: "text-purple-500", delay: 0 },
		{ Icon: Heart, color: "text-red-500", delay: 0.2 },
		{ Icon: Clock, color: "text-amber-500", delay: 0.4 },
		{ Icon: CupSoda, color: "text-blue-500", delay: 0.6 },
		{ Icon: Crown, color: "text-purple-600", delay: 0.8 },
		{ Icon: Key, color: "text-green-500", delay: 1 },
	];

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-purple-50">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				{Array.from({ length: 20 }).map((_, i) => (
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
							repeat: Infinity,
							delay: Math.random() * 5,
						}}
					>
						<Sparkles className="h-4 w-4 text-purple-300" />
					</motion.div>
				))}
			</div>

			{/* Main Content */}
			<div className="container relative mx-auto px-4 py-32">
				<div className="mx-auto max-w-6xl">
					{/* Floating Icons */}
					<div className="absolute inset-0">
						<AnimatePresence>
							{isVisible &&
								floatingIcons.map(
									({ Icon, color, delay }, index) => (
										<motion.div
											key={index}
											className={`absolute ${color}`}
											initial={{ opacity: 0, y: 50 }}
											animate={{
												opacity: [0.5, 1, 0.5],
												y: [-10, 10, -10],
												x:
													index % 2 === 0
														? [-10, 10, -10]
														: [10, -10, 10],
											}}
											transition={{
												duration: 4,
												repeat: Infinity,
												delay: delay,
											}}
											style={{
												left: `${index * 20 + 10}%`,
												top: `${Math.sin(index) * 20 + 50}%`,
											}}
										>
											<Icon className="h-8 w-8" />
										</motion.div>
									),
								)}
						</AnimatePresence>
					</div>

					{/* Hero Content */}
					<motion.div
						className="relative z-10 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.div
							className="mb-4 inline-block"
							animate={{
								rotate: [0, 10, -10, 0],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<Image
								className={"-my-8 mx-auto"}
								src={"/img/logo/CQFinalLogo.svg"}
								alt={"Logo"}
								width={256}
								height={256}
							/>
						</motion.div>

						<motion.h1
							className="mb-6 font-alice text-5xl font-bold text-purple-800 md:text-9xl"
							style={{
								perspective: 1000,
							}}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.2 },
							}}
						>
							Code Quantum
						</motion.h1>

						<motion.p
							className="mx-auto mb-8 max-w-2xl font-alice text-6xl text-purple-600 md:text-6xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							Down the Rabbit Hole
						</motion.p>

						<motion.div
							className="flex flex-col items-center justify-center gap-4 sm:flex-row"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<a href={"/register"}>
								<Button
									size="lg"
									className="group min-w-[270px] rounded-full bg-purple-600 px-8 py-6 text-lg text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"
								>
									<motion.span
										className="inline-block"
										whileHover={{ scale: 1.05 }}
									>
										Register Now!
									</motion.span>
									<motion.span
										className="ml-2 inline-block"
										animate={{
											x: [0, 5, 0],
										}}
										transition={{
											duration: 1.5,
											repeat: Infinity,
										}}
									>
										→
									</motion.span>
								</Button>
							</a>
						</motion.div>
					</motion.div>

					{/* Animated Card */}
					<motion.div
						className="perspective-1000 relative mt-16"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<motion.div
							className="mx-auto max-w-lg rounded-xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
							style={{
								transformStyle: "preserve-3d",
							}}
							transition={{
								type: "spring",
								stiffness: 400,
								damping: 30,
							}}
						>
							<motion.p
								className="text-center text-lg italic text-purple-800"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								Saturday, March 29 from 9:00 AM - 8:00 PM
							</motion.p>

							<motion.p
								className="mt-2 text-center text-sm text-purple-600"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							>
								@ UTSA Biotechnology Science and Engineering
								Building (BSE)
							</motion.p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
