import React from "react";
import { SiHedera } from "react-icons/si";

function Plans() {
  return (
    <div className=" py-20 w-full bg-white ">
      <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6  text-center">
        <div className=" my-4 bg-slate-100 shadow-xl rounded-2xl hover:scale-105 duration-300 p-4 ">
          <SiHedera size={50} className=" mx-auto mt-[-2rem]" />
          <h2 className=" text-center py-2  text-xl font-bold font-serif">
            Hedera Stats
          </h2>
          <h1 className=" text-xl font-bold text-center py-4">$BTC</h1>
          <div>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum is{" "}
            </p>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum jhola khiskam
            </p>
            <button className=" bg-white shadow-xl mt-5 py-2 px-4 rounded-xl text-black focus:ring-2">
              Start Trial
            </button>
          </div>
        </div>
        <div className=" my-4 bg-slate-100  shadow-xl rounded-2xl hover:scale-105 duration-300 p-4">
          <SiHedera size={50} className=" mx-auto mt-[-2rem]" />
          <h2 className=" text-center py-2  text-xl font-bold font-serif">
            Hedera Stats
          </h2>
          <h1 className=" text-xl font-bold text-center py-4">$BTC</h1>
          <div>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum is{" "}
            </p>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum jhola khiskam
            </p>
            <button className=" bg-white shadow-xl mt-5 py-2 px-4 rounded-xl text-black focus:ring-2">
              Start Trial
            </button>
          </div>
        </div>
        <div className="my-4 bg-slate-100 shadow-xl rounded-2xl hover:scale-105 duration-300 p-4">
          <SiHedera size={50} className=" mx-auto mt-[-2rem]" />
          <h2 className=" text-center py-2  text-xl font-bold font-serif">
            Hedera Stats
          </h2>
          <h1 className=" text-xl font-bold text-center py-4">$BTC</h1>
          <div>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum is{" "}
            </p>
            <p className=" text-gray-600 border-b-2 border-gray-100 p-2">
              Lorem ipsum jhola khiskam
            </p>
            <button className=" bg-white shadow-xl mt-5 py-2 px-4 rounded-xl text-black focus:ring-2">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
