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

export default function FAQ() {
	const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

	const questions = [
		{
			icon: <Rabbit className="h-6 w-6" />,
			question: "Q1",
			answer: "A1",
		},
		{
			icon: <HeartIcon className="h-6 w-6" />,
			question: "Q2",
			answer: "A2",
		},
		{
			icon: <CupSoda className="h-6 w-6" />,
			question: "Q3",
			answer: "A3",
		},
		{
			icon: <Crown className="h-6 w-6" />,
			question: "Q4",
			answer: "A4",
		},
		{
			icon: <Key className="h-6 w-6" />,
			question: "Q5",
			answer: "A5",
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
					<h2 className="mb-4 text-4xl font-bold text-purple-800 md:text-5xl">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-purple-600">subheading</p>
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
							Quote
						</motion.p>
						<p className="mt-2 text-sm text-purple-600">- Author</p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
