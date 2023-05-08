import React from 'react'
import Image from "next/image";




export const SearchBar = (props) => {

  return (
    <div>
    
      <div className=" h-96 bg-cover bg-center saturate-150 contrast-250  text-white bg-[url('/images/confiHeader.jpg')] " style={{'height':'32rem'}}>
        <div className="  relative block top-32  ">
          <div className=" sm:none md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  w-full  m-auto  ">
            <h2 className=" sm:text-4xl  lg:text-6xl lg:mt-10 mt-3 mb-2 font-extrabold ">
              iMAGER
            </h2>
            <p className="lg:text-3xl text-gray-100 mb-2 sm:text-xl">
              Explore what is happening, where and when
            </p>
             {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
