import { FiSend } from "react-icons/fi";

const ContactForm = () => {
	return (
		<form className="w-full flex flex-col space-y-5">
			<div className="flex justify-between w-full">
				<div className="w-[48%] p-3 rounded border border-[#2829292b] bg-whiteColor focus-within:border-primaryColor focus-within:shadow-md">
					<input
						required
						type="text"
						name="firstName"
						placeholder="First name"
						className="outline-none border-0 w-full bg-transparent"
					/>
				</div>
				<div className="w-[48%] p-3 rounded border border-[#2829292b] bg-whiteColor focus-within:border-primaryColor focus-within:shadow-md">
					<input
						required
						type="text"
						name="lastName"
						placeholder="Last name"
						className="outline-none border-0 w-full bg-transparent"
					/>
				</div>
			</div>

			<div className="w-full p-3 rounded border border-[#2829292b] bg-whiteColor focus-within:border-primaryColor focus-within:shadow-md">
				<input
					required
					type="email"
					name="email"
					placeholder="Email address"
					className="outline-none border-0 w-full bg-transparent"
				/>
			</div>

			<textarea
				required
				name="message"
				placeholder="Project idea"
				className="w-full h-40 p-3 rounded bg-whiteColor border border-[#2829292b] outline-none resize-none overflow-y-auto focus-within:border-primaryColor focus-within:shadow-md"
			/>

			<button className="btn">
				<span className="text-whiteColor dark:text-whiteColor">
					Send
				</span>
				<FiSend className="text-whiteColor dark:text-whiteColor rotate-45" />
			</button>
		</form>
	);
};

export default ContactForm;
