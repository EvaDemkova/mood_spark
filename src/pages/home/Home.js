// React and hooks imports
import React, { useContext } from "react";

// Contexts
import { HobbyContext } from "../../context/hobbyContext";

// Components

import HobbyResult from "../../components/hobbyResult/HobbyResult";

// Constants and options
import GenerateSearchBar from "../../components/generateSearchBar/GenerateSearchBar";

const Home = () => {
	const { isHobbyGenerated } = useContext(HobbyContext);

	return (
		<div className="flex-grow flex flex-col justify-center items-center ">
			<div
				className={`container transition-all m-6  bg-cyan-300 bg-opacity-20 backdrop-blur-xl rounded-lg drop-shadow-lg flex flex-col justify-center items-center
				 ${isHobbyGenerated ? `h-auto w-auto md:w-5/6 p-3 md:p-6 m-3 md:m-6 xl:w-2/3 xxl:w-1/2 p` : `h-auto w-auto lg:w-1/2`} `}>
				<GenerateSearchBar />
				<HobbyResult />
			</div>
		</div>
	);
};

export default Home;
