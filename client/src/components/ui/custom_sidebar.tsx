import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { buttonVariants } from "./button";
import default_navlinks from "@/data/default_navlinks";

interface CustomSidebar {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const CustomSidebar = ({ isSidebarOpen, onToggleSidebar }: CustomSidebar) => {
  const renderDefaultNavLinks = default_navlinks.map((navlink) => (
    <Link
      className="lg:text-lg text-zinc-800 font-sf_reg hover:text-blue-600 transition-all"
      to={navlink.path}
      onClick={onToggleSidebar}
    >
      {navlink.name}
    </Link>
  ));

  return (
    <div
      className={`fixed top-0 left-0 h-full sm:w-2/5 w-3/5 bg-gray-100 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="absolute    top-4 right-5">
        <IoClose className="text-2xl text-blue-600" onClick={onToggleSidebar} />
      </div>
      <div className="flex flex-col justify-between h-full gap-2 p-4">
        <div className="flex flex-col gap-2">{renderDefaultNavLinks}</div>
        <div className="flex flex-col gap-2">
          {" "}
          <Link
            to="/register"
            className={`${buttonVariants({ variant: "outline" })}  text-sm`}
            onClick={onToggleSidebar}
          >
            Register
          </Link>
          <Link
            className={`${buttonVariants({ variant: "main" })} text-sm`}
            to="/login"
            onClick={onToggleSidebar}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
