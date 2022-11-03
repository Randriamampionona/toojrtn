import Image from "next/image";
import Link from "next/link";
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
			className="relative w-full min-h-customHeightScreen mySection">
			<div className="myContainer flex flex-col gap-6 sm:flex-row sm:items-center">
				{/* text */}
				<div className="max-w-full w-full h-full flex flex-col items-start justify-start pt-20 md:max-w-[50%] md:pt-0">
					<div className="space-y-10">
						<div>
							<h1 className="text-[2.5rem] leading-normall sm:text-[3.5rem]">
								Hi, <br /> I&apos;m{" "}
								<span className="text-[2.5rem] leading-normall sm:text-[3.5rem] text-primaryColor dark:text-primaryColor_dark">
									Tojo Rtn
								</span>{" "}
								<br />A Full Stack Developer
							</h1>
						</div>

						<button className="btn" onClick={() => openModal?.()}>
							<BsTools className="text-whiteColor dark:text-whiteColor" />
							<span className="text-whiteColor dark:text-whiteColor text-base">
								Start Your Project
							</span>
						</button>
					</div>
				</div>

				{/* social media */}
				<div className="absolute bottom-10 left-1/2 -translate-x-2/4 flex items-center justify-center space-x-4 w-full sm:bottom-6">
					{socialMedaIcons.map(({ slug, Icon }) => (
						<a
							className="text-[1.1rem] bg-[#28292917] dark:bg-[#8991911c] hover:bg-[#0e78c826] dark:hover:bg-[#89919146] rounded-full p-3 dark:text-lightDarkColor_dark text-lightDarkColor"
							key={slug}
							href={slug}
							target="_blank"
							rel="noreferrer">
							{Icon}
						</a>
					))}
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
						blurDataURL="/favicon.ico"
					/>
					{/* blob mobile */}
					{/* <div
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[26rem] h-[26rem] bg-primaryColor"
						style={{
							borderRadius: "60% 40% 30% 60% / 55% 45% 60% 50%",
						}}
					/> */}
				</div>
			</div>
		</motion.section>
	);
};

export default Intro;
