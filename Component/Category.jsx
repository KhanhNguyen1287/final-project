import React from 'react'

const Category = () => {
  return (
    <div>
        <div className='text-center m-5'>
            <p>CAREFULLY CREATED COLLECTIONS</p>
            <h1>BROWSE OUR CATEGORIES</h1>
        </div>
        <div className='flex gap-10'>
            <img src='src/Picture/product_1.png'/>
            <img src='src/Picture/product_2.png'/>
        </div>
        <div className='flex gap-10'>
            <img src='src/Picture/product_3.png'/>
            <img src='src/Picture/product_4.png'/>
            <img src='src/Picture/product_5.png'/>
        </div>
    </div>
  )
}

export default Category