import { Title } from "../../common";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import variants from "../motion";

const Contact = ({ contactInfos }) => {
	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="mySection">
			<Title id={"contact"} text={"Get In touch"} />

			<div className="myContainer flex flex-col-reverse items-center justify-center gap-16 lg:flex-row lg:items-start lg:px-24">
				<div className="w-full space-y-4 border-l-2 border-primaryColor pl-4 lg:w-1/2">
					{contactInfos.map((info) => (
						<div
							key={info.id}
							className="flex items-start justify-start space-x-4">
							<h1 className="mt-[0.35rem]">{info.Icon}</h1>
							<div>
								<h1 className="text-base">{info.text}</h1>
								<p>{info.detail}</p>
							</div>
						</div>
					))}
				</div>

				<div className="w-full lg:w-1/2">
					<ContactForm />
				</div>
			</div>
		</motion.section>
	);
};

Contact.defaultProps = {
	contactInfos: [
		{
			id: 1,
			text: "Call Me",
			detail: "+261 34 69 899 51",
			Icon: <HiPhone />,
		},
		{
			id: 2,
			text: "Email",
			detail: "tojorandria474@gmail.com",
			Icon: <HiOutlineMail />,
		},
		{
			id: 3,
			text: "Location",
			detail: "GV 39 Bis Soamanandrariny",
			Icon: <HiLocationMarker />,
		},
	],
};

export default Contact;
