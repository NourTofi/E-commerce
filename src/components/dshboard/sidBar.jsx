import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const SidBar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-gray-800 text-white flex flex-col">
      <NavLink
        to={"users"}
        className={({ isActive }) =>
          `p-4 flex items-center hover:bg-gray-700 cursor-pointer ${
            isActive ? "text-blue-500" : ""
          }`
        }
      >
        <FontAwesomeIcon
          icon={faUsers}
          className="pr-4"
        />
        Users
      </NavLink>
    </div>
  );
};

export default SidBar;
