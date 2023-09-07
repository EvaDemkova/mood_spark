import React from "react";
import Loader from "../loader/Loader";
const Button = ({ content, onClick, isLoading }) => {
	return (
		<button
			onClick={onClick}
			className={`${""} transition-all relative z-10 flex items-center justify-center font-bold bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded `}>
			{content}
			<Loader isLoading={isLoading} />
		</button>
	);
};

export default Button;
