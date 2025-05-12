import React, { useEffect, useState } from "react";

const Weeklydeals = () => {

    return (
        <>
            <div className="leave bg-[#fff8ef] text-gray-800 font-sans">
                {/* <!-- Weekly Deals Header --> */}
                <section className="max-w-7xl mx-auto px-6 py-12 relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div className="mb-6 md:mb-0">
                            <h1 className="text-4xl font-bold mb-3">Weekly Deals</h1>
                            <p className="text-gray-600 max-w-md">
                                Starts with a more direct, declarative statement about the return of the weekly deals, creating a sense of
                                excitement and anticipation.
                            </p>

                            {/* <!-- Countdown --> */}
                            <div className="flex gap-4 mt-6" id="countdown">
                                <div className="bg-white shadow rounded p-4 text-center">
                                    <div className="text-xl font-bold" id="days">0</div>
                                    <div className="text-sm text-gray-500">Days</div>
                                </div>
                                <div className="bg-white shadow rounded p-4 text-center">
                                    <div className="text-xl font-bold" id="hours">0</div>
                                    <div className="text-sm text-gray-500">Hours</div>
                                </div>
                                <div className="bg-white shadow rounded p-4 text-center">
                                    <div className="text-xl font-bold" id="minutes">0</div>
                                    <div className="text-sm text-gray-500">Mins</div>
                                </div>
                                <div className="bg-white shadow rounded p-4 text-center">
                                    <div className="text-xl font-bold" id="seconds">0</div>
                                    <div className="text-sm text-gray-500">Secs</div>
                                </div>
                            </div>

                            <button className="mt-6 bg-[#ecdec1] text-[#1c1c1c] hover:bg-[#b6713e]  hover:text-[#ffffff] font-semibold py-4 px-8 rounded">
                                Shop The Collection →
                            </button>
                        </div>

                        {/* <!-- Scrollable Product Cards --> */}
                        <div className="w-full md:w-3/4 overflow-hidden">
                            <div className="scroll-container flex space-x-6 overflow-x-auto no-scrollbar py-4 " id="product-scroll">
                                {/* <!-- Example Product Cards --> */}
                                <div className="bg-white p-4 rounded-lg shadow w-64 flex-shrink-0 group relative hover:shadow-xl">
                                    {/* <!-- Discount Badge --> */}
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-13%</div>

                                    {/* <!-- Product Images (Hover Swap) --> */}
                                    <div className="relative w-full h-[325px] flex items-center justify-center">
                                        <img src="/assets/image/Rectangle_1.webp" className="transition-opacity duration-300 group-hover:opacity-0 absolute z-10" />
                                        <img src="/assets/image/product(1).webp" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />
                                    </div>

                                    {/* <!-- Icons on Hover --> */}
                                    <div className="absolute bottom-[8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3 z-40">

                                        {/* <!-- Wishlist Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300 ">
                                                Add to Wishlist
                                            </div>
                                        </div>

                                        {/* <!-- Quick View Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300">
                                                Quick View
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- Product Info --> */}
                                    <h3 className="mt-4 font-medium text-center">Luscious Lip Lacquer</h3>
                                    <div className="text-center text-sm mt-1">
                                        <span className="text-black font-bold">$25.00</span>
                                        <span className="line-through text-gray-400 text-xs ml-1">$29.00</span>
                                    </div>
                                    <button className="mt-4 w-full h-[50px] bg-[#f5f5f5] text-[10px] text-[#1c1c1c] py-2 rounded hover:bg-[#b6713e] hover:text-[#ffffff]">QUICK ADD</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow w-64 flex-shrink-0 group relative hover:shadow-xl">
                                    {/* <!-- Product Images (Hover Swap) --> */}
                                    <div className="relative w-full h-[325px] flex items-center justify-center">
                                        <img src="/assets/image/Rectangle_1.webp" className="transition-opacity duration-300 group-hover:opacity-0 absolute z-10" />
                                        <img src="/assets/image/product(1).webp" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />
                                    </div>

                                    {/* <!-- Icons on Hover --> */}
                                    <div className="absolute bottom-[8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3 z-40">

                                        {/* <!-- Wishlist Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300 ">
                                                Add to Wishlist
                                            </div>
                                        </div>

                                        {/* <!-- Quick View Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300">
                                                Quick View
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- Product Info --> */}
                                    <h3 className="mt-4 font-medium text-center">Luscious Lip Lacquer</h3>
                                    <div className="text-center text-sm mt-1">
                                        <span className="text-black font-bold">$25.00</span>
                                        <span className="line-through text-gray-400 text-xs ml-1">$29.00</span>
                                    </div>
                                    <button className="mt-4 w-full h-[50px] bg-[#f5f5f5] text-[10px] text-[#1c1c1c] py-2 rounded hover:bg-[#b6713e] hover:text-[#ffffff]">QUICK ADD</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow w-64 flex-shrink-0 group relative hover:shadow-xl">
                                    {/* <!-- Product Images (Hover Swap) --> */}
                                    <div className="relative w-full h-[325px] flex items-center justify-center">
                                        <img src="/assets/image/Rectangle_1.webp" className="transition-opacity duration-300 group-hover:opacity-0 absolute z-10" />
                                        <img src="/assets/image/product(1).webp" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />
                                    </div>

                                    {/* <!-- Icons on Hover --> */}
                                    <div className="absolute bottom-[8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3 z-40">

                                        {/* <!-- Wishlist Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300 ">
                                                Add to Wishlist
                                            </div>
                                        </div>

                                        {/* <!-- Quick View Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300">
                                                Quick View
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- Product Info --> */}
                                    <h3 className="mt-4 font-medium text-center">Luscious Lip Lacquer</h3>
                                    <div className="text-center text-sm mt-1">
                                        <span className="text-black font-bold">$25.00</span>
                                        <span className="line-through text-gray-400 text-xs ml-1">$29.00</span>
                                    </div>
                                    <button className="mt-4 w-full h-[50px] bg-[#f5f5f5] text-[10px] text-[#1c1c1c] py-2 rounded hover:bg-[#b6713e] hover:text-[#ffffff]">QUICK ADD</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow w-64 flex-shrink-0 group relative hover:shadow-xl">
                                    {/* <!-- Discount Badge --> */}
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-13%</div>

                                    {/* <!-- Product Images (Hover Swap) --> */}
                                    <div className="relative w-full h-[325px] flex items-center justify-center">
                                        <img src="/assets/image/Rectangle_1.webp" className="transition-opacity duration-300 group-hover:opacity-0 absolute z-10" />
                                        <img src="/assets/image/product(1).webp" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />
                                    </div>

                                    {/* <!-- Icons on Hover --> */}
                                    <div className="absolute bottom-[8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3 z-40">

                                        {/* <!-- Wishlist Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300 ">
                                                Add to Wishlist
                                            </div>
                                        </div>

                                        {/* <!-- Quick View Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300">
                                                Quick View
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- Product Info --> */}
                                    <h3 className="mt-4 font-medium text-center">Luscious Lip Lacquer</h3>
                                    <div className="text-center text-sm mt-1">
                                        <span className="text-black font-bold">$25.00</span>
                                        <span className="line-through text-gray-400 text-xs ml-1">$29.00</span>
                                    </div>
                                    <button className="mt-4 w-full h-[50px] bg-[#f5f5f5] text-[10px] text-[#1c1c1c] py-2 rounded hover:bg-[#b6713e] hover:text-[#ffffff]">QUICK ADD</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow w-64 flex-shrink-0 group relative hover:shadow-xl">
                                    {/* <!-- Product Images (Hover Swap) --> */}
                                    <div className="relative w-full h-[325px] flex items-center justify-center">
                                        <img src="/assets/image/Rectangle_1.webp" className="transition-opacity duration-300 group-hover:opacity-0 absolute z-10" />
                                        <img src="/assets/image/product(1).webp" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />
                                    </div>

                                    {/* <!-- Icons on Hover --> */}
                                    <div className="absolute bottom-[8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3 z-40">

                                        {/* <!-- Wishlist Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300 ">
                                                Add to Wishlist
                                            </div>
                                        </div>

                                        {/* <!-- Quick View Icon --> */}
                                        <div className="relative group/icon">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-[#b6713e] hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                                                </svg>
                                            </button>
                                            {/* <!-- Tooltip --> */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-[#b6713e] rounded opacity-0 group-hover/icon:opacity-100 transition duration-300">
                                                Quick View
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- Product Info --> */}
                                    <h3 className="mt-4 font-medium text-center">Luscious Lip Lacquer</h3>
                                    <div className="text-center text-sm mt-1">
                                        <span className="text-black font-bold">$25.00</span>
                                        <span className="line-through text-gray-400 text-xs ml-1">$29.00</span>
                                    </div>
                                    <button className="mt-4 w-full h-[50px] bg-[#f5f5f5] text-[10px] text-[#1c1c1c] py-2 rounded hover:bg-[#b6713e] hover:text-[#ffffff]">QUICK ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </>
            );
};

            export default Weeklydeals;
