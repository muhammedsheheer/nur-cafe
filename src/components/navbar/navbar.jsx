import React from "react";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<>
			<nav className="hidden lg:block bg-[#786658] opacity-80 py-3 rounded-full shadow-lg w-[40rem] h-[64px] max-w-5xl mx-auto mt-5">
				<div className="flex items-center justify-between px-6"></div>

				<div className="hidden lg:flex justify-center gap-6 mt-2">
					<a
						href="#"
						className="mx-4 text-white text-base font-bold text-[13px]"
					>
						HOME
					</a>
					<a
						href="#"
						className="mx-4 text-white text-base font-bold text-[13px]"
					>
						MENU
					</a>
					<img
						className="w-[5rem] h-[6rem] pb-16"
						src="/colorkit.svg "
						alt="noorlogo"
					/>
					<a
						href="#"
						className="mx-4 text-white text-base font-bold text-[13px]"
					>
						RESERVATIONS
					</a>
					<a
						href="#"
						className="mx-4 text-white text-base font-bold text-[13px]"
					>
						CONTACT
					</a>
				</div>
			</nav>
			<nav className="lg:hidden flex flex-row justify-between mx-4 my-5">
				<img className="w-[96px] h-[36px]" src="colorkit.svg" alt="noor" />
				<button
					onClick={toggleMenu}
					className={`relative z-10 w-8 h-6 flex flex-col justify-between items-center transition-all duration-500 ease-in-out ${
						isOpen ? "scale-125" : "scale-100"
					}`}
				>
					<span
						className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
							isOpen ? "transform rotate-45 translate-y-2.5" : ""
						}`}
					></span>
					<span
						className={`block w-full h-1 bg-white transition-all duration-300 ease-in-out ${
							isOpen ? "opacity-0" : ""
						}`}
					></span>
					<span
						className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
							isOpen ? "transform -rotate-45 translate-y-2.5" : ""
						}`}
					></span>
				</button>
			</nav>
		</>
	);
};

export default Navbar;
