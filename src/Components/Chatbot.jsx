import React from "react";
import { useState } from "react";
import LoadingDots from "./LoadingDots";
import chatbotQuestions from "../data/ChatbotQuestions.js";
import { useRef } from "react";
import { useEffect } from "react";

const Chatbot = () => {
	const chatContainerRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [chatMessages, setChatMessages] = useState([
		"Hi, how can I help you today?",
	]);

	const scrollToBottom = () => {
		chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setChatMessages((prevMessages) => [
			...prevMessages,
			message,
			<LoadingDots />,
		]);
		scrollToBottom();
		const modifiedUserMessage = message
			.toLowerCase()
			.trim()
			.replace(/\s+/g, " ")
			.replace(/[^\a-z\s]/gi, "");

		let AIMessage;
		if (Object.keys(chatbotQuestions).includes(modifiedUserMessage)) {
			AIMessage = chatbotQuestions[modifiedUserMessage];
		} else if (modifiedUserMessage.includes("redeem")) {
			AIMessage =
				"To redeem your points, visit our Store page. Choose the items you want and click on the 'Get Code' button to complete your redemption.";
		} else if (modifiedUserMessage.includes("recycle")) {
			AIMessage =
				"To recycle your e-waste, search for nearby centers using our website. Drop off your items at the selected center and earn points for recycling.";
		} else if (modifiedUserMessage.includes("point")) {
			AIMessage =
				"Earn points by recycling your e-waste at designated centers. Accumulate points and use them to redeem exciting items from our Store page.";
		} else if (modifiedUserMessage.includes("center")) {
			AIMessage =
				"Find e-waste recycling centers near you in our Facilities page. Simply allow your location permission to see a list of nearby centers.";
		} else if (modifiedUserMessage.includes("store")) {
			AIMessage =
				"Visit our Store page to browse items available for redemption. Use your points to get the items you like by clicking on the 'Get Code' button.";
		} else if (modifiedUserMessage.includes("credit")) {
			AIMessage =
				"Earn credit points by recycling your e-waste at local centers. Use these credits to redeem various items from our Store page.";
		} else if (modifiedUserMessage.includes("reward")) {
			AIMessage =
				"Recycle your e-waste and earn points to redeem exciting rewards from our Store page. The more you recycle, the more you can redeem!";
		} else if (modifiedUserMessage.includes("ewaste")) {
			AIMessage =
				"E-waste refers to discarded electronic devices like phones, computers, and appliances. Use our website to find nearby recycling centers where you can safely dispose of your e-waste and earn points for doing so.";
		} else {
			AIMessage = chatbotQuestions["default"];
		}

		setMessage("");
		setTimeout(() => {
			setChatMessages((prevMessages) => [
				...prevMessages.slice(0, prevMessages.length - 1),
				AIMessage,
			]);
			scrollToBottom();
		}, 3000);
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatMessages]);

	return (
		<div className="fixed z-50">
			<button
				className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					xmlns=" http://www.w3.org/2000/svg"
					width={30}
					height={40}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-white block border-gray-200 align-middle"
				>
					<path
						d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
						className="border-gray-200"
					></path>
				</svg>
			</button>
			<div
				style={{
					boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
				}}
				className={`flex flex-col justify-between fixed bottom-[5.5rem] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[380px] h-[500px] ${
					!isOpen && "hidden"
				}`}
			>
				<div>
					{/* Heading */}
					<h2 className="font-semibold text-lg tracking-tight mb-2">Chatbot</h2>
					{/* Chat Container */}
					<div
						className="pr-4 overflow-y-auto min-w-full max-h-[22rem]"
						ref={chatContainerRef}
					>
						{chatMessages.map((chatMessage, index) => {
							return (
								<div
									className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
									key={index}
								>
									<span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
										<div className="rounded-full bg-gray-100 border p-1">
											{index % 2 === 0 ? (
												// AI Icon
												<svg
													stroke="none"
													fill="black"
													strokeWidth="1.5"
													viewBox="0 0 24 24"
													aria-hidden="true"
													height={20}
													width={20}
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
													></path>
												</svg>
											) : (
												// User Icon
												<svg
													stroke="none"
													fill="black"
													strokeWidth={0}
													viewBox="0 0 16 16"
													height={20}
													width={20}
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
												</svg>
											)}
										</div>
									</span>
									<div className="leading-relaxed">
										<span className="block font-bold text-gray-700">
											{index % 2 === 0 ? "AI" : "You"}
										</span>
										{chatMessage}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* Input box  */}
				<div className="flex items-center">
					<form
						className="flex items-center justify-center w-full space-x-2"
						onSubmit={handleSubmit}
					>
						<input
							className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
							placeholder="Type your message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button
							type="submit"
							className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 h-10 px-4 py-2"
							disabled={message.length <= 0}
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chatbot;
