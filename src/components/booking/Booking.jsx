import React from "react";
import { motion } from "framer-motion";

const Booking = () => {
	return (
		<div className="bg-red-900  flex flex-col justify-center items-center lg:flex-row gap-6 ">
			<motion.div
				initial={{ scale: 0.6, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}
			>
				<div>
					<img
						className="w-[20rem] lg:w-[24rem] h-[26rem] lg:h-[31rem] pt-14"
						src="/reserve.png"
						alt="reserve"
					/>
				</div>
			</motion.div>
			<div className="pl-4 lg:pl-20 lg:pt-20">
				<h6 className="text-slate-100 text-[20px]">Booking</h6>
				<h2 className="text-slate-100 text-[2.5rem] lg:text-[4rem] leading-10 lg:leading-[64px] py-4 lg:py-2">
					Reserve Your <br /> Table at Nur Cafe
				</h2>
				<p className="text-slate-100 text-[16px]  ">
					Experience the charm of Arabian hospitality. Book your table now for a{" "}
					<br />
					memorable dining experience filled with flavorful dishes and warm{" "}
					<br />
					ambiance.
				</p>
				<div className="py-6">
					<button className="rounded-full bg-slate-100 p-4 flex flex-row justify-center items-center gap-3">
						Book Now <img src="/arrowr.svg" alt="arrowr" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Booking;
