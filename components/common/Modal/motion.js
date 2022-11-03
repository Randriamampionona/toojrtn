const variants = {
	container: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.5,
			},
		},
		exit: {
			opacity: 0,
		},
	},

	modal: {
		initial: {
			y: "-100vh",
		},
		animate: {
			y: 0,
		},
		exit: {
			y: "-100vh",
		},
	},
};

export default variants;
