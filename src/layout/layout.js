import React from 'react'
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="w-full flex-1 mt-16">
        {children}
      </main>
    </div>
  )
}

export default Layout