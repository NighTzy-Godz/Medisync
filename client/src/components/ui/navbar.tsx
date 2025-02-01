import { Link } from "react-router-dom";
import { buttonVariants } from "./button";
import { GiHamburgerMenu } from "react-icons/gi";

import default_navlinks from "@/data/default_navlinks";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
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
    <nav className="py-3.5 md:py-6 lg:py-8 bg-gray-200/80 w-full relative">
      <div className="container mx-auto">
        <div className="md:hidden absolute top-5">
          <GiHamburgerMenu
            className="text-blue-600 text-2xl"
            onClick={onToggleSidebar}
          />
        </div>
        <div className="flex md:justify-between justify-center items-center">
          <Link to="/" className="text-4xl text-blue-600 font-sf_bold">
            MediSync
          </Link>

          <div className="hidden gap-5 md:flex">{renderDefaultNavLinks}</div>

          <div className="gap-2 md:flex hidden">
            <Link
              to="/register"
              className={`${buttonVariants({
                variant: "outline",
              })}  !text-base`}
            >
              Register
            </Link>
            <Link
              className={`${buttonVariants({ variant: "main" })} !text-base`}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
    </nav>
  );
};

export default Navbar;
