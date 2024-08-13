import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { BASE_URL } from '../utils'
import Products from '@/components/Products'
import NewProducts from '@/components/NewProducts'
import Bottom from '@/sections/Bottom'
import Categories from '../components/Categories'
import Discover from '../components/Discover'
import { categories } from '@/utils/categories'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

export default function Home({ sites }) {
  // console.log(sites)
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <main className="md:px-[5%] pt-36 md:pt-24 w-full">
      <div className=" pt-2 md:pt-4 md:hidden overflow-x-scroll py-2 scrollbar-hide mx-4">
        <Discover />
      </div>

      <div className=" pt-2 md:pt-4 space-x-3 flex overflow-x-scroll py-2 scrollbar-hide mx-4">
        {categories.length ? (
          categories?.map((category) => (
            <Categories key={category.id} category={category} />
          ))
        ) : (
          <NoResults />
        )}
      </div>
      <h2 className="py-2 font-bold text-lg flex justify-center">
        Latest Products
      </h2>

      <div className="relative flex group items-center">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white absolute text-black font-bold cursor-pointer z-10  rounded-full hidden group-hover:block opacity-40 hover:opacity-100"
          />
          <div id="slider" className="flex  w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {sites.slice(0, 10).map((site) => (
              <Products key={site._id} site={site} />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white right-0 absolute text-black font-bold cursor-pointer z-10  rounded-full hidden group-hover:block opacity-40 hover:opacity-100"
          />
        </div>


      <h2 className="text-2xl font-bold pt-4 md:px-4">New Products</h2>
      <div className="flex pt-2 flex-wrap  w-full">
        {sites.slice(5, 9).map((site) => (
          <NewProducts key={site._id} site={site} />
        ))}
      </div>

      <Bottom />
    </main>
  )
}

export const getServerSideProps = async ({ query: { category } }) => {
  let response = await axios.get(`${BASE_URL}/api/sites`)

  if (category) {
    response = await axios.get(`${BASE_URL}/api/discover/${category}`)
  }

  return {
    props: { sites: response.data },
  }
}
