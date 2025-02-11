"use client"

import { motion } from "framer-motion"
import { Rabbit, Crown, Sparkles, HeartIcon, Clock, CupSoda } from "lucide-react"
import { Button } from "../shadcn/ui/button"
import { Card } from "../shadcn/ui/card"

export default function WorkWithUs() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

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
							x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
							y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 5,
						}}
					>
						<Sparkles className="w-4 h-4 text-purple-300" />
					</motion.div>
				))}
			</div>

			<motion.div
				className="relative container mx-auto px-4"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Header Section */}
				<motion.div className="text-center mb-16" variants={itemVariants}>
					<motion.div
						className="inline-block mb-4"
						animate={{
							rotate: [0, 10, -10, 0],
						}}
						transition={{
							duration: 5,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						<Crown className="w-16 h-16 text-purple-600 mx-auto" />
					</motion.div>
					<h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">Join Us!</h2>
					<p className="text-xl text-purple-600 max-w-2xl mx-auto">
						Not a beginner? Join as a volunteer or mentor!
					</p>
				</motion.div>

				{/* Cards Section */}
				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Card 1 - For Creators */}
					<motion.div variants={itemVariants}>
						<Card className="relative overflow-hidden group h-full bg-cqYellow border-cqYellow drop-shadow-lg">
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
								<div className="flex items-center justify-between mb-6">
									<motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.3 }}>
										<Rabbit className="w-12 h-12 text-purple-600" />
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.2 }}
									>
										<HeartIcon className="w-8 h-8 text-red-400" />
									</motion.div>
								</div>
								<h3 className="text-2xl font-bold text-purple-800 mb-4">Volunteer/Mentor</h3>
								<ul className="space-y-4 mb-6 text-purple-600">
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<Clock className="w-5 h-5 text-purple-500" />
										<span>Volunteers help out with management</span>
									</motion.li>
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<CupSoda className="w-5 h-5 text-purple-500" />
										<span>Mentors help assist hackers</span>
									</motion.li>
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<Crown className="w-5 h-5 text-purple-500" />
										<span>Help make our event even more magical!</span>
									</motion.li>
								</ul>
								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
									<a href={"https://form.cqhacks.org/mentorandvolunteer"}>
									<Button
										className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"
									>
										Show Your Interest
									</Button>
									</a>
								</motion.div>
							</div>
						</Card>
					</motion.div>

					{/* Card 2 - For Companies */}
					<motion.div variants={itemVariants}>
						<Card className="relative overflow-hidden group h-full bg-cqOrange border-cqOrange drop-shadow-lg">
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
								<div className="flex items-center justify-between mb-6">
									<motion.div whileHover={{ scale: 1.1, rotate: -360 }} transition={{ duration: 0.3 }}>
										<Crown className="w-12 h-12 text-purple-600" />
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.4 }}
									>
										<Sparkles className="w-8 h-8 text-amber-400" />
									</motion.div>
								</div>
								<h3 className="text-2xl font-bold text-purple-800 mb-4">Partners</h3>
								<ul className="space-y-4 mb-6 text-purple-600">
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<Rabbit className="w-5 h-5 text-purple-500" />
										<span>Partner with Code Quantum for Benefits</span>
									</motion.li>
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<HeartIcon className="w-5 h-5 text-purple-500" />
										<span>Logo on Website</span>
									</motion.li>
									<motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
										<Clock className="w-5 h-5 text-purple-500" />
										<span>Mention at Opening Ceremony</span>
									</motion.li>
								</ul>
								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
									<Button
										variant="outline"
										// className="w-full border-purple-300 text-purple-600 hover:text-purple-700 rounded-full py-6 text-lg transition-all duration-300 group"
										className="w-full bg-gray-600 text-gray-400 rounded-full py-6 text-lg transition-all duration-300 group"
										onClick={() => alert("This is currently not ready yet. Check back later!")}
									>
										Partner With Us
									</Button>
								</motion.div>
							</div>
						</Card>
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}

