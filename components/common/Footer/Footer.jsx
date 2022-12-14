import Link from "next/link";
import { PortfolioContext } from "../../../store/context/PortfolioContext";

const Footer = () => {
	const { navLinks, socialMedaIcons } = PortfolioContext();

	return (
		<footer className="relative w-full min-h-[50vh] mySection bg-[#0c0c0c] dark:bg-[#303030]">
			<div className="myContainer flex items-center justify-center flex-col space-y-16 lg:flex-row lg:items-start lg:space-y-0">
				<div className="lg:w-1/3">
					<Link href="/" passHref>
						<h1 className="cursor-pointer text-center text-whiteColor text-5xl mb-6 uppercase lg:text-left">
							Tojo
						</h1>
					</Link>
					<p className="hidden lg:block lg:text-left">
						Full Stack Developer
					</p>
				</div>

				<div className="lg:w-1/3">
					<ul className="flex items-center flex-col space-y-5">
						{navLinks.map((link) => (
							<li
								key={link.slug}
								className="relative font-medium navLinkAfter">
								<Link href={link.slug}>
									<a className="text-whiteColor">
										{link.text}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* social media */}
				<div className="flex items-center justify-center space-x-4 w-full lg:lg:w-1/3">
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

			<small className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
				&copy; 2022. All rights reserved
			</small>
		</footer>
	);
};

export default Footer;
