import { Title } from "../../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import WorkList from "./WorkList";
import { motion } from "framer-motion";
import variants from "../motion";

const Work = ({ worksData }) => {
	return (
		<motion.section
			variants={variants.container}
			initial="initial"
			whileInView="whileInView"
			className="mySection">
			<Title id={"works"} text={"My Recent Works"} />

			<div className="myContainer flex items-center justify-center">
				<Swiper
					slidesPerView={1.2}
					spaceBetween={35}
					grabCursor={true}
					modules={[Navigation]}
					navigation={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 2.3,
						},
						1024: {
							slidesPerView: 1,
						},
					}}>
					{worksData.map((work) => (
						<SwiperSlide key={work.slug}>
							<WorkList work={work} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.section>
	);
};

Work.defaultProps = {
	worksData: [
		{
			slug: "https://alux.ltd",
			linkText: "Alux.ltd",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor explicabo odio ipsam minima possimus quasi quod quia! Temporibus totam rem beatae nam, suscipit iure omnis laudantium dicta saepe dolore.",
			img: "/assets/Screenshot (188).png",
		},
		{
			slug: "https://bandos.site",
			linkText: "Bandos.site",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor explicabo odio ipsam minima possimus quasi quod quia! Temporibus totam rem beatae nam, suscipit iure omnis laudantium dicta saepe dolore.",
			img: "/assets/Screenshot (232).png",
		},
		{
			slug: "https://crypto-road.net",
			linkText: "Crypto-road.net",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor explicabo odio ipsam minima possimus quasi quod quia! Temporibus totam rem beatae nam, suscipit iure omnis laudantium dicta saepe dolore.",
			img: "/assets/Screenshot (239).png",
		},
		{
			slug: "https://neftgame.org",
			linkText: "Neftgame.org",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor explicabo odio ipsam minima possimus quasi quod quia! Temporibus totam rem beatae nam, suscipit iure omnis laudantium dicta saepe dolore.",
			img: "/assets/Screenshot (281).png",
		},
		{
			slug: "https://junglejuice.con",
			linkText: "Junglejuice.con",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor explicabo odio ipsam minima possimus quasi quod quia! Temporibus totam rem beatae nam, suscipit iure omnis laudantium dicta saepe dolore.",
			img: "/assets/Screenshot (353).png",
		},
	],
};

export default Work;
