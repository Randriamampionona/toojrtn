import {
	About,
	Contact,
	Intro,
	Servicies,
	Skill,
	Work,
} from "../components/Home";

const Home = () => {
	return (
		<>
			<Intro />
			<Servicies />
			<About />
			<Skill />
			<Work />
			<Contact />
		</>
	);
};

export default Home;
