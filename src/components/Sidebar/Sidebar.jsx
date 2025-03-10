import React from "react";
import { IoSearch } from "react-icons/io5";
import Avatar from "../ui/avatar";

const listChatUser = [
  { name: "dimas", message: "lorem ipsum" },
  { name: "diki", message: "lorem ipsum" },
  { name: "dika", message: "lorem ipsum" },
];

const Sidebar = () => {
  return (
    <div className="w-[25%] h-screen bg-[#402E7A] rounded-r-lg">
      <div className="px-4 my-5">
        <h1 className="text-white text-lg font-bold">Real-time Chat App</h1>

        {/* Search field */}
        <div className="my-5">
          <div className="relative">
            <input type="search" placeholder="Search Name" className="w-full bg-[#4C3BCF] text-white pl-9 pr-2.5 py-2 outline-none rounded-md" />
            <IoSearch className="absolute -translate-y-7 translate-x-2 text-xl" />
          </div>
        </div>
      </div>

      {/* List Chat User */}
      <div>
        {listChatUser.map((item, index) => (
          <div key={index}>
            <div className="px-4 py-2 mb-2 hover:bg-[#4B70F5]">
              <div className="flex items-center gap-2">
                {/* Profile picture */}
                <Avatar/>
                {/* Name and messages */}
                <div className="hidden sm:inline">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-white text-sm">{item.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
