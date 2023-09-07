import React, { useContext } from "react";
import Icon from "../icon/Icon";
import { HobbyContext } from "../../context/hobbyContext";
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";
import Anchor from "../anchor/Anchor";
import { accessibilityValue, priceValue } from "../../options";

const IconParagrapghLayout = (props) => {
	const { iconName, content, condition = true } = props;
	return (
		<div className="flex items-center w-full">
			{condition && (
				<>
					<Icon iconName={iconName} />
					{iconName === "link" ? <Anchor content={content} /> : <Paragraph content={content} />}
				</>
			)}
		</div>
	);
};

const HeartIcon = () => {
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
		/>
	</svg>;
};

const HobbyResult = () => {
	const { isHobbyGenerated, hobby } = useContext(HobbyContext);

	return (
		<div
			className={`container transition-all
            ease-in-out delay-200 duration-300 rounded-lg bg-neutral-100 flex flex-wrap p-0 h-0 w-0 
			${isHobbyGenerated && `h-auto md:h-3/4 w-auto lg:w-4/5 m-4 p-4`}  `}>
			<div
				className={`container w-auto h-auto md:w-1/2 p-0 md:p-3 flex flex-col flex-wrap p-3 mb-4 md:md-0 ${
					isHobbyGenerated ? "opacity-100" : "opacity-0"
				} transition-all delay-500 duration-400`}>
				<Heading content={hobby.activity} />
				<Paragraph
					content={
						hobby.description ||
						"The curious cat tiptoed through the garden, pausing to investigate every rustling leaf."
					}
					capitalize={false}
				/>
			</div>

			<div
				className={`container w-auto h-auto md:w-1/2 p-0 md:p-3 flex flex-col flex-wrap p-3 mb-4 md:md-0 ${
					isHobbyGenerated ? "opacity-100" : "opacity-0"
				} transition-all delay-500 duration-400`}>
				<IconParagrapghLayout iconName={hobby?.type} content={hobby?.type} />
				<IconParagrapghLayout
					iconName={hobby?.participants > 1 ? "participants" : "participant"}
					content={hobby?.participants}
				/>
				<IconParagrapghLayout iconName={"price"} content={priceValue(hobby?.price) || "Free"} />
				<IconParagrapghLayout iconName={"accessibility"} content={accessibilityValue(hobby?.accessibility)} />

				<IconParagrapghLayout iconName={"link"} content={hobby?.link} condition={hobby.link} />
			</div>
		</div>
	);
};

export default HobbyResult;
