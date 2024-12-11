import React from "react";
import { motion } from "framer-motion";

const MenuSection = () => {
	const imageVariants = {
		initial: { y: 200, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { duration: 1 } },
	};

	const textVariants = {
		initial: { x: -100, opacity: 0 },
		animate: { x: 0, opacity: 1, transition: { duration: 1 } },
	};

	return (
		<div
			className="relative flex h-full md:h-[100vh] w-full items-center justify-center px-3 md:px-6 py-8 lg:pb-44 bg-orange-50"
			id="menu"
			style={{
				backgroundImage: "url('/camel.svg')",
				backgroundPosition: "right bottom",
				backgroundSize: "20%",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				className="flex h-full w-full max-w-[1300px] flex-col md:flex-row items-center justify-center gap-8 z-30"
				style={{
					backgroundImage:
						"url('https://nur-restaurent.vercel.app/images/home/leaf-skeleton.png'),url('https://nur-restaurent.vercel.app/images/home/leaf-top.png'), url('https://nur-restaurent.vercel.app/images/home/leaf-down.png'), url('https://nur-restaurent.vercel.app/images/home/leafs-skeleton.png')",
					backgroundPosition: "left top, left bottom, right top, center center",
					backgroundSize: "8%, 6%, 6%, 10%",
					backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
				}}
			>
				<motion.div
					className="relative section-one w-full md:w-1/2 flex items-center justify-center p-6 mt-[200px]"
					style={{
						backgroundImage: "url('/images/home/menubg.png')",
						backgroundPosition: "center center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
					}}
					initial="initial"
					whileInView="animate"
					viewport={{ amount: 0.5 }}
					variants={imageVariants}
				>
					<img
						alt="menu"
						loading="lazy"
						width="570"
						height="667"
						decoding="async"
						className="w-full md:w-2/3"
						style={{ color: "transparent" }}
						src="https://nur-restaurent.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fmenu.png&w=640&q=75"
					/>
					<div
						className="move absolute bottom-20 right-5 -rotate-12"
						style={{
							transform: "translate(30.8px, 22.3917px) rotate(-11.9999deg)",
						}}
					>
						<p
							className="font-extralight italic text-[32px] lg:text-[42px] text-[#040404]"
							style={{
								fontFamily: "Mrs Saint Delafield, cursive",
							}}
						>
							For the best memories
						</p>
					</div>
				</motion.div>
				<motion.div
					className="w-full md:w-1/2 flex items-center justify-start md:justify-center"
					initial="initial"
					whileInView="animate"
					viewport={{ amount: 0.5 }}
					variants={textVariants}
				>
					<div
						className="left-container flex flex-col gap-4 md:-mr-[150px] pl-12 md:px-0"
						style={{
							transform: "translate(-50px, 0px)",
						}}
					>
						<p className="text-[#040404] uppercase font-playfair text-sm md:text-base">
							About us
						</p>
						<p className="text-[#040404] font-italiana text-4xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] font-[400]">
							Welcome <br /> to NuR Cafe
						</p>
						<p className="text-[#262626] font-roboto text-sm md:text-base lg:text-lg w-full md:w-[500px]">
							NUR Cafe brings Arabian warmth to Manchester with hearty
							breakfasts, French-inspired pastries, and halal dishes crafted
							with care. A luxurious experience awaits, whether for coffee or a
							full meal.
						</p>
						<a href="/menu">
							<button className="bg-red-900 text-white whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 rounded-full">
								View Menu
								<svg
									width="18"
									height="15"
									viewBox="0 0 18 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="duration-300 ease-in-out group-hover:translate-x-1"
								>
									<g id="Group 2">
										<g id="Group 4">
											<path
												id="Vector"
												d="M0 7.5H16.4072"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
											/>
											<path
												id="Vector_2"
												d="M10 1.24658L16.4072 7.49982L10 13.7531"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
											/>
										</g>
									</g>
								</svg>
							</button>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default MenuSection;
