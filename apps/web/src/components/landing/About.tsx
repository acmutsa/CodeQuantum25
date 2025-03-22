"use client";
import { motion } from "framer-motion";
import {
	Clock,
	HeartIcon as Hearts,
	Rabbit,
	MapPinned as Location,
} from "lucide-react";
import { Card, CardContent } from "../shadcn/ui/card";
export default function About() {
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
		<div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 px-4 py-20">
			<motion.div
				className="mx-auto max-w-6xl"
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
						// Some weird framer-motion stuff not accepting all types
						animate={{
							y: [-10, 10],
							transition: {
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
								ease: "easeInOut",
							},
						}}
						className="mb-4 inline-block"
					>
						<Rabbit className="h-12 w-12 text-purple-600" />
					</motion.div>
					<h1 className="mb-4 font-alice text-4xl font-bold text-purple-800 md:text-5xl">
						About Us
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-purple-600">
						A Gender Minority Hack Day
					</p>
				</motion.div>

				{/* Cards Grid */}
				<div className="grid gap-8 md:grid-cols-2">
					{/* Card 1 */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-2"
					>
						<Card className="group h-full bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
							<CardContent className="p-6">
								<motion.div
									className="mb-4 text-red-500"
									whileHover={{ y: -5 }}
								>
									<Hearts className="h-8 w-8" />
								</motion.div>
								<h3 className="mb-2 text-xl font-semibold text-red-700">
									What We Are
								</h3>
								<p className="text-gray-600">
									Code Quantum is a beginner-friendly hackday
									hosted at UTSA for students from all
									disciplines. Our goal is to create an
									environment where hackers can learn and
									develop their skills. To support this, we
									provide free meals, snacks, drinks,
									workshops, mini-events, socials, and
									networking opportunities with our industry
									partners.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 2 */}
					<motion.div variants={itemVariants}>
						<Card className="group h-full bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
							<CardContent className="p-6">
								<motion.div
									className="mb-4 text-amber-500"
									whileHover={{ y: -5 }}
								>
									<Clock className="h-8 w-8" />
								</motion.div>
								<h3 className="mb-2 text-xl font-semibold text-amber-700">
									Hack Day
								</h3>
								<p className="text-gray-600">
									Unlike traditional hackathons that give you
									24 hours to build your project, our hackday
									is limited to daytime hours only. Please
									refer to the schedule for more details.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 3 */}
					<motion.div variants={itemVariants}>
						<Card className="group h-full bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
							<CardContent className="p-6">
								<motion.div
									className="mb-4 text-blue-500"
									whileHover={{ y: -5 }}
								>
									<Location className="h-8 w-8" />
								</motion.div>
								<h3 className="mb-2 text-xl font-semibold text-blue-700">
									Where We Will Be
								</h3>
								<p className="text-gray-600">
									Code Quantum will be hosted on UTSA’s main
									campus in the Biotechnology Sciences and
									Engineering Building (BSE)
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
