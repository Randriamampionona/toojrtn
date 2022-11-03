import { Title } from "./../../common";
import { PortfolioContext } from "../../../store/context/PortfolioContext";
import { motion } from "framer-motion";
import variants from "../motion";

const Servicies = () => {
	const { servicesData, openModal } = PortfolioContext();

	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="mySection">
			<Title id={"services"} text={"My Services"} />

			<div className="myContainer flex flex-col items-center justify-center gap-6 sm:flex-row lg:gap-x-16 lg:px-8">
				{servicesData.map((service) => (
					<div
						key={service.id}
						className="w-4/5 min-h-[16rem] p-4 border border-[#2829292b] dark:bg-[#8991911c] hover:border-primaryColor flex flex-col justify-around rounded-lg shadow-md sm:w-1/3">
						<span className="text-[3.5rem] dark:text-whiteColor_dark">
							{service.Icon}
						</span>

						<h2>{service.service}</h2>

						<li className="list-none cursor-pointer hover:text-primaryColor dark:hover:text-primaryColor_dark dark:text-lightDarkColor_dark hover:underline">
							Show more details &nbsp; &rarr;
						</li>
					</div>
				))}
			</div>

			<div className="myContainer flex-col justify-center items-center mt-10 space-y-6 hidden sm:flex">
				<p className="max-w-[80%] text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Dolorem deleniti ut nam impedit illo, beatae, sit aspernatur
					sed mollitia maxime facilis rerum. Laudantium, amet iste.
				</p>

				<button className="btn" onClick={() => openModal()}>
					<span className="text-whiteColor dark:text-whiteColor">
						Get Started
					</span>
				</button>
			</div>
		</motion.section>
	);
};

export default Servicies;
