import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";

const Features = () => {
	return (
		<div className="w-full z-10 md:px-[20vh] px-2 mt-24" id="features">
			<h2 class="mb-16 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">
				Features
			</h2>
			<div className="flex gap-y-20 flex-wrap">
				<div className="pr-10 w-1/2">
					<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
						<div className="p-6">
							<FaSearchLocation className="w-12 h-12 mb-4 text-green-500" />
							<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								Discover Nearby E-Waste Centers
							</h5>
							<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
								Join the movement towards responsible e-waste disposal by easily
								locating authorized recycling centers near you. Our interactive
								map helps you find the closest facilities, making it convenient
								to drop off your electronic devices for safe and environmentally
								friendly recycling.
							</p>
						</div>
					</div>
				</div>
				<div className="pl-10 w-1/2">
					<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
						<div className="p-6">
							<FaCoins className="w-12 h-12 mb-4 text-green-500" />
							<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								Earn Rewards for Recycling
							</h5>
							<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
								Make a positive impact on the environment while earning rewards!
								Each time you recycle your e-waste at one of our authorized
								centers, you accumulate credit points. These points can be
								redeemed for exciting rewards and exclusive discounts, giving
								you even more reasons to recycle.
							</p>
						</div>
					</div>
				</div>
				<div className="pr-10 w-1/2">
					<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
						<div className="p-6">
							<MdOutlineTipsAndUpdates className="w-12 h-12 mb-4 text-green-500" />
							<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								Get Expert Advice and Tips
							</h5>
							<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
								Questions about e-waste recycling? Our knowledgeable team is
								here to help. Contact us for expert advice, recycling tips, and
								guidance on responsible electronic waste disposal. Whether
								you're wondering how to recycle specific devices or seeking
								advice on reducing your environmental footprint, we've got you
								covered.
							</p>
						</div>
					</div>
				</div>
				<div className="pl-10 w-1/2">
					<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
						<div className="p-6">
							<TbMessageChatbot className="w-12 h-12 mb-4 text-green-500" />
							<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								Chatbot Assistance
							</h5>
							<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
								Need quick answers? Our chatbot is here to help! Get instant
								assistance with any questions you have about e-waste recycling,
								nearby centers, rewards, and more. Our chatbot provides easy
								access to information, ensuring you have the guidance you need
								to make informed decisions about recycling your electronic
								devices.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
