import React from 'react'
import { ApiTopPropduct } from '../apiFolder/TopProductApi'
import Product from './Product'

function Products() {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
      {
        ApiTopPropduct.map((product,index)=>(
            <Product item={product} key={index}/>
        )
        )
      }
    </div>
  )
}
// 357*448
export default Products;
