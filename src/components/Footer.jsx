import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    const socialIcons= "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
      <div className='flex flex-1 flex-col flex-wrap p-2'>
        {/* Store Information */}
        <h1 className='text-[25px]'>Mcsharp</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate, praesentium, iusto perspiciatis doloremque in consectetur molestias impedit assumenda facere illum quidem saepe veritatis ex quis nihil excepturi nemo commodi nam nulla ullam fuga.
        </p>
        <div className='flex items-center justify-center mt-3 self-start'>
            {/* Social media */}
            <div className={socialIcons + ' bg-blue-700'}><Facebook/></div>
            <div className={socialIcons + ' bg-orange-500'}><Instagram/></div>
            <div className={socialIcons + " bg-sky-400"}><Twitter/></div>
            <div className={socialIcons+' bg-red-500'}><Pinterest/></div>
            <div className={socialIcons + ' bg-green-600'} ><WhatsApp/></div>
        </div>
      </div>
      <div className='flex flex-1 flex-col p-2'>
        {/* Contact Information */}
            <div className='flex m-3'><LocationOnOutlined/>
            <p className="pl-3">Kharar,Punjab</p>
            </div>
            <div className='flex m-3'><LocalPhoneOutlined/>
            <p className="pl-3">+91-8409617936</p>
            </div>
            <div className='flex m-3'><EmailOutlined/>
            <p className="pl-3">madhavxman@gmail.com</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
