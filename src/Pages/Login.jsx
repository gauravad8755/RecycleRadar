import React from "react";
import posterlight from "../assets/Login_page/posterlightgif.gif";
import { useContext } from "react";
import gsap from "gsap";
import Context from "../context/Context";
import { useState } from "react";
import { Wrapper, Loading } from "../Components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createUser, loginUser } from "../services/AuthService";

const Login = () => {
	const { islogin, setislogin, setUser } = useContext(Context);
	const [isLoginPage, setIsLoginPage] = useState(true);
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Phone, setPhone] = useState("");
	const [Password, setPassword] = useState("");
	const navigate = useNavigate();
	const [loading, setloading] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			".auth",
			{ x: 400, opacity: 0 },
			{ x: 0, opacity: 100, duration: 2, ease: "power3.out", stagger: 0.25 }
		);
	}, [islogin]);

	const login = async () => {
		if (Email === "" || Password === "") {
			alert("Please fill all the fields");
		} else {
			try {
				setloading(true);
				const data = await loginUser(Email, Password);
				setloading(false);
				setUser(data);
				localStorage.setItem("user", data?._id);
				setislogin(true);
				navigate("/profile");
			} catch (error) {
				alert("Internal Server Error");
			} finally {
				setloading(false);
			}
		}
	};

	const Register = async () => {
		if (Name === "" || Email === "" || Phone === "" || Password === "") {
			alert("Please fill all the fields");
		} else {
			try {
				setloading(true);
				await createUser(Name, Email, Phone, Password);
				setloading(false);
				alert("User Created Successfully");
				setIsLoginPage(true);
			} catch (error) {
				alert("Email already exists");
			} finally {
				setloading(false);
			}
		}
	};

	if (islogin) navigate("/profile");

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="flex py-4 md:px-[8vw] justify-center ">
				<div className="w-[80vw] h-[85vh] z-10 md:flex hidden">
					<img src={posterlight} alt="" className="object-cover" />
				</div>

				{/* Login Cred */}
				{isLoginPage ? (
					<div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh]  rounded-xl">
						<div>
							<h1 className="mt-[5vh] font-montserrat font-bold text-3xl ">
								Welcome back!
							</h1>
							<p className=" font-montserrat font-light text-center">
								Please enter your details
							</p>
						</div>

						<div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit w-full">
							<div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
								<input
									type="email"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat  font-medium  md:w-[60vh]"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder="Email"
									value={Email}
								/>
							</div>
							<div className=" border-b-2 md:w-[60vh] flex w-[45vh]">
								<input
									type="password"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									placeholder="Password"
									value={Password}
								/>
							</div>
							<div className="w-full mt-[1vh] justify-between flex">
								<button
									className=" font-montserrat font-medium text-gray-600 hover:text-[#63cc71] hover:scale-105 transition-transform"
									onClick={() => setIsLoginPage(false)}
								>
									Not a User? Register
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
							<button
								className="text-md w-full font-poppins font-medium  shadow-3xl p-3 rounded-xl hover:bg-[#63cc71] hover:scale-105 transition-transform"
								onClick={() => login()}
							>
								Sign In
							</button>
						</div>
					</div>
				) : (
					// Register
					<div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh]  rounded-xl">
						<div>
							<h1 className="mt-[5vh] text-center font-montserrat font-bold text-3xl ">
								Register with RecycleRadar
							</h1>
							<p className=" font-montserrat font-light text-center">
								Please fill your details to register
							</p>
						</div>

						<div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit  w-full ">
							<div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
								<input
									type="text"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
									onChange={(e) => {
										setName(e.target.value);
									}}
									placeholder="Name"
									value={Name}
								/>
							</div>
							<div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
								<input
									type="email"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat  font-medium  md:w-[60vh]"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder="Email"
									value={Email}
								/>
							</div>
							<div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
								<input
									type="number"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
									onChange={(e) => {
										setPhone(e.target.value);
									}}
									placeholder="Phone"
									value={Phone}
								/>
							</div>
							<div className=" border-b-2 md:w-[60vh] flex w-[45vh]">
								<input
									type="password"
									className=" mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									placeholder="Password"
									value={Password}
								/>
							</div>
							<div className="w-full mt-[1vh]">
								<button
									className=" font-montserrat font-medium text-gray-600  hover:text-[#63cc71] hover:scale-105 transition-transform"
									onClick={() => setIsLoginPage(true)}
								>
									Already a User? Login
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
							<button
								className="text-md w-full font-poppins font-medium shadow-3xl p-3 rounded-xl hover:bg-[#63cc71] hover:scale-105 transition-transform"
								onClick={() => Register()}
							>
								Sign Up
							</button>
						</div>
					</div>
				)}
			</div>
		</Wrapper>
	);
};

export default Login;
