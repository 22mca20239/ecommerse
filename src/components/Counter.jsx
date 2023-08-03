import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count > -1) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const handlePrev = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className='ml-5 shadow-md flex'>
            <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md' onClick={handlePrev}>-</div>
            <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>{count}</div>
            <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md' onClick={handleNext}>+</div>
        </div>
      </div>
    </div>
  )
}

export default Counter
