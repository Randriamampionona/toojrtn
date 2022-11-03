import "../styles/globals.css";
import Layout from "./../components/layouts/Layout";
import { PortfolioProvider } from "../store/context/PortfolioContext";

const MyApp = ({ Component, pageProps }) => {
	return (
		<PortfolioProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PortfolioProvider>
	);
};

export default MyApp;
