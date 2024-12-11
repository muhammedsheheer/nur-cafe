import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
	return (
		<div className="bg-orange-50 h-[104rem] lg:h-[44rem] flex flex-col justify-end pb-20 lg:pt-96">
			<div className="flex flex-col pb-4 ">
				<span className="text-center lg:text-[18px]">Menu</span>
				<h2 className="text-[38px] md:text-[48px] lg:text-[58px]  text-center">
					Explore Our Menu
				</h2>
			</div>
			<div className="bg-[url('/footer.png')] h-[96rem] lg:h-[34rem]">
				<div className="flex flex-col justify-center lg:flex-row gap-8 pt-12">
					<motion.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<div className="flex flex-col items-center">
							<img className="h-[17rem]" src="/breakfast.png" alt="breakfast" />
							<h4 className="text-[18px] font-semibold">Breakfast</h4>
							<span className="text-[20px] underline decoration-1 underline-offset-4">
								view menu
							</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<div className="flex flex-col items-center">
							<img className="h-[17rem]" src="brunch.png" alt="brunch" />
							<h4 className="text-[18px] font-semibold">Brunch</h4>
							<span className="text-[20px] underline decoration-1 underline-offset-4">
								view menu
							</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<div className="flex flex-col items-center">
							<img className="h-[17rem]" src="lunch.png" alt="lunch" />
							<h4 className="text-[18px] font-semibold">Lunch</h4>
							<span className="text-[20px] underline decoration-1 underline-offset-4">
								view menu
							</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<div className="flex flex-col items-center">
							<img className="h-[17rem]" src="coffee.png" alt="coffee" />
							<h4 className="text-[18px] font-semibold">Coffee</h4>
							<span className="text-[20px] underline decoration-1 underline-offset-4">
								view menu
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
