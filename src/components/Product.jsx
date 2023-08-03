import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react';

const Product = ({item}) => {

    const[hoverEffect,setHoverEffect]=useState('opacity-0')

    const handleMouseEnter =()=>{
        setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }

    const handleMouseLeave =()=>{
        setHoverEffect(' opacity-0')
    }

    const iconsStyle="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover: text-white hover:scale-[1.1] ease-in duration-100 ";
  return (
    <div className='flex items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={item.src} alt="product_image" />
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100`+ hoverEffect }>
        {/* icons */}
        <div className={iconsStyle}>
            <ShoppingCartOutlined/>
        </div>
        <div className={iconsStyle}>
            <FavoriteBorderOutlined/>
        </div>
        <div className={iconsStyle}>
            <SearchOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Product
