import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { addCode } from "../services/CodeService";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

// https://www.buff.game/wp-content/uploads/2023/06/riot.png
// https://www.material-tailwind.com/docs/html/card

const CodeCard = ({ item, image }) => {
	const { User, islogin, reduceUserCreditPoints } = useContext(Context);
	const navigate = useNavigate();

	const getCode = async () => {
		try {
			if (islogin) {
				if (User.creditPoints >= item.price) {
					const characters =
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
					let code = "";
					for (let i = 0; i < 10; i++) {
						code += characters.charAt(
							Math.floor(Math.random() * characters.length)
						);
					}

					await addCode(
						item.codeType,
						item.vendor,
						code,
						item.description,
						User._id
					);

					reduceUserCreditPoints(item.price);

					alert(`Your ${item.codeType} code is: ${code}`);
				} else alert("You don't have enough credit points!");
			} else navigate("/login");
		} catch {
			alert("An error occurred, please try again!");
		}
	};

	return (
		<div className="px-4 w-1/5">
			<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl h-full">
				<div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border shadow rounded-xl h-40">
					<img
						src={image}
						alt="card-image"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="p-6 pb-0">
					<p className="block font-sans text-lg antialiased font-semibold leading-relaxed text-pretty break-words">
						{item.description}
					</p>
				</div>
				<div className="mt-auto">
					<div className="p-6">
						<div className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
							Price
						</div>
						<div className="flex items-center gap-1 font-sans text-lg antialiased font-medium leading-relaxed">
							<BiCoinStack className="text-green-500" />
							{item.price}
						</div>
					</div>
					<div className="p-6 pt-0">
						<button
							className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 hover:bg-green-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
							type="button"
							onClick={getCode}
						>
							Get Code
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeCard;
