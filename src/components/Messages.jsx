import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import Avatar from "./ui/avatar";

const Messages = ({ name }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tambahkan pesan baru ke dalam array messages
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="relative w-full max-h-screen">
      {/* Heading */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar />
          <h2 className="text-2xl font-semibold">Dimas</h2>
        </div>
      </div>

      <hr className="text-gray-300 mb-4"/>

      <div className="max-h-145 flex flex-col px-4">
        {/* Show Messages */}
        <h2 className="font-bold">{name}</h2>
        <div className="bg-white flex flex-col space-y-2 p-2 overflow-auto no-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg ${index % 2 === 0 ? "bg-blue-200 self-start" : "bg-green-200 self-end"}`}>
              {msg}
            </div>
          ))}
        </div>

        {/* Send Messages */}
        <div className="absolute bottom-4 left-4 right-4">
          <form onSubmit={handleSubmit} className="bg-white flex z-50">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border border-gray-300 rounded-l-lg p-2 flex-grow" placeholder="Type your message..." />
            <button type="submit" className="bg-blue-500 text-white rounded-r-lg p-2">
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
