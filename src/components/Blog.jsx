import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { articles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ArticleCard = ({ index, name, description, image, link }) => {
	ArticleCard.propTypes = {
		index: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
	};

	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			onClick={() => window.open(link, "_blank")}
			className="hover:cursor-pointer"
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Blog = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Blog</p>
				<h2 className={styles.sectionHeadText}>Check out these articles</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Here are some articles that are present on the internet on various
					topics about cyber security. Click on cards to read more.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7">
				{articles.map((article, index) => (
					<ArticleCard key={`project-${index}`} index={index} {...article} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Blog, "blog");
