import React from "react";
import Logo from "../assets/images/Logo.svg";
// import { sidebarMenu } from "";

const SidebarLeft = () => {
  return (
    <div>
      <div className="w-full h-[70px] py-4 px-[25px] flex justify-start items-center">
        <img src={Logo} alt="logo" className="w-[120px] h-10" />
      </div>
    </div>
  );
};

export default SidebarLeft;
