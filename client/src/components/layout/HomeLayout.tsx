import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import Navigation from "./Navigation";
const HomeLayout = () => {
  return (
    <div className="">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
