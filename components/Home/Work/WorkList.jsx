import Image from "next/image";
import { FiArrowRight, FiLink } from "react-icons/fi";

const WorkList = ({ work }) => {
	return (
		<div className="flex flex-col items-start justify-center gap-2 lg:flex-row lg:items-center lg:gap-8 lg:px-24">
			<Image
				src={work.img}
				alt={work.linkText}
				width={450}
				height={300}
				objectFit="cover"
				placeholder="blur"
				blurDataURL="/favicon.ico"
				className="rounded-md hover:opacity-80"
			/>

			<div className="w-full space-y-2 lg:space-y-8 lg:w-1/2">
				<div>
					<h2 className="flex items-center cursor-pointer hover:underline">
						{work.linkText} &nbsp;
						<FiLink />
					</h2>
					<p className="hidden lg:block">{work.desc}</p>
					<p className="block lg:hidden">
						{work.desc?.substring(0, 60)}...
					</p>
				</div>
				<div>
					<button className="btn">
						<span className="text-whiteColor dark:text-whiteColor">
							View Demo
						</span>
						<FiArrowRight className="text-whiteColor dark:text-whiteColor" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default WorkList;
