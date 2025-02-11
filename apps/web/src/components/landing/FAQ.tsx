"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ChevronDown,
	HeartIcon,
	Rabbit,
	CupSoda,
	Crown,
	Key,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../shadcn/ui/accordion";
import c from "config"

export default function FAQ() {
	const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

	const questions = [
		{
			icon: <Rabbit className="h-6 w-6" />,
			question: "What if I am not a gender minority?",
			answer: "Anyone can sign up to participate as a hacker at Code Quantum. However, keep in mind that a lot of the hackathon content will revolve around women and non-binary experiences to reflect our mission of uniting and empowering women and non-binary individuals in STEM. If you do not identify as female or non-binary but consider yourself an ally of our cause, we would love to have you as a mentor or volunteer!",
		},
		{
			icon: <HeartIcon className="h-6 w-6" />,
			question: "What if I am not a beginner?",
			answer: "We want to focus on beginners, and judging will be more geared toward them as well. While we love your desire to participate and compete, we would love to have you as a mentor or judge to help out the beginner hackers!",
		},
		{
			icon: <CupSoda className="h-6 w-6" />,
			question: "What if I have never coded before, or have never done a project?",
			answer: "That is okay! We will have mentors available to help you with any problem you have, along with guides that can help you out with whatever you are trying to build!",
		},
		{
			icon: <Crown className="h-6 w-6" />,
			question: "I'm not a Computer Science major. Can I still participate?",
			answer: "Of course! Code Quantum is open to any majors as we are a beginner friendly hack day. We will have tutorials and guides for basic projects to follow or try your own project.",
		},
		{
			icon: <Key className="h-6 w-6" />,
			question: "Can I work on my project before Code Quantum?",
			answer: "All projects must start at Code Quantum, but you are free to brainstorm project ideas beforehand.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const floatAnimation = {
		y: [-5, 5],
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	};

	return (
		<div className="min-h-screen bg-cqWhite px-4 py-20">
			<motion.div
				className="mx-auto max-w-4xl"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Header */}
				<motion.div
					className="mb-16 text-center"
					variants={itemVariants}
				>
					<motion.div
						className="mb-4 inline-block"
						// animate={floatAnimation}
					>
						<CupSoda className="h-12 w-12 text-purple-600" />
					</motion.div>
					<h2 className="mb-4 text-6xl font-bold text-purple-800 md:text-6xl font-alice">
						Frequently Asked Questions
					</h2>
				</motion.div>

				{/* FAQ Accordion */}
				<motion.div variants={itemVariants}>
					<Accordion
						type="single"
						collapsible
						className="space-y-4 text-cqPurple"
					>
						{questions.map((item, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="overflow-hidden rounded-lg border border-purple-100 bg-white/80 backdrop-blur-sm"
							>
								<AccordionTrigger className="mh-2 group flex justify-between px-6 py-4 hover:no-underline">
									<div className="flex items-center gap-4">
										<motion.div
											className={`text-purple-600 transition-colors duration-200 ${
												hoveredIcon === index
													? "text-purple-800"
													: ""
											}`}
											onMouseEnter={() =>
												setHoveredIcon(index)
											}
											onMouseLeave={() =>
												setHoveredIcon(null)
											}
											whileHover={{
												scale: 1.2,
												rotate: 360,
											}}
											transition={{ duration: 0.3 }}
										>
											{item.icon}
										</motion.div>
										<span className="text-left font-semibold text-purple-800 group-hover:text-purple-900">
											{item.question}
										</span>
									</div>
								</AccordionTrigger>
								<AnimatePresence>
									<AccordionContent className="px-6 pb-4">
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.2 }}
											className="text-purple-600"
										>
											{item.answer}
										</motion.div>
									</AccordionContent>
								</AnimatePresence>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>

				{/* Footer Quote */}
				<motion.div
					className="mt-16 text-center"
					variants={itemVariants}
				>
					<div className="mx-auto max-w-2xl rounded-lg border border-purple-100 bg-white/80 p-6 backdrop-blur-sm">
						<motion.p
							className="text-lg italic text-purple-800"
							whileHover={{ scale: 1.02 }}
						>
							If you have any other questions, join our discord to talk to an organizer:
						</motion.p>
						<a className="mt-2 text-sm text-purple-600" href={c.links.discord}>{c.links.discord}</a>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
