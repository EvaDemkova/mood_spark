import React from "react";
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
const NavbarLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default NavbarLayout;
