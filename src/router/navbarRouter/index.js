import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import NavbarLayout from "../../layouts/navbarLayout";

const NavbarRouter = () => {
	return (
		<Routes>
			<Route element={<NavbarLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};

export default NavbarRouter;
