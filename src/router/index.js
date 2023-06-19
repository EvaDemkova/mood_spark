import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import NavbarRouter from "./navbarRouter";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<NavbarRouter />} />
                <Route path="/error" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default Router;
