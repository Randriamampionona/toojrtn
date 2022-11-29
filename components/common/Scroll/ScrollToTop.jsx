import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import variants from "./motion";
import { useRouter } from "next/router";

const ScrollToTop = () => {
	const { push } = useRouter();
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (typeof window === undefined) return;

		window.addEventListener("scroll", (e) => {
			window.scrollY > 100 ? setShow(true) : setShow(false);
		});
	}, []);

	const scrollHandler = () => {
		document &&
			document.body.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});

		push("/");
	};

	return (
		<AnimatePresence exitBeforeEnter>
			{show && (
				<motion.div
					variants={variants.scrol}
					initial="initial"
					animate="animate"
					exit="exit"
					className="z-50 fixed bottom-8 right-8 w-8 h-8 bg-darkColor dark:bg-[#353636] dark:hover:bg-[#404141] rounded-sm shadow-md hover:bg-lightDarkColor dark:hover:bg-[#89919131] flex items-center justify-center"
					onClick={scrollHandler}>
					<FiChevronUp className="text-whiteColor" />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
