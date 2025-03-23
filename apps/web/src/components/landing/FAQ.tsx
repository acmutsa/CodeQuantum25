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
	MessageSquareMore as QuestionIcon,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../shadcn/ui/accordion";
import c from "config";

export default function FAQ() {
	const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

	const questions = [
		{
			icon: <Rabbit className="h-6 w-6" />,
			question: "What if I am not a gender minority?",
			answer: "Anyone is welcome to sign up as a hacker at Code Quantum. However, much of the hackathon’s content will center around the experiences of women and non-binary individuals, aligning with our mission to unite and empower them in STEM. If you do not identify as female or non-binary but support our cause as an ally, we’d love to have you join us as a mentor or volunteer!",
		},
		{
			icon: <HeartIcon className="h-6 w-6" />,
			question: "What if I am not a beginner?",
			answer: "While we appreicate your desire to compete, our event is purposed for those who are just starting out coding. However, we would love to have you as a mentor or judge to help out the beginner hackers!",
		},
		{
			icon: <CupSoda className="h-6 w-6" />,
			question:
				"What if I have never coded before, or have never done a project?",
			answer: "No worries! We’ll have mentors available to assist you with any challenges you encounter, as well as guides to support you in building your project.",
		},
		{
			icon: <Crown className="h-6 w-6" />,
			question:
				"I'm not a Computer Science major. Can I still participate?",
			answer: "Of course! Code Quantum is open to all majors, as we are a beginner-friendly hackday. We’ll provide tutorials and guides for basic projects, or you can choose to work on your own idea.",
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

	return (
		<div className="min-h-screen bg-cqWhite px-4 py-12">
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
					<h2 className="mb-4 font-alice text-6xl font-bold text-purple-800 md:text-6xl">
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
									{/* gap-4 */}
									<div className="flex items-center">
										{/* commented out to prevent icon rendering */}
										{/* <motion.div
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
										</motion.div> */}
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
							If you have any other questions, join our discord to
							talk to an organizer:
						</motion.p>
						<a
							className="mt-2 text-sm text-purple-600"
							href={c.links.discord}
						>
							{c.links.discord}
						</a>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
