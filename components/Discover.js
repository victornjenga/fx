import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { categories } from '../utils/categories'

function Discover() {
  const router = useRouter()
  const { category } = router.query

  return (
    <div className="md:justify-center w-full ">
      {/* <p className="text-gray-500 mb-4 font-semibold  mt-4 ">
        Popular Categories
      </p>
       */}
      <div className=" justify-start flex space-x-5">
        {categories?.map((item) => (
          <Link href={`/?category=${item.name}`} key={item.name}>
            <div>
              <span className={`font-medium border px-3 py-2  `}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover
