import React from "react";
import { Wrapper, RecycleCard } from "../Components";
import Context from "../context/Context";
import { useContext } from "react";
import { useState } from "react";
import { fetchAllRecycles } from "../services/RecycleService";
import { useEffect } from "react";
import withAuth from "../utils/withAuth";

const RecycleQueues = () => {
	const { User } = useContext(Context);
	const [recycles, setRecycles] = useState([]);

	useEffect(() => {
		if (User)
			fetchAllRecycles(User._id).then((recyclesData) =>
				setRecycles(recyclesData)
			);
	}, [User]);

	return (
		<Wrapper>
			<h1 className="mb-[10vh] font-montserrat font-bold text-2xl mt-[5vh]">
				Your Recycle Queues
			</h1>
			{recycles.length <= 0 ? (
				<p className="fs-5 text-center text-secondary mb-60">
					No recycle in queue!
				</p>
			) : (
				<div className="w-full flex flex-col gap-[5vh]">
					{recycles?.map((recycle) => {
						return (
							<RecycleCard
								id={recycle._id}
								product={recycle.product}
								location={recycle.location}
								creditPoints={recycle.creditPoints}
							/>
						);
					})}
				</div>
			)}
		</Wrapper>
	);
};

export default withAuth(RecycleQueues);
