import React, { useContext } from "react";
import { HobbyContext } from "../../context/hobbyContext";

const Paragraph = ({ content, capitalize = true }) => {
	const { isHobbyGenerated } = useContext(HobbyContext);
	return (
		<p
			className={`text-left text-base sm:text-lg md:text-xl font-medium font-body text-zinc-800 transition-all delay-20000 ${
				capitalize && "capitalize"
			} 
			 
			`}>
			{content}
		</p>
	);
};

export default Paragraph;
