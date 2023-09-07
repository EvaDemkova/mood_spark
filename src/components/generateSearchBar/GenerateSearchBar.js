import React, { useContext, useState } from "react";
import { filterByOptions, selectOptions } from "../../options";
import Button from "../button/Button";
import Select from "../select/Select";
import { HobbyContext } from "../../context/hobbyContext";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const GenerateSearchBar = () => {
	const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
	const toggleAdvancedSearch = () => setIsAdvancedSearch(!isAdvancedSearch);
	const { setHobby, setIsLoading, setIsHobbyGenerated, isHobbyGenerated, isLoading } = useContext(HobbyContext);

	const [selectedFilter, setSelectedFilter] = useState(null);
	const [selectedOption, setSelectedOption] = useState(null);

	console.log(selectedFilter, selectedOption);

	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const fetchHobbyDescription = async (activity) => {
		const prompt = `Generate one description about hobby: ${activity}. `;
		return await openai.createCompletion({
			model: "text-davinci-003",
			prompt,
			temperature: 0.6,
		});
	};

	// TODO => need to add fetching with range slide values
	const generateRandomHobby = async () => {
		setIsLoading(true);
		const url = isAdvancedSearch
			? `${process.env.REACT_APP_API}?${selectedFilter}=${selectedOption}`
			: process.env.REACT_APP_API;

		try {
			const res = await axios.get(url);

			if (res.data.error) {
				throw new Error(res.data.error);
			}

			const hobbyDescription = await fetchHobbyDescription(res.data.activity);
			setHobby({
				...res.data,
				description: hobbyDescription.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, ""),
			});
			setIsLoading(false);
			setIsHobbyGenerated(true);
		} catch (err) {
			setIsLoading(false);
		}
	};

	const renderOptionsComponent = () => {
		if (selectedFilter) {
			return React.cloneElement(selectOptions[selectedFilter].component, {
				selected: selectedOption,
				setSelected: setSelectedOption,
				selectedFilter: selectedFilter,
			});
		}
	};

	console.log(isHobbyGenerated);

	return (
		<div className={`p-4 md-my-5 w-full lg:w-4/5 `}>
			<div className={`flex items-end ${isAdvancedSearch ? "justify-between" : "justify-center"}`}>
				<div className={`${isAdvancedSearch ? "flex items-end basis-3/4 mx-2" : "hidden"}`}>
					<div className={`flex flex-col basis-2/5`}>
						<Select
							options={filterByOptions}
							selected={selectedFilter}
							setSelected={setSelectedFilter}
							label={"Search by"}
						/>
					</div>
					<div className="ml-2 basis-1/2 ">{renderOptionsComponent()}</div>
				</div>
				<div className="w-auto ">
					<Button
						content={`${isAdvancedSearch ? "Search" : "Generate random hobby"}`}
						onClick={generateRandomHobby}
						isLoading={isLoading}
					/>
				</div>
			</div>
			<p
				onClick={(e) => toggleAdvancedSearch(e)}
				className={`text-center text-zinc-300 cursor-pointer hover:underline text-sm inline-block mt-1`}>
				{`${isAdvancedSearch ? "Back >>" : "Advanced hobby search >>"}`}
			</p>
		</div>
	);
};

export default GenerateSearchBar;
