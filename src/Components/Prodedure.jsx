import React from "react";
import Wrapper from "./Wrapper";

const Prodedure = () => {
	return (
		<Wrapper classname="mt-36">
			<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto text-center">
					<h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
						How does it work?
					</h2>
					<p class="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
						We're the link between e-waste recycling companies and eco-conscious
						consumers.
						<br />
						Our platform connects clients with trusted recycling partners,
						streamlining the recycling process and offering rewards for
						sustainable choices.
					</p>
				</div>

				<div class="relative mt-12 lg:mt-20">
					<div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
						<img
							class="w-full"
							src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
							alt=""
						/>
					</div>

					<div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
						<div>
							<div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
								<span class="text-xl font-semibold text-gray-700"> 1 </span>
							</div>
							<h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
								Locate a Nearby E-Waste Center
							</h3>
							<p class="mt-4 text-base text-gray-600">
								Use our interactive map to easily locate authorized e-waste
								recycling centers near you for convenient disposal of your
								electronic devices.
							</p>
						</div>

						<div>
							<div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
								<span class="text-xl font-semibold text-gray-700"> 2 </span>
							</div>
							<h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
								Recycle Your E-Waste
							</h3>
							<p class="mt-4 text-base text-gray-600">
								Visit the nearest center and responsibly dispose of your
								electronic devices, contributing to a cleaner environment and
								reducing electronic waste.
							</p>
						</div>

						<div>
							<div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
								<span class="text-xl font-semibold text-gray-700"> 3 </span>
							</div>
							<h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
								Earn Credit Points
							</h3>
							<p class="mt-4 text-base text-gray-600">
								Earn credit points for each device recycled, which can be
								redeemed for rewards and discounts, making your eco-friendly
								actions even more rewarding.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Prodedure;
