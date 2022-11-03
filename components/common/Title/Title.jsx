const Title = ({ id, text }) => {
	return (
		<h1
			id={id}
			className="text-center text-primaryColor dark:text-primaryColor uppercase font-bold text-4xl mb-10 max-w-[80%]">
			{text}
		</h1>
	);
};

export default Title;
