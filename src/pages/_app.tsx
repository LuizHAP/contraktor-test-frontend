import React from 'react'
import { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'

import '@/styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
      />
    </>
  )
}

export default MyApp
