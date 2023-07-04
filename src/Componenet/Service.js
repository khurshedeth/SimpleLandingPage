import React from "react";

function Service() {
  return (
    <div className=" py-3 min-w-[1240px] mx-auto  md:grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <img
          src={require("../laptop.jpg")}
          className=" w-[300px]"
          alt="Error"
          />
      </div>
      <div className=" rounded-2xl col-span-1 flex flex-col justify-center gap-3 p-1">
        
          <h1 className=" text-xl text-green-400 font-semibold font-serif">Learn from Expert</h1>
          <p className=" text-gray-300 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distributio
          </p>
          <input
            type="text"
            placeholder="Enter email"
            className=" bg-black text-white p-3 px-4 rounded-xl w-32 "
          />
        
      </div>
    </div>
  );
}

export default Service;
