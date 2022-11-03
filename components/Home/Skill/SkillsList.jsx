import Image from "next/image";

const SkillsList = ({ skillsList }) => {
	return (
		<div className="group relative flex items-center justify-between space-x-4 p-3 rounded shadow-md border border-[#2829292b] dark:bg-[#8991911c] cursor-default overflow-hidden">
			<Image
				src={skillsList.img}
				alt={skillsList.techno}
				width={55}
				height={55}
				objectFit="cover"
				placeholder="blur"
				blurDataURL="/favicon.ico"
			/>
			<div className="flex flex-grow justify-between items-center">
				<h1 className="text-xl">{skillsList.techno}</h1>
				<span className="">{skillsList.rate}</span>
			</div>

			<div
				className="opacity-0 group-hover:opacity-100 absolute bottom-0 -left-full group-hover:-left-4 h-[0.25rem] bg-primaryColor transition-all ease-in"
				style={{ width: `${skillsList.rate}` }}
			/>
		</div>
	);
};

export default SkillsList;
