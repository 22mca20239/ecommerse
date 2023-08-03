// import React from 'react'

import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slidder from "../components/Slidder";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <Slidder/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home;
