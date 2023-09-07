import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Home from "./Home";
import { HobbyContext } from "../../context/hobbyContext";

// Mocking axios to avoid actual HTTP requests
jest.mock("axios");

describe("Home component", () => {
	const mockSetHobby = jest.fn();
	const mockSetIsLoading = jest.fn();
	const mockSetIsHobbyGenerated = jest.fn();

	// Providing mock values for HobbyContext
	const contextValues = {
		setHobby: mockSetHobby,
		setIsLoading: mockSetIsLoading,
		setIsHobbyGenerated: mockSetIsHobbyGenerated,
		isHobbyGenerated: false,
		isLoading: false,
		hobby: {},
	};

	it("renders without crashing", () => {
		render(
			<HobbyContext.Provider value={contextValues}>
				<Home />
			</HobbyContext.Provider>
		);
	});

	it("toggles advanced search", async () => {
		const { getByText } = render(
			<HobbyContext.Provider value={contextValues}>
				<Home />
			</HobbyContext.Provider>
		);

		const toggleSearchButton = getByText(/Advanced hobby search >>/i);
		fireEvent.click(toggleSearchButton);

		await waitFor(() => {
			expect(getByText(/Back >>/i)).toBeInTheDocument();
		});
	});

	it("generates a random hobby on button click", async () => {
		axios.get.mockResolvedValue({ data: {} });

		const { getByText } = render(
			<HobbyContext.Provider value={contextValues}>
				<Home />
			</HobbyContext.Provider>
		);

		const generateButton = getByText(/Generate random hobby/i);
		fireEvent.click(generateButton);


		await waitFor(() => {
			expect(mockSetIsLoading).toHaveBeenCalledWith(true);
		});

       
	});

	// ... you can add more tests as needed
});
