import '../styles/globals.css'
// import NextNprogress from "nextjs-progressbar";
// import { RiWhatsappFill } from "react-icons/ri";
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Toaster } from 'react-hot-toast'
import { RiWhatsappFill } from 'react-icons/ri'

import Router from 'next/router'
import { StateContext } from '../context/StateContext'
import Image from 'next/image'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Devontech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <div>
        <StateContext>
          <div className="">
            <Navbar />
            <Toaster />
            <Component {...pageProps} />
            <Footer />
          </div>
          {/* <div className="bottom-3 fixed cursor-pointer right-4 ">
                <a
                  href="https://wa.me/+254114239961?text=Hello,+There."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={100}
                    height={100}
                    className="py-2 "
                    src={whatsapp}
                    alt="/"
                  />
                </a>
              </div> */}
        </StateContext>
      </div>
    </>
  )
}

export default MyApp
