'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Heart, Rabbit, CupSoda, Crown, Key, Sparkles } from 'lucide-react'
import { Button } from "../shadcn/ui/button"
import Image from "next/image";

export default function Hero() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	const calculateRotation = (x: number, y: number, rect: DOMRect) => {
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		const angleX = (y - centerY) / 30
		const angleY = (centerX - x) / 30
		return `rotateX(${angleX}deg) rotateY(${angleY}deg)`
	}

	const floatingIcons = [
		{ Icon: Rabbit, color: "text-purple-500", delay: 0 },
		{ Icon: Heart, color: "text-red-500", delay: 0.2 },
		{ Icon: Clock, color: "text-amber-500", delay: 0.4 },
		{ Icon: CupSoda, color: "text-blue-500", delay: 0.6 },
		{ Icon: Crown, color: "text-purple-600", delay: 0.8 },
		{ Icon: Key, color: "text-green-500", delay: 1 },
	]

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
							x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
							y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							delay: Math.random() * 5,
						}}
					>
						<Sparkles className="w-4 h-4 text-purple-300" />
					</motion.div>
				))}
			</div>

			{/* Main Content */}
			<div className="relative container mx-auto px-4 py-32">
				<div className="max-w-6xl mx-auto">
					{/* Floating Icons */}
					<div className="absolute inset-0">
						<AnimatePresence>
							{isVisible && floatingIcons.map(({ Icon, color, delay }, index) => (
								<motion.div
									key={index}
									className={`absolute ${color}`}
									initial={{ opacity: 0, y: 50 }}
									animate={{
										opacity: [0.5, 1, 0.5],
										y: [-10, 10, -10],
										x: index % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										delay: delay,
									}}
									style={{
										left: `${(index * 20) + 10}%`,
										top: `${Math.sin(index) * 20 + 50}%`,
									}}
								>
									<Icon className="w-8 h-8" />
								</motion.div>
							))}
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
							className="inline-block mb-4"
							animate={{
								rotate: [0, 10, -10, 0],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							{/*<Rabbit className="w-16 h-16 text-purple-600 mx-auto" />*/}
							<Image className={"mx-auto -my-8"} src={"/img/logo/CQFinalLogo.svg"} alt={"Logo"} width={256} height={256}/>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-9xl font-bold text-purple-800 mb-6 font-alice"
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
							className="text-6xl md:text-6xl text-purple-600 mb-8 max-w-2xl mx-auto font-alice"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							Down the Rabbit Hole
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<a href={"/register"}>
							<Button
								size="lg"
								className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] group min-w-[270px]"
							>
								<motion.span
									className="inline-block"
									whileHover={{ scale: 1.05 }}
								>
									Register
								</motion.span>
								<motion.span
									className="inline-block ml-2"
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
						className="mt-16 relative perspective-1000"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<motion.div
							className="mx-auto max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-100"
							style={{
								transformStyle: "preserve-3d",
							}}
							// whileHover={{
							// 	transform: (event) => {
							// 		if (event.target instanceof HTMLElement) {
							// 			const rect = event.target.getBoundingClientRect()
							// 			return calculateRotation(mousePosition.x, mousePosition.y, rect)
									/*}*/
									// return "none"
								/*},*/
							/*}}*/
							transition={{ type: "spring", stiffness: 400, damping: 30 }}
						>
							<motion.p
								className="text-purple-800 text-lg italic text-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								Saturday, March 22; 9:00 AM - 5:00 PM
							</motion.p>
							<motion.p
								className="text-purple-600 text-sm text-center mt-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							>
								@ UTSA Business Building
							</motion.p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

