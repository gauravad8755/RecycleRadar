import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
	const form = useRef();
	const [isLoading, setIsLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		setIsLoading(true);

		setTimeout(() => {
			emailjs
				.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_KEY,
					import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
					form.current,
					{
						publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
					}
				)
				.then(
					() => alert("The message has been sent successfully!"),
					() => alert("Failed to send the message!")
				)
				.finally(() => {
					form.current.reset();
					setIsLoading(false);
				});
		}, 5000);
	};

	return (
		<div id="contact">
			<div className="flex flex-col justify-center items-center mt-[20vh]">
				<h1 className="mb-[10vh] font-montserrat font-bold text-2xl">
					Contact Us
				</h1>
				<div className="w-fit h-fit bg-[#343434] shadow-3xl rounded-xl p-[5vh] md:ml-5 mb-10 z-10 searchtext card">
					<h1 className="md:text-[5vh] text-[8vh] font-montserrat  font-bold">
						Contact our Team
					</h1>
					<p className=" text-gray-400 text-lg font-montserrat font-medium">
						Fill up the Details given below and click on the submit
					</p>

					<form
						className="mt-10 flex flex-col gap-5"
						ref={form}
						onSubmit={sendEmail}
					>
						<div className="md:flex  md:gap-5">
							<div className="relative">
								<p className="font-montserrat font-semibold">Email</p>
								<input
									type="email"
									name="email"
									className="w-full mt-2 rounded-lg p-4 font-montserrat border-2 font-medium bg-gray-200"
									placeholder="Enter Your Email"
									required
								/>
							</div>
							<div className="relative">
								<p className="font-poppins font-semibold md:mt-0 mt-5 ">Name</p>
								<input
									type="text"
									name="name"
									className="w-full mt-2 rounded-lg p-4 font-montserrat border-2 font-medium bg-gray-200"
									placeholder="Enter Your Name"
									required
								/>
							</div>
						</div>
						<div className="relative">
							<p className="font-poppins font-semibold md:mt-0 mt-5 ">
								Message
							</p>
							<input
								type="text"
								name="message"
								className="w-full mt-2 rounded-lg p-4 font-montserrat border-2 font-medium bg-gray-200"
								placeholder="Enter the Message"
								required
							/>
						</div>
						<button
							type="submit"
							className={`flex items-center justify-center mt-[2vh] shadow-3xl transition-transform font-montserrat font-semibold p-4 rounded-lg w-full gap-3 ${
								isLoading
									? "bg-green-300 text-gray-600"
									: "hover:bg-[#63cc71] hover:scale-105"
							}`}
							disabled={isLoading}
						>
							Submit
							{isLoading && (
								<img
									class="w-5 h-5 animate-spin"
									src="https://www.svgrepo.com/show/491270/loading-spinner.svg"
									alt="Loading..."
								></img>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
