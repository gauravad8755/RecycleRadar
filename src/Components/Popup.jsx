import React, { useContext } from "react";
import eduposter from "../assets/popupmock.webp";
import Context from "../context/Context";

const Popup = () => {
	const { setispopup } = useContext(Context);

	return (
		<div
			className="flex h-full fixed w-screen top-0 left-0 justify-center items-center bg-[rgba(34,34,34,0.5)]"
			style={{ zIndex: 9999 }}
		>
			<div className="relative p-[7vh]">
				<div>
					<button
						className="absolute p-2 rounded-md top-0 right-0 hover:text-[#63cc71]"
						onClick={() => {
							setispopup(false);
						}}
					>
						<i className="fi fi-br-cross"></i>
					</button>
				</div>
				<div className="bg-[#222222] md:w-[40vw] shadow-3xl rounded-md">
					<div className="">
						<img src={eduposter} alt="" className="rounded-md" />
					</div>
					<div className="p-2">
						<h1 className="text-xl font-bold font-montserrat text-white">
							Did you know?
						</h1>
						<p className="text-gray-200">
							Recycling your electronic waste helps protect the environment and
							conserves valuable resources. Did you know that recycling one
							million laptops saves enough energy to power{" "}
							<strong>3,500 U.S. homes</strong> for a year.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
