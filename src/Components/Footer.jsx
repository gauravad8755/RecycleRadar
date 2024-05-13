import React from "react";
import Logo from "../assets/recycleradar_logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="h-fit w-full mt-[20vh] md:flex flex-col justify-center shadow-3xl p-5">
				<div className="mt-5 md:flex justify-between items-center">
					<div className="flex gap-2 ">
						<img src={Logo} alt="logo" className="h-[15vh]" />
					</div>

					<div>
						<ul className="flex">
							<li
								className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer border-r-2 border-gray-600 px-3"
								onClick={() => navigate("/")}
							>
								<a>Home</a>
							</li>
							<li
								className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer border-r-2 border-gray-600 px-3"
								onClick={() => navigate("/search")}
							>
								<a>Facilities</a>
							</li>
							<li
								className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer border-r-2 border-gray-600 px-3"
								onClick={() => navigate("/features")}
							>
								<a>Features</a>
							</li>
							<li
								className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer px-3"
								onClick={() => navigate("/contact")}
							>
								<a>Contact</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex  items-center justify-center mt-5">
					<h1 className="flex justify-center text-xl text-left font-montserrat font-semibold gap-2">
						Created by
						<span className="font-bold text-xl font-montserrat text-[#63cc71]">
							RecycleRadar
						</span>
						team
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
