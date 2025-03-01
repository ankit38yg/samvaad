import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full   border-x-gray-800 text-gray-300 ">
      <Search />
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(79vh)"  }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
