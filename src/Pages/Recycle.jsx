import React from "react";
import { RxCross2 } from "react-icons/rx";
import withAuth from "../utils/withAuth";
import Context from "../context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecycle, fetchOneRecycle } from "../services/RecycleService";
import { useEffect } from "react";

const Recycle = () => {
	const { recycleId } = useParams();
	const [recycle, setRecycle] = useState(null);
	const { increaseUserCreditPoints } = useContext(Context);
	const navigate = useNavigate();

	const handleRecycled = async () => {
		await increaseUserCreditPoints(recycle.creditPoints);
		await deleteRecycle(recycle._id);
		navigate("/recyclequeues");
	};

	const handleCancel = async () => {
		await deleteRecycle(recycle._id);
		navigate("/recyclequeues");
	};

	useEffect(() => {
		fetchOneRecycle(recycleId).then((recycleData) => setRecycle(recycleData));
	});

	return (
		<div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mt-20 mx-auto">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					Recycle Database
				</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500">
					Details and informations features the recycle.
				</p>
			</div>
			<div className="border-y border-gray-200">
				<dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Product Name</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{recycle?.product}
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
							E-waste Centre Location
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{recycle?.location}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Credit Points</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{recycle?.creditPoints}
						</dd>
					</div>
				</dl>
			</div>
			<div className="flex justify-center px-4 py-5 sm:px-6 gap-5">
				<button
					className="bg-white shadow border font-medium font-poppins px-4 py-2 rounded-md hover:bg-[#63cc71] transition-transform w-1/2"
					onClick={handleRecycled}
				>
					I Have Recycled
				</button>
				<button
					className="flex justify-center items-center gap-1 bg-red-500 text-white shadow border font-medium font-poppins px-4 py-2 rounded-md hover:bg-red-600 transition-transform w-1/2"
					onClick={handleCancel}
				>
					<RxCross2 className="text-xl" /> Cancel Recycle
				</button>
			</div>
		</div>
	);
};

export default withAuth(Recycle);
