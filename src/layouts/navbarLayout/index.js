import React from "react";
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const NavbarLayout = () => {
	return (
		<div className=" h-screen w-full flex flex-col overflow-hidden">
			<div
				className="brightness-40  bg-center bg-no-repeat bg-cover h-full w-full fixed top-0 left-0 z-0"
				style={{ backgroundImage: "url(/images/hobbies.jpg)" }}></div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default NavbarLayout;
