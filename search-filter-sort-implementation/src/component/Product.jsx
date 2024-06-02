import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './Constant';
import ProductCard from './ProductCard';
import ShimmerHomePage from './ShimmerHomePage';
import Footer from './Fotter';

const Product = () => {
    const [allProduct, setAllProduct] = useState([]); // All products from the server
    const [filterProduct, setFilterProduct] = useState([]); // Filtered products based on search
    const [search, setSearch] = useState(''); // Search query
    const [activeFilter, setActiveFilter] = useState(''); // Active filter state
    const [loading, setLoading] = useState(true); // Loading state
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const pageSize = 8; // Items per page

    // <------------Fetch all products from the API---------------->
    const getData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setAllProduct(res.data);
            setFilterProduct(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    // <--------------Handle search functionality------------->
    const handleSearch = () => {
        if (!search) {
            alert('Enter a product name');
            return;
        }
        const filtered = allProduct.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterProduct(filtered);
        setActiveFilter('search');
        setCurrentPage(1); // Reset to first page
    };

    // <-------------Handle filter for top-rated products----------->
    const handleTopProduct = () => {
        const topRated = allProduct.filter(product => product.rating > 4);
        setFilterProduct(topRated);
        setActiveFilter('top');
        setCurrentPage(1); // Reset to first page
    };

    // <-----------Reset search and filters-------------->
    const handleReset = () => {
        setSearch('');
        setFilterProduct(allProduct);
        setActiveFilter('');
        setCurrentPage(1); // Reset to first page
    };

    //<-------------- Handle sorting from low to high price----------->
    const handleSortLowToHigh = () => {
        const sorted = [...filterProduct].sort((a, b) => a.price - b.price);
        setFilterProduct(sorted);
        setActiveFilter('lowToHigh');
        setCurrentPage(1); // Reset to first page
    };

    // <--------------Handle sorting from high to low price-------------->
    const handleSortHighToLow = () => {
        const sorted = [...filterProduct].sort((a, b) => b.price - a.price);
        setFilterProduct(sorted);
        setActiveFilter('highToLow');
        setCurrentPage(1); // Reset to first page
    };


    useEffect(() => {
        getData();
    }, []);
// <------- Calculate current page data----------->

    const indexOfLastProduct = currentPage * pageSize;
    const indexOfFirstProduct = indexOfLastProduct - pageSize;
    const currentProducts = filterProduct.slice(indexOfFirstProduct, indexOfLastProduct);

    //<----------- Change page----------------->
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //<------------- Calculate total number of pages--------------->
    const totalPages = Math.ceil(filterProduct.length / pageSize);

    return (
        <div>
            {/* // <--------top section filter and Search and filter section----------->  */}
            <div className='lg:mb-8 flex flex-wrap items-center shadow-md'>
                <div className='flex m-auto justify-between w-[80%] lg:w-[50%]'>
                    <input
                        className='lg:text-center w-[80%] border-2 h-8 lg:h-8 lg:w-[100%] m-auto rounded-md border-gray-400 lg:py-2'
                        type='text'
                        placeholder='Search Product'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className={`lg:hover:bg-gray-400 m-4 p-1 rounded-md text-white font-bold ${activeFilter === 'search' ? 'bg-gray-600' : 'bg-black'}`}
                    >
                        Search
                    </button>
                    <button
                        onClick={handleReset}
                        className='lg:hover:bg-gray-400 m-4 bg-black p-1 rounded-md text-white font-bold'
                    >
                        Reset
                    </button>
                </div>
                <div className='flex'>
                    <button
                        onClick={handleTopProduct}
                        className={`lg:hover:bg-gray-400 m-4 p-1 rounded-md text-white font-bold ${activeFilter === 'top' ? 'bg-gray-600' : 'bg-black'}`}
                    >
                        ⭐ Top Rated Product
                    </button>
                    <button
                        onClick={handleSortLowToHigh}
                        className={`lg:hover:bg-gray-400 m-4 p-1 rounded-md text-white font-bold ${activeFilter === 'lowToHigh' ? 'bg-gray-600' : 'bg-black'}`}
                    >
                        Low to High
                    </button>
                    <button
                        onClick={handleSortHighToLow}
                        className={`lg:hover:bg-gray-400 m-4 p-1 rounded-md text-white font-bold ${activeFilter === 'highToLow' ? 'bg-gray-600' : 'bg-black'}`}
                    >
                        High to Low
                    </button>
                </div>
            </div>
            {/* {<----------Render products or loading state --------->} * */}
            {loading ? (
                <ShimmerHomePage />
            ) : currentProducts.length > 0 ? (
                <ProductCard data={currentProducts} />
            ) : (
                <div className='text-center mt-4 text-red-500 font-bold text-2xl'>
                    No data found, try a different product.
                </div>
            )}
        {/* <---------------Pagination section dynamic------------> */}
            <div className='flex justify-center m-10'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Product;
