import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const CategoryPage = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='flex flex-col p-5 '>
        <h1 className='text-[30px]'>Men's Cloth</h1>
        <div className='flex items-center justify-between mt-3'>
            <div className='flex mobile:flex-col'>
                <p className='text-center ml-3 text-[20px] '>Filter by</p>
                <select className='ml-3 border-2 border-silver bg-white'>
                    <option selected disabled>Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <select className='ml-3 border-2 border-silver bg-white mobile:mt-2'>
                    <option selected disabled >Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            <div className='flex'>
                <p>Sorted by</p>
                <select className='ml-3 border-2 border-silver bg-white'>
                    <option value="newest">Newest (first)</option>
                    <option value="oldest">Oldest (first)</option>
                    <option value="priceAsc">Price (Asc)</option>
                    <option value="priceDes">Price (Des)</option>
                </select>
            </div>
        </div>
      </div>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default CategoryPage
