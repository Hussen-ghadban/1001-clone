'use client'

import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";

export default function Drop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("English");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[140px] rounded bg-transparent">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 mt-1 w-full flex items-center justify-between font-bold text-lg rounded-lg border-4 border-transparent hover:border-white active:border-green-700 duration-300 active:text-white"
      ><IoIosGlobe className="bg-transparent   text-2xl md:text-3xl pr-2"/>
        {selectedOption}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8 bg-transparent" />
        ) : (
          <AiOutlineCaretUp className="h-8 bg-transparent" />
        )}
      </button>
      {isOpen && (
        <div className="bg-transparent absolute top-20 flex flex-col items-start rounded-lg w-full">
          
          <h3
            onClick={() => handleOptionClick("Arabic")}
            className="cursor-pointer p-2 w-full hover:bg-hover-button rounded-t-lg bg-button border-b-2"
          >
            Arabic
          </h3>
          <h3
            onClick={() => handleOptionClick("English")}
            className="cursor-pointer p-2 w-full hover:bg-hover-button rounded-b-lg  bg-button"
          >
            

            English
          </h3>
        </div>
      )}
    </div>
  );
}
