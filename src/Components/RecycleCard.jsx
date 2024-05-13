import React from "react";
import image from "../assets/laptop.png";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";

const RecycleCard = ({ id, product, location, creditPoints }) => {
	return (
		<Link
			to={`/recycle/${id}`}
			className="p-4 max-h-[20vh] shadow-3xl rounded-xl flex gap-[5vh]"
		>
			<div className="max-w-[10vh] h-fit flex z-10">
				<img src={image} alt="" className=" object-cover rounded-xl " />
			</div>
			<div>
				<h1 className="font-montserrat font-bold">{product}</h1>
				<h2 className="font-montserrat text-gray-500">{location}</h2>
				<h2 className="flex items-center gap-1 font-montserrat font-bold text-[#63cc71]">
					Credit Points:
					<BiCoinStack />
					{creditPoints}
				</h2>
			</div>
		</Link>
	);
};

export default RecycleCard;
