import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

const ProductPage = () => {
    const colorStyle="w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]";
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="flex justify-center mb-5 mobile:flex-col mobile:mt-3 mobile:p-3">
        <div className="flex flex-1 items-center justify-center">
          {/* Image Section */}
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536"
            alt="Product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-start">
          <h1 className="title text-[40px] mobile:text-[30px] mobile:self-center">Creamy Hoody original</h1>
          <p className="pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            culpa, soluta autem, illo perspiciatis consectetur sit nulla
            quisquam quam natus deserunt blanditiis commodi excepturi nesciunt
            sapiente magnam quae, assumenda ducimus?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Fugiat, vero.
          </p>
          <p className="mt-7 text-3xl">
            Price : <strong>$70</strong>
          </p>
          {/* Color variants */}
          <div className="flex text-2xl mt-7 ">
            Colors
            <div className={`${colorStyle} bg-red-600 `}></div>
            <div className={`${colorStyle} bg-blue-600 `}></div>
            <div className={`${colorStyle} bg-yellow-400 `}></div>
            <div className={`${colorStyle} bg-green-600 `}></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
                <option selected disabled>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter/>
          </div>
          <button className="btn mt-5">Add to cart</button>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
