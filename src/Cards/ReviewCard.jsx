import React from "react";
import { Star } from "lucide-react";

export default function ReviewCard({
	name = "Zahra Khan",
	timeAgo = "a month ago",
	rating = 5,
	review = "Beautiful decor. I really enjoyed this place. We got the french toast which was very delicious, would definitely recommend trying. I also got a pistachio latte and I loved the flavour. Manager was very friendly and made us feel welcomed.",
	avatarUrl = "/placeholder.svg",
}) {
	return (
		<div className="rounded-lg border border-rose-800 p-6 max-w-xl h-[26rem]">
			<div className="flex items-center gap-3 mb-4">
				<div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center overflow-hidden">
					{avatarUrl ? (
						<img
							src={avatarUrl}
							alt={`${name}'s avatar`}
							className="h-full w-full"
						/>
					) : (
						<span className="text-lg font-bold text-red-700">
							{name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</span>
					)}
				</div>
				<div>
					<h3 className="font-medium text-lg text-red-700">{name}</h3>
					<p className="text-red-600 text-sm">{timeAgo}</p>
				</div>
			</div>

			<div className="flex gap-1 mb-4">
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						className={`w-5 h-5 ${
							i < rating ? "fill-red-700 text-red-700" : "text-gray-300"
						}`}
					/>
				))}
			</div>

			<p className="text-red-700 leading-relaxed">{review}</p>
		</div>
	);
}
