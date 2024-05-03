import React from 'react'

interface LayoutProps {
    children: React.ReactNode,
    className?: string
}

const Layout = ({children, className}: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light px-8 dark:bg-dark sm:px-12 md:px-16 lg:24 xl:32  ${className}`}>{children}</div>
  )
}

export default Layout