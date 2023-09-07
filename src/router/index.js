import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import NavbarRouter from "./navbarRouter";
import { HobbyContextProvider } from "../context/hobbyContext";

const Router = () => {
	return (
		<div>
			<Routes>
                <Route path="/error" element={<ErrorPage />} />
				<Route path="/*" element={<HobbyContextProvider><NavbarRouter /></HobbyContextProvider>} />
			</Routes>
		</div>
	);
};

export default Router;
