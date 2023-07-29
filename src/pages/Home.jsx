// import React from 'react'

import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slidder from "../components/Slidder";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <Slidder/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home;
