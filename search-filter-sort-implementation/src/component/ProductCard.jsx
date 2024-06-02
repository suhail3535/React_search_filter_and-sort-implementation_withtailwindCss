import React, { useState } from 'react'

const ProductCard = ({ data,handleSeacrh }) => {

    return (
        <div>


            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-5 '>
                {data.map((ele) => {
                    return <div className=" z-0 shadow-md p-4 cursor-pointer hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105" key={ele.id}>
                        <div>
                            <img src={ele.image} alt="productimage" />
                        </div>
                        <div className='font-serif'>
                            <h1 className='text-xl'>
                                {ele.name}
                            </h1>
                            <div className='flex gap-2 font-bold'>
                                <h2><span>&#8377;</span>{ele.price}</h2>
                                <h2 className='bg-green-200 px-2'><span className='text-yellow-400 mr-2'>&#9733;</span>{ele.rating} star</h2>

                            </div>
                            <div className='flex mt-2 gap-5 font-xl'>
                                <p className="">brand-{ele.brand}</p>
                                <p className='bg-green-200 px-2'>{ele.category}</p>

                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default ProductCard
