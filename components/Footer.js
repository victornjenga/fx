import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center w-full items-center  py-6">
      <div className=" flex flex-col w-[80%] justify-center md:grid grid-cols-4">
        <div className=" px-3 my-3">
          <img className="w-[80%]  " src="/assets/footer-logo.png" alt="/" />
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Customer Services</p>
          <p className="">Privacy Policy</p>
          <p>Terms and Condtions</p>
          <p>Shipping Policy</p>
          <p>About Us</p>
          <p>Devoune Ventures</p>
          <p>Customer Services</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Top Brands</p>
          <p className="">Sumsung</p>
          <p>Apple</p>
          <p>Xiaomi</p>
          <p>Techno</p>
          <p>Oppo</p>
          <p>Infinix</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Call Us Here</p>
          <p className="">
            <span className="text-lg font-bold">Sales:</span> 07123456
          </p>
          <p className="">
            <span className="text-lg font-bold">Email:</span> info@example.com
          </p>
          <p className="">
            <span className="text-lg font-bold">Shop Location: </span> 1, Moi
            Avenue, Nairobi, Kenya
          </p>
        </div>
      </div>

      <p className="py-4 px-3  flex justify-center">
        Copyright © 2023 Devontech, All rights reserved.
      </p>
    </div>
  )
}

export default Footer
