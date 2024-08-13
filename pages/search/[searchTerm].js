import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoVerified } from 'react-icons/go'
import Link from 'next/link'
import axios from 'axios'

import NoResults from '../../components/NoResults'
import Products from '../../components/Products'
import useAuthStore from '../../store/authStore'
import { BASE_URL } from '../../utils'

const Search = ({ sites }) => {
  const router = useRouter()
  const { searchTerm } = router.query

  return (
    <div className="w-full  ">
      <div className="flex pt-56   flex-wrap  w-full">
        {sites.length ? (
          sites.map((site, idx) => <Products site={site} key={idx} />)
        ) : (
          <div className="flex flex-col justify-center items-center px-[20%]">
            <NoResults text={`No Results for ${searchTerm}`} />
          </div>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params: { searchTerm } }) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`)

  return {
    props: { sites: res.data },
  }
}

export default Search
