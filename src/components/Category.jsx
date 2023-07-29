const Category=({item})=> {
    return (
      <div className="flex-1 m-3 shadow-lg rounded-md overflow-hidden relative">
        <img src={item.src} alt="Category_image" className="w-[100%]"/>
        <div className="flex absolute w-[100%] h-[100%] top-0 left-0 items-center justify-center flex-col">
          <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
        <button className="btn">See More</button>
        </div>
      </div>
    );
  }
  
  export default Category;
  