import { PortfolioContext } from "../../../store/context/PortfolioContext";
import React, { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import FormStage from "./FormStage";
import { motion } from "framer-motion";
import variants from "./motion";

const Modal = () => {
	const { closeModal } = PortfolioContext();
	const [stage, setStage] = useState(0);
	const [hideStage, setHideStage] = useState(false);

	useEffect(() => {
		let timiID;
		if (stage === 3) timiID = setTimeout(() => setHideStage(true), 1500);

		return () => timiID;
	}, [stage]);

	return (
		<motion.div
			variants={variants.container}
			initial="initial"
			animate="animate"
			exit="exit"
			className="fixed inset-0 w-screen h-screen z-[100] m-auto flex flex-col items-center justify-center">
			<div
				className="z-10 absolute inset-0 w-screen h-screen bg-[#000000d2]"
				title="Close"
				onClick={() => closeModal()}
			/>

			<motion.div
				variants={variants.modal}
				initial="initial"
				animate="animate"
				exit="exit"
				className="z-20 w-5/6 sm:w-2/3 lg:w-1/3 space-y-8">
				{!hideStage && (
					<div className="relative w-full flex items-center justify-between after:absolute after:w-full after:h-[1px] after:bg-whiteColor after:z-[-1]">
						{Array(3)
							.fill(undefined)
							.map((_, i) => (
								<span
									key={i}
									className={`${
										i + 1 <= stage
											? "bg-green-500"
											: "bg-whiteColor"
									} w-8 h-8 flex items-center justify-center text-lightDarkColor rounded-full`}>
									{i + 1 <= stage ? (
										<FiCheck className="text-whiteColor" />
									) : (
										i + 1
									)}
								</span>
							))}
					</div>
				)}

				<div className="relative w-full h-auto bg-whiteColor rounded-lg shadow-whiteColor shadow-sm border border-[#2829292b] p-8">
					<FormStage
						stage={stage}
						setStage={setStage}
						hideStage={hideStage}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Modal;
