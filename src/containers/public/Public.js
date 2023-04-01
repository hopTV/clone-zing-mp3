import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex flex-none overflow-y-auto">
      <div className="w-[240px] border border-blue-500">
        <SidebarLeft />
      </div>

      <div className="flex-auto">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none">
        <SidebarRight />
      </div>
    </div>
  );
};

export default Public;
