"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashNavItemProps {
	name: string;
	path: string;
}

export default function DashNavItem({ name, path }: DashNavItemProps) {
	const currPath = usePathname();
	return (
		<Link href={path}>
			<button
				className={`h-full px-3 border-b-2 text-sm transition-colors duration-150 ${
					(currPath.startsWith(path) && path !== "/admin" && path !== "/dash") || currPath === path
						? "border-b-primary text-primary"
						: "border-b-transparent text-muted-foreground hover:border-b-muted"
				}`}
			>
				{name}
			</button>
		</Link>
	);
}
