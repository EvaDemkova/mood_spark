import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Navbar from "../../components/navbar";
import NavbarLayout from "../../layouts/navbarLayout";

const NavbarRouter = () => {
	return (
		<Routes>
			<Route element={<NavbarLayout />}>
				<Route index element={<Home />} />
				{/* <Route index element={<Products />} />
        			<Route path=":id" element={<ProductDetail />} />
        			<Route path="new" element={<NewProduct />} /> */}
			</Route>
		</Routes>
	);
};

export default NavbarRouter;
