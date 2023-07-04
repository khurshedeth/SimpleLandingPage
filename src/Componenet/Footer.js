import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" w-full py-10 bg-blue-600">
      <div className=" max-w-[1240px] mx-auto  md:grid grid-cols-5 gap-6 text-white">
        <div className=" h-[300px]  text-white col-span-2 p-5">
          <h1 className=" text-4xl font-semibold font-serif animate-pulse text-black">
            J10NM
          </h1>
          <p className=" py-4 text-slate-300 font-serif text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
            using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>

          <div className=" w-9/12 flex justify-between py-6">
            <a href="/">
              <FaFacebookSquare size={30}/>
            </a>
            <a href="/">
              <FaInstagram size={30}/>
            </a>
            <a href="/">
              <FaTwitter size={30} />
            </a>
            <a href="/">
              <FaGithub size={30}/>
            </a>
          </div>
        </div>

        <div className=" py-6 font-serif flex flex-col gap-4">
        <h1 className=" text-2xl ">Solution</h1>
        <p>Analytics</p>
        <p>Marketing</p>
        <p>Commerce</p>
        <p>Insights</p>
        
        </div>
        <div className="py-6 font-serif flex flex-col gap-4">
        <h1 className=" text-2xl ">Solution</h1>
        <p>Analytics</p>
        <p>Marketing</p>
        <p>Commerce</p>
        <p>Insights</p>
        </div>
        <div className=" py-6 font-serif flex flex-col gap-4">
        <h1 className=" text-2xl ">Solution</h1>
        <p>Analytics</p>
        <p>Marketing</p>
        <p>Commerce</p>
        <p>Insights</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
