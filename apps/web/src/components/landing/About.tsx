"use client";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import D1 from "../../../public/img/landing/d1.svg";
import D2 from "../../../public/img/landing/d2.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import Dino_Coding from "../../../public/img/landing/dinos_coding.png";
import { motion } from "framer-motion";
import {
	Clock,
	HeartIcon as Hearts,
	Rabbit,
	CupSodaIcon as TeaCup,
	Crown,
	Key,
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
					<h1 className="mb-4 text-4xl font-bold text-purple-800 md:text-5xl font-alice">
						About Us
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-purple-600">
						A Gender Minority Hack Day
					</p>
				</motion.div>

				{/* Cards Grid */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Card 1 */}
					<motion.div variants={itemVariants}>
						<Card className="group bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
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
									CodeQuantum is a free to attend hackathon hosted at UTSA! We are dedicated to creating a safe hacking space for students in the tech field. Hackers can also attend workshops, mini events, socials, and network with our industry partners! Attendance is FREE and all meals, snacks, and drinks are provided. We welcome hackers from all disciplines.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 2 */}
					<motion.div variants={itemVariants}>
						<Card className="group bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
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
									Instead of offering 24 hours, we will be hosting a hack day where the project building time will only be during the day. Please see the schedule for more detailed times.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 3 */}
					<motion.div variants={itemVariants}>
						<Card className="group bg-cqWhite transition-shadow duration-300 hover:shadow-xl">
							<CardContent className="p-6">
								<motion.div
									className="mb-4 text-blue-500"
									whileHover={{ y: -5 }}
								>
									<TeaCup className="h-8 w-8" />
								</motion.div>
								<h3 className="mb-2 text-xl font-semibold text-blue-700">
									Where We Will Be
								</h3>
								<p className="text-gray-600">
									CodeQuantum will be hosted on UTSA’s main campus in the Student Union Denman Ballroom
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 4 */}
					{/*<motion.div variants={itemVariants}>*/}
					{/*	<Card className="group bg-cqWhite transition-shadow duration-300 hover:shadow-xl">*/}
					{/*		<CardContent className="p-6">*/}
					{/*			<motion.div*/}
					{/*				className="mb-4 text-purple-500"*/}
					{/*				whileHover={{ y: -5 }}*/}
					{/*			>*/}
					{/*				<Crown className="h-8 w-8" />*/}
					{/*			</motion.div>*/}
					{/*			<h3 className="mb-2 text-xl font-semibold text-purple-700">*/}
					{/*				Topic 4*/}
					{/*			</h3>*/}
					{/*			<p className="text-gray-600">*/}
					{/*				Lorem ipsum dolor sit amet, consectetur*/}
					{/*				adipiscing elit. Sed do eiusmod tempor*/}
					{/*				incididunt ut labore et dolore magna aliqua.*/}
					{/*			</p>*/}
					{/*		</CardContent>*/}
					{/*	</Card>*/}
					{/*</motion.div>*/}

					{/* Card 5 */}
					{/*<motion.div variants={itemVariants}>*/}
					{/*	<Card className="group bg-cqWhite transition-shadow duration-300 hover:shadow-xl">*/}
					{/*		<CardContent className="p-6">*/}
					{/*			<motion.div*/}
					{/*				className="mb-4 text-green-500"*/}
					{/*				whileHover={{ y: -5 }}*/}
					{/*			>*/}
					{/*				<Key className="h-8 w-8" />*/}
					{/*			</motion.div>*/}
					{/*			<h3 className="mb-2 text-xl font-semibold text-green-700">*/}
					{/*				Topic 5*/}
					{/*			</h3>*/}
					{/*			<p className="text-gray-600">*/}
					{/*				Lorem ipsum dolor sit amet, consectetur*/}
					{/*				adipiscing elit. Sed do eiusmod tempor*/}
					{/*				incididunt ut labore et dolore magna aliqua.*/}
					{/*			</p>*/}
					{/*		</CardContent>*/}
					{/*	</Card>*/}
					{/*</motion.div>*/}

					{/* Interactive Quote Card */}
					{/*<motion.div variants={itemVariants}>*/}
					{/*	<Card className="group bg-gradient-to-br from-purple-100 to-pink-100 transition-shadow duration-300 hover:shadow-xl">*/}
					{/*		<CardContent className="p-6">*/}
					{/*			<motion.div*/}
					{/*				className="text-lg font-medium italic text-purple-800"*/}
					{/*				whileHover={{ scale: 1.05 }}*/}
					{/*				transition={{*/}
					{/*					type: "spring",*/}
					{/*					stiffness: 300,*/}
					{/*				}}*/}
					{/*			>*/}
					{/*				Special Quote*/}
					{/*			</motion.div>*/}
					{/*			<div className="mt-4 text-sm text-purple-600">*/}
					{/*				- Quoter*/}
					{/*			</div>*/}
					{/*		</CardContent>*/}
					{/*	</Card>*/}
					{/*</motion.div>*/}
				</div>

				{/* Footer Quote */}
				{/*<motion.div*/}
				{/*	className="mt-16 text-center"*/}
				{/*	variants={itemVariants}*/}
				{/*>*/}
				{/*	<p className="text-lg italic text-purple-600">*/}
				{/*		"Insert a quote here"*/}
				{/*	</p>*/}
				{/*</motion.div>*/}
			</motion.div>
		</div>
	);
}
