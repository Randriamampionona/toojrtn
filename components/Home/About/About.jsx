import { Title } from "../../common";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import download from "../../../utils/download";
import Me from "../../../public/assets/me-2.jpg";
import { motion } from "framer-motion";
import variants from "../motion";

const About = () => {
	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="mySection">
			<Title id={"about"} text={"About Me"} />

			<div className="myContainer flex flex-col items-center justify-start gap-8 sm:flex-row sm:items-start sm:gap-4 lg:gap-8">
				<div className="relative w-full h-[25rem] overflow-hidden rounded-md sm:w-1/2 sm:h-[45rem] lg:h-[30rem]">
					<Image
						src={Me}
						alt="toojrtn"
						layout="fill"
						objectFit="cover"
						placeholder="blur"
						blurDataURL="/favicon.ico"
					/>
				</div>

				<div className="flex flex-col items-center justify-center sm:w-1/2 sm:items-start sm:justify-start">
					<h2 className="mb-2">Who the fuck Am I ?</h2>
					<p className="text-center sm:text-left">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Libero id quod quae accusamus, ratione odit rerum
						nobis nam voluptas labore commodi sequi quisquam nostrum
						eligendi amet. Porro quia, id excepturi facere tenetur
						magnam praesentium suscipit minima, aperiam, qui
						voluptatibus optio sequi perferendis labore nulla cumque
						quod maxime dolorum! Pariatur a ut doloribus id! Quos
						modi vero adipisci perspiciatis deleniti eveniet atque
						quod eaque velit, aut cumque commodi unde debitis
						reprehenderit! Quis magnam dolore accusamus odit unde
						excepturi debitis nobis nulla nesciunt aliquam? Nobis
						velit assumenda id excepturi quidem, quis ipsum amet hic
						pariatur deserunt dignissimos natus nemo, fugiat libero
						inventore distinctio, voluptatibus qui eius praesentium
						dicta totam nam natus at? Omnis iste a quo laborum
						praesentium veritatis, repellendus ad cum labore
						pariatur ipsa consequuntur dolor? Blanditiis itaque
						asperiores et maxime!
					</p>

					<button className="btn mt-12 md:mt-6" onClick={download}>
						<FiDownload className="text-whiteColor dark:text-whiteColor" />
						<span className="text-whiteColor dark:text-whiteColor">
							Download CV
						</span>
					</button>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
