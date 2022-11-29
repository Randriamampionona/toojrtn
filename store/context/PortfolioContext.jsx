import { createContext, useContext, useReducer } from "react";
import { getCookie } from "cookies-next";
import { reducer } from "../reducers/reducer";
import { OPEN_MODAL, CLOSE_MODAL, TOOGLE_THEME } from "./../actions/actions";
import {
	RiFacebookFill,
	RiGithubFill,
	RiPaletteFill,
	RiServerFill,
	RiCodeFill,
} from "react-icons/ri";

const initState = {
	isModalOpen: false,
	isDark: true,
};

const initializer = () => {
	return {
		isModalOpen: false,
		isDark: getCookie("isDark") || false,
	};
};

const Context = createContext(initState);

export const PortfolioProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState, initializer);

	const openModal = () => {
		dispatch({
			type: OPEN_MODAL,
		});
	};

	const closeModal = () => {
		dispatch({
			type: CLOSE_MODAL,
		});
	};

	const toogleTheme = () => {
		dispatch({
			type: TOOGLE_THEME,
		});
	};

	const values = {
		isModalOpen: state.isModalOpen,

		openModal,

		closeModal,

		isDark: state.isDark,

		toogleTheme,

		navLinks: [
			{
				slug: "#services",
				text: "Services",
			},
			{
				slug: "#about",
				text: "About",
			},
			{
				slug: "#skills",
				text: "Skills",
			},
			{
				slug: "#works",
				text: "Works",
			},
			{
				slug: "#contact",
				text: "Contact",
			},
		],

		socialMedaIcons: [
			{
				slug: "https://facebook.com",
				Icon: <RiFacebookFill />,
				text: "facebook",
			},
			{
				slug: "https://github.com",
				Icon: <RiGithubFill />,
				text: "github",
			},
		],

		servicesData: [
			{
				id: 1,
				service: "UI/UX Design",
				Icon: <RiPaletteFill />,
			},
			{
				id: 2,
				service: "Back-End Dev",
				Icon: <RiServerFill />,
			},
			{
				id: 3,
				service: "Front-End Dev",
				Icon: <RiCodeFill />,
			},
		],

		skillsData: [
			{
				techno: "HTML",
				rate: "95%",
				img: "/assets/ico/HTML.png",
			},
			{
				techno: "CSS",
				rate: "90%",
				img: "/assets/ico/CSS.png",
			},
			{
				techno: "TAILWIND",
				rate: "78%",
				img: "/assets/ico/TAILWIND.png",
			},
			{
				techno: "JS",
				rate: "95%",
				img: "/assets/ico/JS.png",
			},
			{
				techno: "REACT",
				rate: "80%",
				img: "/assets/ico/REACT.png",
			},
			{
				techno: "NEXT",
				rate: "75%",
				img: "/assets/ico/NEXT.png",
			},
			{
				techno: "NODE",
				rate: "65%",
				img: "/assets/ico/NODE.png",
			},
			{
				techno: "MYSQL",
				rate: "86%",
				img: "/assets/ico/MYSQL.png",
			},
			{
				techno: "FIREBASE",
				rate: "45%",
				img: "/assets/ico/FIREBASE.png",
			},
		],
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const PortfolioContext = () => {
	return useContext(Context);
};
