import { Send } from "@mui/icons-material";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]">
      <h1 className="text-[50px] font-bold">NewsLetter</h1>
      <h2 className="text-[20px] mt-2 mobile:text-center text-[#8a4af3]">Always in touch with us,for your favorite products</h2>
      <div className="flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[22rem]">
        <input  className="border-none pl-[20px] flex-[7] outline-none"
        type="email" placeholder="enter your email" />
        <button className="bg-[#4caf50] flex-1 text-white h-[100%]">
            <Send/>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
