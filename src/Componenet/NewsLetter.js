import React from "react";

function NewsLetter() {
  return (
    <div className="py-4 w-full bg-blue-600">
      <div className="min-w-[1240px] mx-auto md:flex justify-between py-12">
        <div className="text-start px-4">
          <h1 className=" text-5xl text-white font-semibold capitalize">
            want to learn latest Vocab on Web3
          </h1>
          <p className=" font-light text-gray-300 mt-4">
            Singup our NewsLetter and stay up to date
          </p>
        </div>
        <div className=" text-start md:px-4">
          <input
            className="bg-black text-white p-3 md:px-4 rounded-lg mx-4"
            placeholder=" Enter Your email"
          />
          <span>
            <button className="bg-black text-white p-3  md:px-4 rounded-xl">
              Notify me
            </button>
          </span>
          <p className="font-light text-gray-300 px-4">
            we care the protection of your data
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
