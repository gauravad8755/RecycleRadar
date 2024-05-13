import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Loading from "./Loading";
import map from "../assets/india_map.jpg";
import { useNavigate } from "react-router-dom";

const Poster = () => {
	const navigate = useNavigate();
	const [isLoading, setisLoading] = useState(false);

	const fadeDuration = 1.5; // Duration of fade-in/fade-out animation in seconds

	useEffect(() => {
		// Fade in the component
		gsap.fromTo(
			"#searchposter",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: fadeDuration,
				ease: "Power3.easeInOut", // Optional easing function
			}
		);

		// Add cleanup when the component unmounts
		return () => {
			// Fade out the component
			gsap.fromTo(
				"#searchposter",
				{ opacity: 1 },
				{
					opacity: 0,
					duration: fadeDuration,
					ease: "Power3.easeInOut", // Optional easing function
				}
			);
		};
	}, []);

	return (
		<div>
			{isLoading ? <Loading /> : ""}
			<div
				className="flex relative rounded-lg pt-[2vh] mt-[5vh] gap-10 justify-center items-center md:max-h-[70vh] "
				id="searchposter"
			>
				<div className="hidden absolute opacity-20 top-0 md:flex w-full max-h-[75vh] ">
					<img
						src={map}
						alt="MAP"
						className="max-h-[100vh] w-full object-cover object-[50%_40%] rounded-xl"
					/>
				</div>
				<div className="h-[78vh] flex items-center justify-center">
					<div className="postercard w-1/2 h-fit mt-[5vh] shadow-3xl rounded-xl p-[3vh] backdrop-blur-md md:ml-5 mb-10 z-10 searchtext ">
						<h1 className="md:text-[5vh] text-[5vh] font-montserrat font-bold text-center mb-3">
							Welcome To RecycleRadar
						</h1>
						<p className="text-gray-600 text-lg font-montserrat font-medium text-center leading-relaxed">
							Join us in our mission to create a greener planet by responsibly
							recycling your electronic waste. With RecycleRadar, finding the
							nearest e-waste recycling center is easier than ever. Simply
							locate a center near you, drop off your electronic devices, earn
							credit points, and get rewarded for your eco-friendly actions.
							Together, let's make a positive impact on the environment, one
							device at a time.
						</p>

						<div className="mt-10 flex justify-center">
							<button
								className="hover:bg-[#63cc71] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-4 px-12 rounded-lg w-fit"
								onClick={() => {
									navigate(`/search`);
								}}
							>
								Locate Facility
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Poster;
