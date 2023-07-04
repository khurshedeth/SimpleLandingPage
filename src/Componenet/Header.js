import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
const[toggle,setToggle]=useState(false);

  return (
    <div className=" bg-blue-500 p- mx-auto">
      <div className=" max-w-[1240px] py-4  mx-auto flex justify-between items-center md:px-2">
        <div className=" text-3xl font-serif font-semibold">J1ONM</div>
        {
            toggle?<AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-2xl text-white md:hidden block" />
            :
            <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-2xl text-white md:hidden block"/>
        }
        
        
        <ul className=" hidden  md:flex gap-6 font-serif font-semibold text-white ">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        
        <ul className={`md:hidden w-full h-screen text-white fixed duration-500  bg-black  top-[68px] ${toggle?"left-[0]":"left-[-100%]" }`
    } >
        <li className=" p-4">Home</li>
        <li className=" p-4">About</li>
        <li className=" p-4">Service</li>
        <li className=" p-4">Contact</li>
      </ul>
      
      </div>
    </div>
  );
}

export default Header;
