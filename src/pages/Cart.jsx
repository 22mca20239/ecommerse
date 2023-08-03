import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Counter from "../components/Counter";

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="m-2 ">
        <div className="flex justify-center text-5xl mobile:text-4xl">Cart</div>
        <div className="flex justify-between mt-4 mobile:flex-col mobile:m-2">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:ml-7 mobile:mt-3 mobile:mb-3">
            <p>Items in your cart : 3</p>
            <p className="ml-5">Wishlist item : 0</p>
          </div>

          <button className="btn">Checkout</button>
        </div>

        {/* central div */}
        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-1 flex-col ">
            {/* list of products div*/}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5">
                {/* Product desc */}
                <img
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 justify-between p-1">
                  <p>
                    <strong className="mr-2">ID : </strong>5423545
                  </p>
                  <p>
                    <strong className="mr-2">Product : </strong>Dizzy sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <strong className="mr-2">Color : </strong>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] "></div>
                  </p>
                  <p>
                    <strong className="mr-2">Size : </strong> lg
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto mobile:mt-3">
                {/* product quantity and price */}
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <strong>$70</strong>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/* 2nd item */}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5">
                {/* Product desc */}
                <img
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 justify-between p-1">
                  <p>
                    <strong className="mr-2">ID : </strong>5423545
                  </p>
                  <p>
                    <strong className="mr-2">Product : </strong>Black Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <strong className="mr-2">Color : </strong>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-black ml-1 w-[20px] h-[20px] "></div>
                  </p>
                  <p>
                    <strong className="mr-2">Size : </strong> lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-7 mobile:border-2 mobile:p-3">
                {/* product quantity and price */}
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <strong>$70</strong>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className=" flex-[0.4] w-auto h-[25vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center p-5">
            <h1 className="text-[2rem]">summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] ">
              <p>Shipping Discount</p>
              <p>-$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold ">
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
