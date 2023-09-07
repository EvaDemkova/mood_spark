import React from "react";

const Anchor = ({ content }) => {
	return (
		<a href={content} className="text-left text-blue-500 hover:text-blue-700 visited:text-purple-600 active:text-green-600 break-all">
			{content}
		</a>
	);
};

export default Anchor;
