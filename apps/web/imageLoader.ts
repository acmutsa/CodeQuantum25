import nextConfig from "./next.config.mjs"
const normalizeSrc = (src: string) => {
	return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) {
	if (
		process.env.NODE_ENV === "development" || [
			"images.clerk.dev",
			"www.gravatar.com",
			"img.clerk.com",
			"api.dicebear.com",
			"cdn.discordapp.com",
		].some((domain) => src.startsWith(domain)) 
	) {
		console.log("returning with properties", { src, width, quality });
		return src;
	}
	const params = [`width=${width}`];
	if (quality) {
		params.push(`quality=${quality}`);
	}
	
	const paramsString = params.join(",");
	let baseURI = process.env.NEXT_ZONE_URI;
	if (baseURI != null && baseURI!.endsWith("/")) {
		baseURI = baseURI.slice(0, -1);
	}

	return `https://cqhacks.org/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
