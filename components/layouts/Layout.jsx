import Head from "next/head";
import { PortfolioContext } from "../../store/context/PortfolioContext";
import { Footer, Header, Modal, ScrollToTop } from "../common";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
	const { isModalOpen, isDark } = PortfolioContext();
	const [isDarkModeActive, setIsDarkModeActive] = useState(false);

	useEffect(() => setIsDarkModeActive(isDark), [isDark]);

	return (
		<>
			<Head>
				<title>WTF is that Guy</title>
				<meta
					name="description"
					content="Who The Fuck Is That Guy, ToohRtn Portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={isDarkModeActive ? "dark" : ""}>
				<AnimatePresence exitBeforeEnter>
					{isModalOpen && <Modal />}
				</AnimatePresence>

				<ScrollToTop />

				<Header />

				{children}

				<Footer />
			</main>
		</>
	);
};

export default Layout;
