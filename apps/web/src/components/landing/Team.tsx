"use client";
import { motion } from "framer-motion";
import {
	Crown,
	Sparkles,
	LinkedinIcon,
	GlobeIcon,
	GithubIcon,
} from "lucide-react";
import Image from "next/image";
import { Person } from "@/components/landing/Person";
import { useState, useEffect } from "react";

export default function Team() {
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

	const imageStyles =
		"rounded-lg border-4 drop-shadow-md hover:scale-110 duration-75 mb-2";
	const TEAM_COLORS = {
		DIRECTOR: "#e17d9e",
		LOGISTICS: "#7b8f76",
		DESIGN: "#f7c396",
		TECH: "#87675d",
		OUTREACH: "#e1897d",
		HACKER_EXPERIENCE: "#4f4e6c",
		PUBLIC_RELATIONS: "#b791cc",
	};
	const directors: Person[] = [
		{
			fname: "Iqra",
			lname: "Abdullah",
			imgLink: "/img/team/Directors/iqra.png",
			role: "Director",
			color: TEAM_COLORS.DIRECTOR,
		},
		{
			fname: "Anusha",
			lname: "Abdulla",
			imgLink: "/img/team/Directors/anusha.png",
			role: "Co-Director",
			color: TEAM_COLORS.DIRECTOR,
		},
	];

	const team: Person[] = [
		{
			fname: "Vivian",
			lname: "Tran",
			imgLink: "/img/team/Logistics/vivian.png",
			role: "Logistics",
			color: TEAM_COLORS.LOGISTICS,
		},
		{
			fname: "Delina",
			lname: "Yirgaalem",
			imgLink: "/img/team/Logistics/delina.png",
			role: "Logistics",
			color: TEAM_COLORS.LOGISTICS,
		},
		{
			fname: "Rashi",
			lname: "Rautela",
			imgLink: "/img/team/Logistics/rashi.png",
			role: "Logistics",
			color: TEAM_COLORS.LOGISTICS,
		},
		{
			fname: "Durga",
			lname: "Rajarajan",
			imgLink: "/img/team/Design/durga.png",
			role: "Design",
			color: TEAM_COLORS.DESIGN,
		},
		{
			fname: "Jacob",
			lname: "Ellerbrock",
			imgLink: "/img/team/Tech/jacob.png",
			role: "Tech",
			color: TEAM_COLORS.TECH,
		},
		{
			fname: "Christian",
			lname: "Walker",
			imgLink: "/img/team/Tech/christian.png",
			role: "Tech",
			color: TEAM_COLORS.TECH,
		},
		{
			fname: "Reese",
			lname: "Sylvester",
			imgLink: "/img/team/Outreach/reese.png",
			role: "Outreach",
			color: TEAM_COLORS.OUTREACH,
		},
		{
			fname: "Cesar",
			lname: "Diab",
			imgLink: "/img/team/Hacker-Experience/cesar.png",
			role: "Hacker Experience",
			color: TEAM_COLORS.HACKER_EXPERIENCE,
		},
		{
			fname: "Cassandra",
			lname: "Gomez",
			imgLink: "/img/team/Hacker-Experience/cassandra.png",
			role: "Hacker Experience",
			color: TEAM_COLORS.HACKER_EXPERIENCE,
		},
		{
			fname: "Brooke",
			lname: "Lane",
			imgLink: "/img/team/Hacker-Experience/brooke.png",
			role: "Public Relations",
			color: TEAM_COLORS.PUBLIC_RELATIONS,
		},
		{
			fname: "Katy",
			lname: "Kettel",
			imgLink: "/img/team/Public-Relations/katy.png",
			role: "Public Relations",
			color: TEAM_COLORS.PUBLIC_RELATIONS,
		},
		{
			fname: "Kailey",
			lname: "Perrino",
			imgLink: "/img/team/Public-Relations/kailey.png",
			role: "Public Relations",
			color: TEAM_COLORS.PUBLIC_RELATIONS,
		},
		{
			fname: "Russel",
			lname: "Ogbor",
			imgLink: "/img/team/Finance/russel.png",
			role: "Finance",
			color: TEAM_COLORS.PUBLIC_RELATIONS,
		},
	];

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-purple-50 py-20">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
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
						The Organizing Team
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-purple-600">
						See who is behind Code Quantum 25!
					</p>
				</motion.div>
			</motion.div>
			<div className={"flex justify-center"}>
				<div className={"grid grid-cols-2 gap-8 px-2 sm:mx-2"}>
					{directors.map((director) => {
						return (
							<div
								className={"flex-col justify-center"}
								key={`${director.fname}-${director.lname}`}
							>
								<Image
									style={{ borderColor: director.color }}
									className={`md:mb-5 ${imageStyles}`}
									src={director.imgLink}
									alt={`${director.fname} ${director.lname} image`}
									width={300}
									height={300}
								/>
								<h2
									style={{ color: director.color }}
									className={
										"text-center text-3xl font-bold sm:text-4xl"
									}
								>
									{director.fname} {director.lname}
								</h2>
								<h3
									style={{ color: director.color }}
									className={
										"mb-2 text-center text-2xl font-bold italic md:text-3xl"
									}
								>
									{director.role}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
			<div className={"mt-4 flex items-center justify-center"}>
				<div
					className={
						"grid grid-cols-3 gap-8 px-2 sm:mx-2 lg:grid-cols-4 lg:px-0"
					}
				>
					{team.map((organizer) => (
						<div
							className={"flex w-full flex-col items-center"}
							key={`${organizer.fname}-${organizer.lname}`}
						>
							<Image
								style={{ borderColor: organizer.color }}
								className={`${imageStyles}`}
								src={organizer.imgLink}
								alt={`${organizer.fname} ${organizer.lname} image`}
								width={200}
								height={200}
								priority
							/>
							<h2
								style={{ color: organizer.color }}
								className={
									"text-center text-xl font-semibold lg:text-3xl"
								}
							>
								{organizer.fname} {organizer.lname}
							</h2>
							<h3
								style={{ color: organizer.color }}
								className={
									"text-md mb-2 text-center font-semibold italic lg:text-2xl"
								}
							>
								{organizer.role}
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
