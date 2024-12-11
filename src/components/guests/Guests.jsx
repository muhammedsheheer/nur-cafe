import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "../../Cards/ReviewCard";

const reviews = [
	{
		name: "John Doe",
		timeAgo: "2 weeks ago",
		rating: 4,
		review:
			"Absolutely beautiful interior. Staff are helpful and welcoming! Great food. A few options, but every option is perfect. Nice vibe too! Would definitely recommend. Pistachio latte was so nice, and the Turkish breakfast was so delicious. Naza was so helpful and really sweet, great hospitality!!",
		avatarUrl: "/avatar1.png",
	},
	{
		name: "Jane Smith",
		timeAgo: "3 days ago",
		rating: 5,
		review:
			"I ordered the shakshuka and the Turkish breakfast and the Arabic coffee. Very pleasantly surprised and it was very satisfying. Mora gave us great service as she was very friendly and she took care of us. Would definitely come again.",
		avatarUrl: "/avatar2.png",
	},
	{
		name: "Alice Brown",
		timeAgo: "5 hours ago",
		rating: 3,
		review:
			"My husband and I decided to try this place and what an excellent choice it was. The decor was lovely, the service was fantastic. We were made to feel so welcomed and special. The staff could not do enough for us. The food was so delicious and a good price. Will definitely be going back again.",
		avatarUrl: "avatar3.png",
	},
	{
		name: "Brown",
		timeAgo: "6 hours ago",
		rating: 2,
		review:
			"I ordered the shakshuka and the Turkish breakfast and the Arabic coffee. Very pleasantly surprised and it was very satisfying. Mora gave us great service as she was very friendly and she took care of us. Would definitely come again",
		avatarUrl: "avatar4.png",
	},
	{
		name: "Dalvis",
		timeAgo: "5 months ago",
		rating: 4,
		review:
			"Absolutely beautiful interior. Staff are helpful and welcoming! Great food. A few options, but every option is perfect. Nice vibe too! Would definitely recommend. Pistachio latte was so nice, and the Turkish breakfast was so delicious. Naza was so helpful and really sweet, great hospitality!",
		avatarUrl: "avatar5.png",
	},
	{
		name: "John Doe",
		timeAgo: "2 weeks ago",
		rating: 4,
		review:
			"Absolutely beautiful interior. Staff are helpful and welcoming! Great food. A few options, but every option is perfect. Nice vibe too! Would definitely recommend. Pistachio latte was so nice, and the Turkish breakfast was so delicious. Naza was so helpful and really sweet, great hospitality!!",
		avatarUrl: "/avatar1.png",
	},
	{
		name: "Jane Smith",
		timeAgo: "3 days ago",
		rating: 5,
		review:
			"I ordered the shakshuka and the Turkish breakfast and the Arabic coffee. Very pleasantly surprised and it was very satisfying. Mora gave us great service as she was very friendly and she took care of us. Would definitely come again.",
		avatarUrl: "/avatar2.png",
	},
	{
		name: "Alice Brown",
		timeAgo: "5 hours ago",
		rating: 3,
		review:
			"My husband and I decided to try this place and what an excellent choice it was. The decor was lovely, the service was fantastic. We were made to feel so welcomed and special. The staff could not do enough for us. The food was so delicious and a good price. Will definitely be going back again.",
		avatarUrl: "avatar3.png",
	},
	{
		name: "Brown",
		timeAgo: "6 hours ago",
		rating: 2,
		review:
			"I ordered the shakshuka and the Turkish breakfast and the Arabic coffee. Very pleasantly surprised and it was very satisfying. Mora gave us great service as she was very friendly and she took care of us. Would definitely come again",
		avatarUrl: "avatar4.png",
	},
	{
		name: "Dalvis",
		timeAgo: "5 months ago",
		rating: 4,
		review:
			"Absolutely beautiful interior. Staff are helpful and welcoming! Great food. A few options, but every option is perfect. Nice vibe too! Would definitely recommend. Pistachio latte was so nice, and the Turkish breakfast was so delicious. Naza was so helpful and really sweet, great hospitality!",
		avatarUrl: "avatar5.png",
	},
];

export default function ReviewCarousel() {
	const scrollContainerRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	};

	useEffect(() => {
		checkScroll();
		window.addEventListener("resize", checkScroll);
		return () => window.removeEventListener("resize", checkScroll);
	}, []);

	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "left" ? -400 : 400;
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative bg-orange-50 min-h-[600px] p-8">
			<div
				ref={scrollContainerRef}
				onScroll={checkScroll}
				className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
			>
				{reviews.map((review, index) => (
					<div key={index} className="flex-shrink-0 w-[400px]">
						<ReviewCard {...review} />
					</div>
				))}
			</div>
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
				<button
					onClick={() => scroll("left")}
					disabled={!canScrollLeft}
					className="bg-orange-50 text-rose-800 rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
					aria-label="Scroll left"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={() => scroll("right")}
					disabled={!canScrollRight}
					className="bg-orange-50 text-rose-800 rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
					aria-label="Scroll right"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
