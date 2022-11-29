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
				<title>toojrtn</title>
				<meta
					name="description"
					content="The good place to create your dream project"
				/>
				<link rel="icon" href="/assets/me-with-blob.png" />
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
