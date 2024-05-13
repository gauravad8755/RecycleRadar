import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProductsCredit from "../data/ProductsCerdit";
import { BiCoinStack } from "react-icons/bi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import { useContext } from "react";
import withAuth from "../utils/withAuth";
import { addRecycle } from "../services/RecycleService";

const NewRecycle = () => {
	const { centreAddress } = useParams();
	const navigate = useNavigate();
	const { User } = useContext(Context);
	const [selectedProduct, setSelectedProduct] = useState(
		Object.keys(ProductsCredit)[0]
	);
	const [creditPoints, setCreditPoints] = useState(
		ProductsCredit[selectedProduct]
	);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const userId = User._id;
		const recycle = await addRecycle(
			selectedProduct,
			creditPoints,
			centreAddress,
			userId
		);

		navigate(`/recycle/${recycle?._id}` || "/");
	};

	return (
		<div className="flex justify-center">
			<form className="mt-10 px-4 pt-8 w-2/5" onSubmit={handleOnSubmit}>
				<h3 className="text-3xl font-medium">New Recycle</h3>
				{/* <p className="text-gray-400">
					Complete your order by providing your payment details.
				</p> */}
				<div>
					<label
						htmlFor="email"
						className="mt-4 mb-2 block text-sm font-medium"
					>
						E-Waste Centre Location
					</label>
					<div className="relative">
						<input
							type="text"
							id="centre"
							name="centre"
							className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
							value={centreAddress}
							disabled
						/>
						<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
							<FaLocationDot className="h-4 w-4 text-gray-400" />
						</div>
					</div>

					<label
						htmlFor="product"
						className="mt-4 mb-2 block text-sm font-medium"
					>
						Product
					</label>
					<div className="border-b pb-6">
						<select
							type="text"
							name="product"
							className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
							value={selectedProduct}
							onChange={(e) => {
								setSelectedProduct(e.target.value);
								setCreditPoints(ProductsCredit[e.target.value] || 0);
							}}
						>
							{Object.keys(ProductsCredit).map((product) => (
								<option key={product} value={product}>
									{product}
								</option>
							))}
						</select>
					</div>

					{/* Total */}
					<div className="mt-6 flex items-center justify-between">
						<p className="text-base font-medium text-gray-900">
							Credit Points:
						</p>
						<p className="flex text-2xl font-semibold text-gray-900 items-center gap-1">
							<BiCoinStack className="mt-1" />
							{creditPoints}
						</p>
					</div>
				</div>
				<button
					type="submit"
					className="mt-4 mb-8 w-full rounded-md bg-[#63cc71] px-6 py-3 font-medium font-poppins text-white"
				>
					Add in Queue
				</button>
			</form>
		</div>
	);
};

export default withAuth(NewRecycle);
