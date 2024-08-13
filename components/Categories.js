import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { categories } from '../utils/categories'
import Image from 'next/image'

function Categories({ category }) {
  // const router = useRouter()
  // const { category } = router.query

  return (
    <div className="w-full">
      <div className=" justify-center w-[120px]  hidden md:flex    py-2  flex-col items-center ">
        <Link href="/">
          <div className="justify-center flex   py-2  flex-col items-center">
            <img
              className="py-2 px-2 w-[120px] h-[120px] "
              src={category.image}
              alt="/"
            />
            <span
              className={`font-semibold left-0 px-2 text-xs text-black  `}
            >
              {category.name}
            </span>
          </div>
        </Link>
      </div>
     
      
    </div>
  )
}

export default Categories
