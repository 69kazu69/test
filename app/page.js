'use client'


import React from 'react'
import { useRouter } from 'next/navigation';
import Navigation from './Components/Navigation';
import Vapt from './Components/Vapt'
import Header from './Components/Header';
import Footer from './Components/Footer';


export default function Home() {
  const router = useRouter()

  return (<>
  <Header />
  <div class="main">

  <Navigation page="VAPT" />
  <Vapt  />
  </div>
  <Footer />
  </>
  )
}
