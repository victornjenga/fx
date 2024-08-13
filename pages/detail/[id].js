import { useRouter } from 'next/router'
import React, { useState, useEffect, useContext } from 'react'
import { urlFor, client } from '../../utils/client'
import Image from 'next/image'
// import imageUrl from '@sanity/image-url'
import axios from 'axios'
import { BASE_URL } from '../../utils'
import { useStateContext } from '../../context/StateContext'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'

import Link from 'next/link'

import Products from '@/components/Products'
import useAuthStore from '@/store/authStore'
import LikeButton from '@/components/LikeButton'

// import kenya from '/public/kenya.png'
// import uk from '/public/uk.png'
// import srilanka from '/public/srilanka.png'
// import canada from '/public/canada.png'

function ProductDetails({ siteDetails, sites }) {
  const [site, setSite] = useState(siteDetails)

  // const { image, name, description, price }=siteDetails
  // console.log(sites)

  const [index, setIndex] = useState(0)
  const router = useRouter()
  const { decQty, incQty, qty, onAdd, size } = useStateContext()
  const { userProfile } = useAuthStore()

  const [selectedOption, setSelectedOption] = useState(null)

  const handleButtonClick = (option) => {
    setSelectedOption(option)
  }

  


  const handleLike = async (like) => {
    if (userProfile) {
      const res = await axios.put(`${BASE_URL}/api/like`, {
        userId: userProfile._id,
        siteId: site._id,
        like,
      })
      setSite({ ...site, likes: res.data.likes })
    }
  }

  return (
    <div className="w-full pt-10  mb-8 ">
      <style>
        {`#p-wrap {
          white-space: pre-line;
        }`}
      </style>
      <div className="w-full p-8  h-full bg-white justify-center  pt-10 rounded">
        <h3 className="font-medium md:hidden text-xl">{site.name}</h3>
        <div className="flex flex-col  md:px-8 w-full justify-center  items-center pb-8 xl:flex-row">
          <div className="block space-x-3 md:flex  w-full ">
            <div className="block md:w-1/2">
              <img
                className=" w-full  "
                src={urlFor(site.image && site.image[index]).url()}
                alt={site.name}
              />
              <div className="flex gap-2 mt-2">
                {site.image?.map((item, i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className={
                      i === index ? 'small-image selected-image' : 'small-image'
                    }
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 ">
              <h3 className="font-semibold hidden md:flex text-xl">
                {site.name}
              </h3>
              <div className="flex space-x-2   items-center py-3">
                <div className="bg-blue-600 hidden md:flex h-full p-2">
                  <TbMessageCircle2Filled className=" text-xl md:text-2xl text-white  " />
                </div>

                <div>
                  <p className="text-xl font-bold">For Manual Ordering</p>
                  <div className="text-xm  md:text-sm justify-center">
                    <p className="justify-center">Call/Whatsapp:</p>
                    <span className="text-blue-400">0114239961</span>{' '}
                    
                  </div>
                </div>
              </div>

              <p className="py-2 font-medium">
                {site.price}
              </p>
              {/* <div className=" my-3 flex justify-center items-center bg-gray-200 px-3 py-2">
                <div>
                  {userProfile && (
                    <LikeButton
                      likes={site.likes}
                      flex="flex"
                      handleLike={() => handleLike(true)}
                      handleDislike={() => handleLike(false)}
                    />
                  )}
                </div>
                <p className="font-medium"> Add to Wish List</p>
              </div> */}
              <div className="space-x-2 flex">
                <h3>Quantity:</h3>
                <p className="flex space-x-3 items-center  ">
                  <span
                    onClick={decQty}
                    className="bg-black  p-3 cursor-pointer  text-xl font-bold"
                  >
                    <AiOutlineMinus className="text-white" />
                  </span>
                  <span className="text-2xl font-semibold">{qty}</span>
                  <span
                    onClick={incQty}
                    className="bg-black  p-3 cursor-pointer text-xl font-bold"
                  >
                    <AiOutlinePlus className="text-white" />
                  </span>
                </p>
              </div>

              <div className=" hidden md:flex px-5 space-x-4 items-center mt-4  ">
                <button
                  type="button"
                  onClick={() => onAdd(site, qty)}
                  className="px-3 py-2  bg-blue-600 border cursor-pointer text-white font-semibold  hover:scale-105 duration-300"
                >
                  Add To Cart
                </button>
                <Link href="/checkout">
                  <button
                    onClick={() => onAdd(site, qty)}
                    type="button"
                    className="px-3 py-2  bg-yellow-600 border cursor-pointer text-white font-semibold  hover:scale-105 duration-300"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* <div className=" ">
                <p className="text-xl font-bold">Available Options</p>
                <p>*Sizes</p>
                <div className="space-x-2  space-y-2">
                  <button
                    onClick={() => handleButtonClick('option1')}
                    style={{
                      backgroundColor:
                        selectedOption === 'option1' ? 'blue' : 'black',
                      color: selectedOption === 'option1' ? 'white' : 'white',
                    }}
                    className="bg-black text-white px-2 py-1 font-medium "
                  >
                    Xtra Small(sm)
                  </button>
                  <button
                    onClick={() => handleButtonClick('option2')}
                    style={{
                      backgroundColor:
                        selectedOption === 'option2' ? 'blue' : 'black',
                      color: selectedOption === 'option1' ? 'white' : 'white',
                    }}
                    className="bg-black text-white px-2 py-1 font-medium "
                  >
                    Small(s)
                  </button>
                  <button
                    onClick={() => handleButtonClick('option3')}
                    style={{
                      backgroundColor:
                        selectedOption === 'option3' ? 'blue' : 'black',
                      color: selectedOption === 'option1' ? 'white' : 'white',
                    }}
                    className="bg-black text-white px-2 py-1 font-medium "
                  >
                    Medium(m)
                  </button>
                  <button
                    onClick={() => handleButtonClick('option4')}
                    style={{
                      backgroundColor:
                        selectedOption === 'option4' ? 'blue' : 'black',
                      color: selectedOption === 'option1' ? 'white' : 'white',
                    }}
                    className="bg-black text-white px-2 py-1 font-medium "
                  >
                    Large(l)
                  </button>
                  <button
                    onClick={() => handleButtonClick('option5')}
                    style={{
                      backgroundColor:
                        selectedOption === 'option5' ? 'blue' : 'black',
                      color: selectedOption === 'option1' ? 'white' : 'white',
                    }}
                    className="bg-black text-white px-2 py-1 font-medium "
                  >
                    Xtra Large(xl)
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full py-3">
          <div className="">
            <h2 className="text-xl  py-2 pl-3 font-semibold">Description</h2>
          </div>
          <p className="sm:text-lg" id="p-wrap">
            {site.description}
          </p>
        </div>
      </div>

      <div className="py-4">
        <div className="bg-black">
          <h2 className="text-xl text-white py-2 pl-3 font-semibold">
            Related Products
          </h2>
        </div>

        <div className="marquee">
          <div className="flex   flex-wrap  w-full">
            {sites.slice(1, 10).map((site) => (
              <Products key={site._id} site={site} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex fixed bottom-0 w-full md:hidden">
        <button
          type="button"
          onClick={() => onAdd(site, qty)}
          className="px-3 py-2 bg-blue-600 cursor-pointer text-white font-semibold  w-[50%]"
        >
          ADD TO CART
        </button>
        <button
        onClick={() => onAdd(site, qty)}
          type="button"
          className="px-3 py-2  bg-yellow-600  cursor-pointer text-white font-semibold  w-[50%]"
        >
         <Link href="/checkout"> BUY NOW </Link>
        </button>
       
        
      </div>
    </div>
  )
}

export default ProductDetails

export const getServerSideProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`${BASE_URL}/api/sites/${id}`)
  let response = await axios.get(`${BASE_URL}/api/sites`)
  return {
    props: { siteDetails: data, sites: response.data },
  }
}
