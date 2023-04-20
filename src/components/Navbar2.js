import React from "react";

const Navbar2 = () => {
  return (
    <div className="flex justify-between py-6 ">
      <div className="font-bold text-2xl">
        <h3>Parent Details</h3>
      </div>
      <div className="flex">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
</svg><h6>Dashboard</h6>
        <h6 className="text-gray-500 list-item ml-6">Parent Details</h6>
      </div>
    </div>
  );
};

export default Navbar2;
