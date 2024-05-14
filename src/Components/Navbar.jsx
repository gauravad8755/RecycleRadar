import React from "react";
import Wrapper from "./Wrapper";
import Logo from "../assets/recycleradar_logo.png";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import { BiCoinStack } from "react-icons/bi";
import { FaRecycle } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
	const navigate = useNavigate();
	const { islogin, User, Location } = useContext(Context);

	return (
		<div className="shadow-3xl ">
			<Wrapper>
				<div className="justify-between items-center flex h-[15vh]">
					{/* Logo */}
					<div
						className="flex gap-2 cursor-pointer"
						onClick={() => navigate("/")}
					>
						<img src={Logo} alt="logo" className="h-[10vh]" />
					</div>

					{/* <div className='absolute bg-red-400 w-fit'></div> */}

					{/* Desktop Menu */}
					<div className="md:flex hidden relative justify-between items-center gap-[10vh]">
						<nav>
							<ul className="hidden md:flex gap-10 justify-center items-center ">
								<li
									className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer nav"
									onClick={() => navigate("/")}
								>
									<a>Home</a>
								</li>
								<li
									className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer nav"
									onClick={() => navigate("/search")}
								>
									<a>Facilities</a>
								</li>
								<li
									className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer nav"
									onClick={() => navigate("/features")}
								>
									<a>Features</a>
								</li>
								<li
									className="font-semibold font-montserrat hover:text-[#63cc71] cursor-pointer nav"
									onClick={() => navigate("/contact")}
								>
									<a>Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="md:flex hidden gap-[5vh] items-center">
						{!Location ? (
							<h1 className=" font-montserrat font-bold text-green-400 flex items-center gap-[1vh]">
								<i className="fi fi-rr-marker"></i>Location
							</h1>
						) : (
							<h1 className=" font-montserrat font-bold text-green-400 flex items-center gap-[1vh]">
								<i className="fi fi-rr-marker"></i>
								{Location}
							</h1>
						)}

						{!islogin ? (
							<div className="md:flex hidden gap-[5vh]">
								<button
									className="shadow-3xl font-medium font-poppins px-4 py-2 rounded-md hover:bg-[#63cc71] transition-transform nav"
									onClick={() => {
										navigate("/login");
									}}
								>
									Login
								</button>
							</div>
						) : (
							<div className="md:flex hidden gap-[2vh]">
								<button
									className="shadow-5xl font-medium font-poppins hover:text-[#63cc71] transition-transform"
									onClick={() => {
										navigate("/recyclequeues");
									}}
								>
									<FaRecycle id="recycleQueues" />
									<Tooltip anchorSelect="#recycleQueues" place="bottom">
										Recycle Queues
									</Tooltip>
								</button>
								<button
									id="profile"
									className=" font-medium font-poppins px-4 py-2 rounded-md hover:bg-[#63cc71] transition-transform"
									onClick={() => {
										navigate("/profile");
									}}
								>
									<i className="fi fi-sr-user"></i>
								</button>
								<Tooltip anchorSelect="#profile" place="bottom">
									Profile
								</Tooltip>
								<button
									id="creditPoints"
									className="flex w-fit h-fit justify-center items-center p-2 rounded-lg border-2 gap-1"
									onClick={() => {
										navigate("/store");
									}}
								>
									<h1>{User?.creditPoints}</h1>
									<BiCoinStack />
								</button>
								<Tooltip anchorSelect="#creditPoints" place="bottom">
									Store
								</Tooltip>
							</div>
						)}
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden flex items-center gap-[5vh]">
						<button className=" font-medium font-poppins hover:text-[#63cc71] transition-transform">
							<i className="fi fi-br-menu-burger text-xl"></i>
						</button>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default Navbar;
