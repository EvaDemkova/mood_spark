import React from "react";

const Icon = (props) => {
    const { iconName  } = props;
	return (
		<img
			src={`/images/hobbyIcons/${iconName}.png`}
			alt={iconName}
			className="rounded-lg m-2 mr-6 w-7 sm:w-10 md:w-9"

		/>
	);
};

export default Icon;
