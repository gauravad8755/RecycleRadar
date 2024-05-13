import React from "react";

const LoadingDots = () => {
	return (
		<div className="flex space-x-1 justify-center items-center bg-white mt-2">
			<div className="h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
			<div className="h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
			<div className="h-1 w-1 bg-black rounded-full animate-bounce" />
		</div>
	);
};

export default LoadingDots;
