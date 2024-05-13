import React from "react";
import Modal from "../components/Modal";

const withModal = (Component) => {
	return (props) => {
		return (
			<>
				<Component {...props} />
				<Modal title={"Recycling E-Waste"} delay={10000}>
					<div className="d-flex justify-content-center">
						<img
							src="https://5.imimg.com/data5/QN/IS/UL/SELLER-97738597/e-waste-dismantling-recycling-service-500x500.png"
							alt="E-Waste Recycle"
							width="60%"
						/>
					</div>
					<div className="p-2 text-justify">
						E-waste, derived from discarded electronic devices like computers
						and smartphones, contains hazardous materials such as lead and
						mercury. Improper disposal poses environmental and health risks,
						with toxic substances leaching into soil and waterways. Recycling
						e-waste is essential, as it conserves resources and minimizes
						pollution. By utilizing certified recycling facilities or
						manufacturer take-back programs, individuals can contribute to a
						sustainable future while protecting personal data through proper
						device erasure.
					</div>
				</Modal>
			</>
		);
	};
};

export default withModal;
