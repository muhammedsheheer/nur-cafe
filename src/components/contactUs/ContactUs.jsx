import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
	return (
		<div className="h-[94rem] lg:h-[40rem] bg-rose-950 flex flex-col items-center lg:flex-row gap-6 justify-center">
			<motion.div
				initial={{ scale: 0.2, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<img
					className="h-[450px] w-[320px] lg:h-[420px] lg:w-[380px] lg:mt-24"
					src="/contact-one.png"
					alt="contact1"
				/>
			</motion.div>

			<img
				className="h-[550px] w-[350px] lg:h-[570px] lg:w-[380px]"
				src="contact2.png"
				alt="contact2"
			/>

			<motion.div
				initial={{ scale: 0.2, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<img
					className="h-[450px] w-[320px] lg:h-[420px] lg:w-[380px] lg:mt-24"
					src="/contact-two.png"
					alt="contact2"
				/>
			</motion.div>
		</div>
	);
};

export default ContactUs;
