import React from 'react'
import { NextSeo } from 'next-seo'
import Footer from './Footer'
import Navigation from './Navigation'

const Shell: React.FC<{
  title: string
  description: string
  disableDecoration?: boolean
  className?: string
}> = ({ title, description, disableDecoration, children, className }) => (
  <div className={`flex flex-col h-screen ${className || ''}`}>
    <NextSeo title={title} description={description} />
    <Navigation disableDecoration={!!disableDecoration} />

    <main className='flex-grow'>{children}</main>

    <Footer disableDecorations={false} />
  </div>
)

export default Shell
