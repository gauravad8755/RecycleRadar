import React from "react";
import { Wrapper } from "../Components";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import admin from "../assets/profile.png";
import profile from "../assets/man.png";
import withAuth from "../utils/withAuth";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllCodes } from "../services/CodeService";

const Profile = () => {
	const { User, setUser, setislogin } = useContext(Context);
	const [codes, setCodes] = useState([]);

	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("user");
		setUser(null);
		setislogin(false);
		navigate("/");
	};

	useEffect(() => {
		fetchAllCodes(User._id).then((codesData) => setCodes(codesData));
	});

	return (
		<Wrapper>
			<div className="flex justify-center my-[10vh] md:mx-0 mx-[5vw]">
				<div className="h-fit w-fit shadow-3xl flex flex-col md:flex-row gap-[10vh] justify-center items-center px-10 py-10">
					<div className="shadow-3xl w-fit p-4 rounded-lg">
						{User?.isadmin ? (
							<img src={admin} alt="" className="h-[20vh] md:h-[30vh]" />
						) : (
							<img src={profile} alt="" className="h-[20vh] md:h-[30vh]" />
						)}
					</div>
					<div className="flex flex-col gap-5 ">
						<div className="flex flex-col gap-5 mb-5 ">
							<div className="flex gap-5">
								<h2 className="text-xl font-poppins font-semibold">Name:</h2>
								<h2 className="text-xl font-poppins font-medium">
									{User?.name}
								</h2>
							</div>
							<div className="flex gap-5">
								<h2 className="text-xl font-poppins font-semibold">Email:</h2>
								<h2 className="text-xl font-poppins font-medium">
									{User?.email}
								</h2>
							</div>
							<div className="flex gap-5">
								<h2 className="text-xl font-poppins font-semibold">Phone:</h2>
								<h2 className="text-xl font-poppins font-medium">
									{User?.phone}
								</h2>
							</div>
							<div className="flex gap-5">
								<h2 className="text-xl font-poppins font-semibold">
									Credit Points:
								</h2>
								<h2 className="text-xl font-poppins font-medium">
									{User?.creditPoints}
								</h2>
							</div>
						</div>
						<button
							className="shadow-3xl font-medium font-poppins px-4 py-2 rounded-md hover:bg-[#63cc71]  transition-transform nav"
							onClick={() => logout()}
						>
							Logout
						</button>
					</div>
				</div>
			</div>

			<div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mt-20 mx-auto">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Your Redeem & Coupon Codes
					</h3>
				</div>
				<div className="border-y border-gray-200">
					<dl>
						{codes.length > 0 ? (
							<>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-base font-semibold text-gray-900 sm:col-span-2">
										Code Details
									</dt>
									<dd className="mt-1 text-base font-semibold text-gray-900 sm:mt-0 text-end">
										Code
									</dd>
								</div>
								{codes.map((code, index) => {
									return (
										<div
											className={`${
												index % 2 !== 0 ? "bg-gray-50" : "bg-white"
											} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
										>
											<dt className="text-sm font-medium text-gray-500 sm:col-span-2">
												{code.description}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 text-end">
												{code.code}
											</dd>
										</div>
									);
								})}
							</>
						) : (
							<div className="bg-gray-50 px-4 py-5 sm:px-6">
								<dt className="text-sm font-normal text-gray-500 text-center">
									You don't have any redeem or coupon code!
								</dt>
							</div>
						)}
					</dl>
				</div>
			</div>
		</Wrapper>
	);
};

export default withAuth(Profile);
