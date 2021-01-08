import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/molecules'
interface LayoutProps {
  children?: React.ReactNode
  title?: string
  home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, title = '', home }) => {
  return (
    <main className="max-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!home && <Header />}
      <section className="antialiased text-gray-900 flex flex-col items-center justify-center min-h-screen mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        {children}
      </section>
    </main>
  )
}

export default Layout
