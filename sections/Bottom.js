import React from 'react'

function Bottom() {
  return (
    <div className=" my-6  justify-center items-center flex flex-col ">
      <div className=" space-x-3  md:px-4 justify-center block md:flex ">
        <div className=" md:w-[40%] ">
          <img
            className="md:w-[600px] object-contain"
            src="/top-pick-img.jpg"
            alt="/"
          />
        </div>
        <div className="md:w-[40%] space-y-8  justify-center  px-5 items-center flex flex-col ">
          <p className="text-3xl font-bold">
            Galaxy Z Flip 5 : A Phone that Fits Your Style and Needs
          </p>
          <p className="text-xl  font-bold">
            Renowned for its pioneering and avant garde mobile devices,Samsung
            once again astonishes with the Galaxy Z Flip 5.
          </p>
          <button className="bg-blue-700 px-4 py-3 rounded-2xl text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
      <p className="text-2xl w-[80%] py-5 font-bold">
        I agree to receive product information and special promotional offers by
        email from DevonTech,and I confirm that I am 16 years of age or older.
       <span className="text-blue-800">Privacy Policy</span> I agree to receive product information and special
        promotional offers by email from DevonTech, and I confirm that I am 16
        years of age or older. <span className="text-blue-800">Privacy Policy</span>
      </p>
    </div>
  )
}

export default Bottom
