import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar2 from "./components/Navbar2";
import Parent from "./components/Parent";
import Address from "./components/Address";
import Authentication from "./components/Authentication";
import ParentTable from "./components/ParentTable";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex bg-gray-200">
        <div className="h-6 ">
          <Sidebar />
        </div>
        <div className="bg-gray-200 pr-6 pl-6 pb-8 ">
          <Navbar2 />
          <div className="px-4 pt-4 pb-8 bg-gray-50 rounded-t-lg">
            <div className=" bg-white">
              <div className="flex justify-between ml-4 pl-5 pt-9">
                <div className="">
                  <div className="flex">
                    <Parent />
                  </div>
                  <hr className="h-px my-6 dark:bg-gray-700 border-y " />
                  <div className="flex justify-between mt-1">
                    <div className="">
                      <h3 className="font-bold mb-2">Permanent Address</h3>
                      <Address />
                    </div>
                    <div>
                      <h3 className="font-bold ">Postal Address</h3>
                    </div>
                  </div>
                </div>
                <div className="mr-7 ml-9 mt-5">
                  <Authentication />
                </div>
              </div>
              <div className="pt-5 pl-9 pb-16">
                <ParentTable />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 gap-5">
            <button className="py-1 px-3 rounded text-white bg-violet-800">
              Cancel
            </button>
            <button className="py-1 px-3 rounded text-white bg-blue-800">
              Edit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
