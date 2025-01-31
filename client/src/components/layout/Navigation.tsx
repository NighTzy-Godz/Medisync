import React, { useState } from "react";
import Navbar from "../ui/navbar";
import CustomSidebar from "../ui/custom_sidebar";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <React.Fragment>
      <Navbar onToggleSidebar={toggleSidebar} />
      <CustomSidebar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
    </React.Fragment>
  );
};

export default Navigation;
