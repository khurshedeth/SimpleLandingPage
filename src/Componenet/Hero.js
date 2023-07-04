import React from "react";

function Hero() {
  return (
    <div className=" bg-blue-500 w-full  py-[100px]">
      <div className=" max-w-[1240px] mx-auto text-center">
      <div className=" text-5xl font font-semibold capitalize text-white">Stay With us</div>
      <div className=" text-5xl font-semibold capitalize py-5 text-white ">we provide fuel to web3</div>
      <button className=" bg-black text-white p-3 px-4 rounded-xl hover:scale-110">Register</button>
      </div>
    </div>
  );
}

export default Hero;
