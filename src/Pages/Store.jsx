import React from "react";
import CodeCard from "../Components/CodeCard";
import amazon_logo from "../assets/Store_page/Amazon.png";
import amazonPay_logo from "../assets/Store_page/AmazonPay.png";
import flipkart_logo from "../assets/Store_page/Flipkart.png";
import gPay_logo from "../assets/Store_page/GPay.jpg";
import paytm_logo from "../assets/Store_page/Paytm.jpg";
import phonePe_logo from "../assets/Store_page/PhonePe.jpg";
import StoreItems from "../data/StoreItems";
import withAuth from "../utils/withAuth";

const Store = () => {
	const getImage = (vendor) => {
		const image =
			vendor === "Paytm"
				? paytm_logo
				: vendor === "PhonePe"
				? phonePe_logo
				: vendor === "Google Pay"
				? gPay_logo
				: vendor === "Amazon Pay"
				? amazonPay_logo
				: vendor === "Amazon"
				? amazon_logo
				: vendor === "Flipkart" && flipkart_logo;
		return image;
	};

	return (
		<div className="mx-16 my-20 space-y-20">
			{Object.keys(StoreItems).map((category, index) => {
				return (
					<div key={index}>
						<h2 className="px-4 mb-8 font-sans text-4xl font-semibold">
							{category}
						</h2>
						<div className="flex flex-wrap items-stretch gap-y-8">
							{StoreItems[category].map((item, item_index) => {
								return (
									<CodeCard
										item={item}
										image={getImage(item.vendor)}
										key={`${index}_${item_index}`}
									/>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default withAuth(Store);
