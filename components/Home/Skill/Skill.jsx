import { Title } from "../../common";
import SkillsList from "./SkillsList";
import { motion } from "framer-motion";
import variants from "../motion";
import { PortfolioContext } from "../../../store/context/PortfolioContext";

const Skill = () => {
	const { skillsData } = PortfolioContext();

	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="mySection">
			<Title id={"skills"} text={"Skills"} />

			<div className="myContainer flex flex-col items-center justify-start gap-8">
				<div className="w-full flex flex-col items-center">
					<h2 className="text-center">Profesional Skills</h2>
					<p className="text-center sm:max-w-3xl">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repudiandae dolor quos distinctio inventore id.
						Odit quas vel culpa neque, assumenda, dicta deleniti
						porro iusto accusamus recusandae cum. Cumque, deserunt
						sapiente.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-2 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{skillsData.map((skillsList) => (
						<SkillsList
							key={skillsList.techno}
							skillsList={skillsList}
						/>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Skill;
