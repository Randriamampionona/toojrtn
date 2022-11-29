import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt1, HiPhone, HiSun, HiMoon } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { PortfolioContext } from "../../../store/context/PortfolioContext";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import variants from "./motion";
import Image from "next/image";

const Header = () => {
	const { navLinks, isDark, toogleTheme } = PortfolioContext();
	const [isDarkModeActive, setisDarkModeActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { push } = useRouter();

	useEffect(() => setisDarkModeActive(isDark), [isDark]);

	const toogleHandler = () => setIsOpen((prev) => !prev);

	const toogleThemeHandler = () => toogleTheme?.();

	return (
		<header className="z-50 sticky top-0 flex items-center w-full h-navbarHeight bg-bgColor dark:bg-bgColor_dark shadow-sm dark:shadow-md">
			<div className="myContainer flex items-center justify-between">
				<div className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:opacity-90">
					<Image
						src="/assets/me-with-blob.png"
						alt="toojrtn"
						layout="fill"
						objectFit="cover"
						placeholder="blur"
						blurDataURL="/assets/me-with-blob.png"
						onClick={(e) => push("/")}
					/>
				</div>

				<nav className="hidden md:block">
					<ul className="flex items-center space-x-10">
						{navLinks.map((link) => (
							<li
								key={link.slug}
								className="relative font-medium text-lightDarkColor navLinkAfter">
								<Link href={link.slug}>
									<a className="dark:text-lightDarkColor_dark dark:hover:text-primaryColor">
										{link.text}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="relative flex items-center space-x-2 md:hidden">
					<button className="btn" onClick={() => push("#contact")}>
						<HiPhone className="text-whiteColor dark:text-whiteColor" />
						<span className="text-whiteColor dark:text-whiteColor">
							Hire me
						</span>
					</button>
					<span
						className="cursor-pointer text-[2rem] active:text-lightDarkColor dark:text-whiteColor"
						onClick={toogleHandler}>
						{isOpen ? <FaTimes /> : <HiMenuAlt1 />}
					</span>

					<AnimatePresence exitBeforeEnter>
						{isOpen && (
							<motion.div
								variants={variants.dropDownMenu}
								initial="initial"
								animate="animate"
								exit="exit"
								className="absolute right-0 top-16 w-44 min-h-[15rem] bg-whiteColor dark:bg-lightDarkColor rounded shadow-md border border-[#2829292b] flex flex-col mobileMenuBefore">
								<ul className="flex flex-col items-center justify-evenly w-full flex-grow gap-y-2 py-4">
									{navLinks.map((link) => (
										<li
											key={link.slug}
											className="font-medium"
											onClick={toogleHandler}>
											<Link href={link.slug}>
												<a className="dark:text-whiteColor_dark dark:hover:text-primaryColor_dark">
													{link.text}
												</a>
											</Link>
										</li>
									))}
								</ul>

								{/* mobile dark mode */}
								<div className="border-t-[1px] border-[#2829292b] dark:border-[#ffffff1c] w-full flex items-center justify-around py-[5px] px-2">
									<div
										onClick={toogleThemeHandler}
										className={`relative flex items-center ${
											isDark
												? "justify-end"
												: "justify-start"
										} w-12 h-7 border border-[#2829292b] dark:border-[#ffffff60] rounded p-[2.5px]`}>
										<span className="flex items-center justify-center w-3/5 h-full rounded bg-red-500 dark:bg-green-500">
											<small className="text-white dark:text-white text-[0.6875rem] select-none">
												{isDark ? "ON" : "OFF"}
											</small>
										</span>
									</div>
									<p className="whitespace-nowrap ml-1">
										Dark Mode
									</p>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			<div
				className="absolute right-4 hidden p-[0.4rem] rounded-full bg-[#2a424209] dark:bg-[#8991911c] hover:bg-[#0e78c814] lg:block"
				onClick={toogleThemeHandler}>
				<span className="text-darkColor text-lg">
					{isDarkModeActive ? <HiMoon /> : <HiSun />}
				</span>
			</div>
		</header>
	);
};

export default Header;
