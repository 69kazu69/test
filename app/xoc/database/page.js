import React from 'react'
import Navigation from '@/app/Components/Navigation'
import Nav from '../Components/Nav'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'

export default function database() {
  return (<>
  <Header />
    <div className='xoc'>
        <Navigation page="XOC" />
        <Nav tab="db" />
    </div>
    <Footer />
    </>
  )
}
