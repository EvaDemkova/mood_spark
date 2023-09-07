//Generate context for hobby

import { createContext, useState } from "react";

// continue creating context
const HobbyContext = createContext();
// next
const HobbyContextProvider = (props) => {
	//define use state
	const [hobby, setHobby] = useState({});
	const [isHobbyGenerated, setIsHobbyGenerated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// return context provider
	return (
		<HobbyContext.Provider
			value={{ hobby, setHobby, isHobbyGenerated, setIsHobbyGenerated, isLoading, setIsLoading }}>
			{props.children}
		</HobbyContext.Provider>
	);
};

export { HobbyContext, HobbyContextProvider };
