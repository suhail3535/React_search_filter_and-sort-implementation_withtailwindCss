import React, { useEffect, useState } from 'react'
import axios from "axios"
import { url } from "./Constant"
import ProductCard from './ProductCard';
console.log(url);

const Product = () => {
    const [allproduct, setAllproduct] = useState([]) ///use for localstate
    const [filterproduct, setFilterproduct] = useState([]) ///use for when apply search then it will updated and search again in all data not only inside recent search data
    const [search, setSearch] = useState("") ///create for search product and update state when user type in search box
    const [activeFilter, setActiveFilter] = useState("") /// create for active filter state

    // <--------------------for Search product------------------->
    const handleSearch = () => {
        if (search === "") {
            alert("enter  product name")
            return
        }
        let filterSearch = allproduct.filter((ele) => {
            return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        setFilterproduct(filterSearch)
        setActiveFilter("search")
    }

    const handleTopProduct = () => {
        let filterProduct = allproduct.filter((ele) => {
            return ele.rating > 4
        })
        setFilterproduct(filterProduct)
        setActiveFilter("top")
    }

    // <--------------------for Fetch all product for api------------------->
    const getData = async () => {
        try {
            let res = await axios.get(url)
            console.log(res.data);
            setAllproduct(res.data)
            setFilterproduct(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    // <---------------for reset search------------->
    const handleReset = () => {
        setSearch("")
        setFilterproduct(allproduct)
        setActiveFilter("")
    }

    // <---------------for sorting Low to High------------->
    const handleSortLowToHigh = () => {
        let sortedProducts = [...filterproduct].sort((a, b) => a.price - b.price)
        setFilterproduct(sortedProducts)
        setActiveFilter("lowToHigh")
    }

    // <---------------for sorting High to Low------------->
    const handleSortHighToLow = () => {
        let sortedProducts = [...filterproduct].sort((a, b) => b.price - a.price)
        setFilterproduct(sortedProducts)
        setActiveFilter("highToLow")
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {/* <--------------Search and filter section UI part--------> */}
            <div className='lg:mb-8 flex flex-wrap items-center shadow-md'>
                <div className='flex m-auto justify-between w-[80%] lg:w-[50%]'>
                    <input
                        className='w-[80%] border-2 h-10 lg:h-10 lg:w-[100%] m-auto rounded-xl border-gray-400 lg:py-2'
                        type="text"
                        placeholder='Search Product'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch} className={`lg:hover:bg-gray-400 m-4 p-2 rounded-xl text-white font-bold ${activeFilter === "search" ? 'bg-gray-600' : 'bg-black'}`}>
                        Search
                    </button>
                    <button onClick={handleReset} className='lg:hover:bg-gray-400 m-4 bg-black p-2 rounded-xl text-white font-bold'>
                        Reset
                    </button>
                </div>
                <div className='flex'>
                    <button onClick={handleTopProduct} className={`  lg:hover:bg-gray-400 m-4 p-2 rounded-xl text-white font-bold ${activeFilter === "top" ? 'bg-gray-600' : 'bg-black'}`}>⭐ Top Rated Product</button>
                    <button onClick={handleSortLowToHigh} className={` lg:hover:bg-gray-400 m-4 p-2 rounded-xl text-white font-bold ${activeFilter === "lowToHigh" ? 'bg-gray-600' : 'bg-black'}`}>Low to High</button>
                    <button onClick={handleSortHighToLow} className={` lg:hover:bg-gray-400 m-4 p-2 rounded-xl text-white font-bold ${activeFilter === "highToLow" ? 'bg-gray-600' : 'bg-black'}`}>High to Low</button>
                </div>
            </div>
            {/* <-----------Render product based on data-----------> */}
            {filterproduct.length > 0 ? (
                <ProductCard data={filterproduct} />
            ) : (
                <div className="text-center mt-4 text-red-500 font-bold text-2xl">
                    No data found, try a different product.
                </div>
            )}
        </div>
    )
}

export default Product
