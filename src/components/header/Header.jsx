import React from "react";
import Navbar from "../navbar/navbar";

const Header = () => {
	return (
		<div className="relative h-screen bg-black overflow-hidden">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover"
				src="/Hotel1.mp4"
				autoPlay
				loop
				muted
				playsInline
			/>

			<div className="absolute top-0 left-0 w-full z-20">
				<Navbar />
			</div>

			<div className="relative z-10 flex items-center justify-center lg:justify-start h-full">
				<div className="text-center lg:text-start text-white px-4 flex flex-col justify-center items-center ">
					<h1
						className="text-5xl lg:text-[96px] font-medium mb-4 lg:leading-[110px]"
						style={{ fontFamily: "Italiana, sans-serif" }}
					>
						The Love <br /> Language of <br /> Arabian Hospitality
					</h1>
					<div className="flex justify-center lg:justify-start w-full">
						<button className="bg-white text-black rounded-full px-6 py-4 flex flex-row justify-center items-center  gap-2">
							VIEW MENU <img src="arrowr.svg" alt="arrowr" />
						</button>
					</div>
				</div>
			</div>

			<div className="hidden lg:block">
				<div className="absolute right-[5rem] bottom-[21rem] w-60 h-60 bg-black rounded-full flex justify-center overflow-hidden border-4 border-orange-300 shadow-md animate-spin-slow">
					<img
						src="/colorkit (1).svg"
						alt="Round"
						className="object-cover w-14 h-14 mt-8 text-orange-300"
					/>
					<p className="absolute text-orange-300 text-[24px] text-center mt-24">
						Table <br /> Booking
					</p>
				</div>
			</div>

			<div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
		</div>
	);
};

export default Header;
