import React from 'react'
import Head from 'next/head'
interface LayoutProps {
  children?: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = '' }) => {
  return (
    <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
