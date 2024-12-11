import React from "react";

export const Footer = () => {
	return (
		<>
			<div>
				<div className="bg-[url('/footer.png')] h-[450px] lg:h-[250px] bg-cover bg-center w-full bg-orange-50">
					<div className="flex flex-col items-center justify-center py-12">
						<ul className="flex items-center  flex-col lg:flex-row gap-3">
							<li className="text-orange-900 text-[14px] font-medium hover:underline focus-visible:underline">
								Home
							</li>
							<li className="text-orange-900 text-[14px] font-medium hover:underline focus-visible:underline">
								Menu
							</li>
							<li>
								<img
									className="w-42 h-10"
									src="/nur_footer.svg"
									alt="site logo"
								/>
							</li>
							<li className="text-orange-900 text-[14px] font-medium hover:underline focus-visible:underline">
								About
							</li>
							<li className="text-orange-900 text-[14px]  font-medium hover:underline focus-visible:underline">
								Contact
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-row items-center justify-center gap-4">
							<li>
								<img
									className="h-[41px] w-[41px] text-orange-900"
									src="/footericon.svg"
									alt="footericon"
								/>
							</li>
							<li>
								<img
									className="h-[41px] w-[41px] text-orange-900"
									src="/google.svg"
									alt="google"
								/>
							</li>
							<li>
								<img
									className="h-[41px] w-[41px] "
									src="/insta.svg"
									alt="instagram"
								/>
							</li>
						</ul>
					</div>
				</div>
				<div className="bg-orange-50">
					<div>
						<p className="h-[150px] text-center text-[20px] text-red-900 py-12">
							© 2024 Nur Cafe Manchester, All Rights Reserved | Powered By Foodo
						</p>
					</div>
					<div className="hidden lg:block">
						<div className="relative">
							<div className="absolute right-10 bottom-5 w-24 h-24 bg-black rounded-full flex flex-col items-center justify-center overflow-hidden">
								<img
									src="footerright.svg"
									alt="Round"
									className="object-cover w-7 h-7"
								/>
								<p className="text-zinc-400 text-[14px] text-center">
									Table <br /> Booking
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
