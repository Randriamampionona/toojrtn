import Image from "next/image";
import { BsTools } from "react-icons/bs";
import { PortfolioContext } from "../../../store/context/PortfolioContext";
import { motion } from "framer-motion";
import variants from "../motion";

const Intro = () => {
	const { socialMedaIcons, openModal } = PortfolioContext();

	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="relative w-full min-h-customHeightScreen mySection overflow-x-hidden">
			<div className="myContainer flex flex-col gap-6 sm:flex-row sm:items-center">
				{/* text */}
				<div className="max-w-full w-full h-full flex flex-col items-start justify-start pt-20 md:max-w-[50%] md:pt-0">
					<div>
						<div className="mb-10">
							<h1 className="text-5xl leading-tight">
								Tojonirina
							</h1>
							<h4 className="text-2xl font-medium text-secondaryColor">
								Full Stack Developer
							</h4>
							<p>
								Innovative, task-driven profzssional with 3+
								years of experience. Equipped with a record of
								success in consistentle identifying and
								providing the technological needs of companies
								through ingenious innovation. Proficient in
								developing API, creating user interfaces,
								writing and testing codes, troubleshooting
								simple/comple issues and implementing new
								features based on user feedback.
							</p>
						</div>

						<button
							className="btn mb-4"
							onClick={() => openModal?.()}>
							<BsTools className="text-whiteColor dark:text-whiteColor" />
							<span className="text-whiteColor dark:text-whiteColor text-base">
								Start Your Project
							</span>
						</button>

						<div className="flex items-center space-x-4">
							{socialMedaIcons.map(({ slug, Icon, text }) => (
								<a
									className="flex items-center gap-x-2 text-[1.1rem] bg-[#28292917] dark:bg-[#8991911c] hover:bg-[#0e78c826] dark:hover:bg-[#89919146] rounded-full px-3 py-2 dark:text-lightDarkColor_dark text-lightDarkColor"
									key={slug}
									href={slug}
									target="_blank"
									rel="noreferrer">
									<span>{Icon}</span>
									<span>{text}</span>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* blob mobile */}
				<div
					className="absolute right-0 top-0 translate-x-1/2 -z-10 dark:z-0 w-[35rem] h-[35rem] bg-[#0e78c80f] md:hidden"
					style={{
						borderRadius: "60% 40% 30% 60% / 55% 45% 60% 50%",
					}}
				/>

				{/* image */}
				<div className="relative max-w-[50%] w-full h-full items-center justify-center hidden md:flex">
					<Image
						src="/assets/me-with-blob.png"
						alt="toojrtn"
						objectFit="contain"
						width={450}
						height={450}
						placeholder="blur"
						blurDataURL="/assets/me-with-blob.png"
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default Intro;
