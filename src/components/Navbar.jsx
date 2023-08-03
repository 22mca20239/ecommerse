// import React from 'react'

import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]";
  return (
    <div className=" navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        {/* left div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all  mobile:p-[1px]">
            <input className="input outline-none mobile:w-[50px]" type="text" />
            <Search style={{ fontSize: "16px" }} />
          </div>
        </div>
        {/* Logo  */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">Mcsharp Cart</div>
        </div>
        {/* Right Div */}
        <div className=" right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center">
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
