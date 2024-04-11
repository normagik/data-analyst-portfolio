import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-2 top-2 p-2 " onClick={onClick}>
      <FaBars className="text-2xl text-[#464DAF]" />;
    </button>
  );
}
export default MobileMenuButton;
