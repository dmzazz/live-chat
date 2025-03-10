import React, { useState } from "react";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar/Sidebar";

const Index = () => {
  // const [name, setName] = useState();
  // const [inputName, setInputName] = useState();
  // const [changeComponent, setChangeComponent] = useState(false);

  // const handleSubmitName = (e) => {
  //   e.preventDefault();

  //   // Save name value
  //   setName(inputName);
  //   setInputName("");

  //   // Change component after input name
  //   setChangeComponent(true);
  // };
  return (
    <>
      {/* {changeComponent ? (
        <Messages name={name} />
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="max-w-md">
            <div className="p-5 rounded-lg shadow-xl">
              <h2>Name</h2>
              <form onSubmit={handleSubmitName}>
                <div className="flex flex-col">
                  <input type="text" placeholder="Input your name" className="border rounded mb-2 px-2 py-1" value={inputName} onChange={(e) => setInputName(e.target.value)} required />

                  <button className="border">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}

      <div className="flex">
        <Sidebar />
        <Messages />
      </div>
    </>
  );
};

export default Index;
