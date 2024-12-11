import React from "react";
import { motion } from "framer-motion";

const Highlights = () => {
	return (
		<div
			id="menu"
			className="relative flex h-full w-full items-center justify-center py-8 md:py-24 bg-orange-50"
			style={{
				backgroundImage:
					'url("https://nur-restaurent.vercel.app/images/home/leaf-skeleton.png")',
				backgroundPosition: "center bottom",
				backgroundSize: "8%",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute inset-0 flex flex-col justify-center items-center">
				<div className="h-px w-full bg-gray-300 my-2"></div>
				<div className="h-px w-full bg-gray-300 my-2"></div>
				<div className="h-px w-full bg-gray-300 my-2"></div>
			</div>

			<div
				className="relative flex h-full w-full flex-col items-center justify-center gap-8 md:gap-24"
				style={{
					backgroundImage:
						'url("/images/home/lemonslice.png"), url("https://nur-restaurent.vercel.app/images/home/branch.png"), url("https://nur-restaurent.vercel.app/images/home/leaf-down.png")',
					backgroundPosition: "left top, right top, left bottom",
					backgroundSize: "8%, 8%, 6%",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="flex flex-col gap-3 justify-center items-center text-center">
					<p className="w-full text-[#040404] font-playfair text-lg">
						Our top picks
					</p>
					<p className="w-full text-[#040404] font-italiana text-5xl md:text-7xl">
						Monthly Highlights
					</p>
				</div>

				<div
					className="w-full px-3 md:px-12 py-12 flex justify-center"
					style={{
						backgroundImage:
							'url("https://nur-restaurent.vercel.app/images/home/aboutbg.png")',
						backgroundSize: "contain",
						backgroundRepeat: "repeat",
					}}
				>
					<div className="max-w-[1300px] flex flex-col md:flex-row gap-6 justify-center md:justify-between items-center">
						<MenuItem
							title="Adana Kebab"
							imageSrc="https://nur-restaurent.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fadanakebab.png&w=384&q=75"
							shouldAnimate={true}
						/>

						<MenuItem
							title="Meze Platter"
							imageSrc="https://nur-restaurent.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fmezeplatter.png&w=384&q=75"
							shouldAnimate={false}
						/>

						<MenuItem
							title="Becklava"
							imageSrc="https://nur-restaurent.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbecklava.png&w=384&q=75"
							shouldAnimate={true}
						/>

						<MenuItem
							title="Kebab Platter"
							imageSrc="https://nur-restaurent.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fkebabplatter.png&w=384&q=75"
							shouldAnimate={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const MenuItem = ({ title, imageSrc, shouldAnimate }) => {
	const animationVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			initial={shouldAnimate ? "hidden" : "visible"}
			animate="visible"
			variants={animationVariants}
			transition={{
				duration: 1,
				ease: "easeOut",
			}}
			whileInView={{
				y: shouldAnimate ? [0, -20] : 0,
				transition: { duration: 1, ease: "easeOut" },
			}}
			viewport={{ once: false, amount: 0.5 }}
			className="flex flex-col justify-center items-center gap-4"
		>
			<img
				alt={title.toLowerCase().replace(" ", "-")}
				loading="lazy"
				width="312"
				height="397"
				decoding="async"
				src={imageSrc}
			/>
			<p className="text-black font-italiana text-xl tracking-[4px] font-semibold">
				{title}
			</p>
		</motion.div>
	);
};

export default Highlights;
