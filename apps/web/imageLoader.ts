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
	if (process.env.NODE_ENV === "development") {
    console.log("returning with properties", { src, width, quality });
		return src;
	}
  console.log("made it past")
	const params = [`width=${width}`];
	if (quality) {
		params.push(`quality=${quality}`);
	}
	const paramsString = params.join(",");
	return `https://${process.env.NEXT_ZONE_URI}/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
