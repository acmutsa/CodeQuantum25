"use client";
import { motion } from "framer-motion";
import { Crown, Sparkles, LinkedinIcon, GlobeIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { Person } from "@/components/landing/Person";
import { useState, useEffect } from "react";

export default function Team() {
	const [innerWidth, setInnerWidth] = useState(0)
	const [innerHeight, setInnerHeight] = useState(0)
	useEffect(() => {
		setInnerWidth(window.innerWidth)
		setInnerHeight(window.innerHeight)
	}, [])
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

	const imageStyles = "rounded-lg border-4 drop-shadow-md hover:scale-110 duration-75 mb-2"
	const TEAM_COLORS = {
		DIRECTOR: "#e17d9e",
		LOGISTICS: "#7b8f76",
		DESIGN: "#f7c396",
		TECH: "#87675d",
		OUTREACH: "#e1897d",
		HACKER_EXPERIENCE: "#4f4e6c",
		PUBLIC_RELATIONS: "#b791cc",
	}
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
			
		}
	]

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
			<div className="absolute inset-0 overflow-hidden -z-10">
				{Array.from({ length: 15 }).map((_, i) => (
					<motion.div
						key={i}
						className="absolute opacity-30"
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: [0.2, 0.5, 0.2],
							scale: [1, 2, 1],
							x: [Math.random() * innerWidth, Math.random() * innerWidth],
							y: [Math.random() * innerHeight, Math.random() * innerHeight],
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
					<h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">The Organizing Team</h2>
					<p className="text-xl text-purple-600 max-w-2xl mx-auto">
						See who is behind Code Quantum 25!
					</p>
				</motion.div>
			</motion.div>
			<div className={"flex justify-center"}>
				<div className={"grid grid-cols-2 gap-8 sm:mx-2 px-2"}>
					{directors.map(director => {
						return (
							<div className={"flex-col justify-center"}>
								<Image style={{borderColor: director.color}} className={`md:mb-5 ${imageStyles}`} src={director.imgLink} alt={`${director.fname} ${director.lname} image`} width={300} height={300}/>
								<h2 style={{color: director.color}} className={"text-3xl sm:text-4xl text-center font-bold"}>{director.fname} {director.lname}</h2>
								<h3 style={{color: director.color}} className={"text-2xl md:text-3xl text-center mb-2 italic font-bold"}>{director.role}</h3>
							</div>
						)
					})}
				</div>
			</div>
			<div className={"flex justify-center items-center mt-4"}>
				<div className={"grid grid-cols-3 lg:grid-cols-4 gap-8 sm:mx-2 px-2 lg:px-0"}>
					{team.map(organizer => (
							<div className={"flex flex-col w-full items-center"}>
								<Image style={{borderColor: organizer.color}} className={`${imageStyles}`} src={organizer.imgLink} alt={`${organizer.fname} ${organizer.lname} image`} width={200} height={200} priority/>
								<h2 style={{color: organizer.color}} className={"text-xl lg:text-3xl text-center font-semibold"}>{organizer.fname} {organizer.lname}</h2>
								<h3 style={{color: organizer.color}} className={"text-md lg:text-2xl text-center mb-2 italic font-semibold"}>{organizer.role}</h3>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	)
}