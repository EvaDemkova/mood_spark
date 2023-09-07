import React, { useContext } from "react";
import { HobbyContext } from "../../context/hobbyContext";

const Heading = ({ content }) => {
	const { isHobbyGenerated } = useContext(HobbyContext);
	return (
		<h2 className={`text-left text-2xl sm:text-3xl xxl:text-4xl font-heading font-bold text-slate-950 mb-3`}>
			{content}
		</h2>
	);
};

export default Heading;
