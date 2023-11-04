import React from 'react'
import Navigation from '@/app/Components/Navigation'
import Nav from '../Components/Nav'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'

export default function services() {
  return (<>
    <Header />
    <div className='xoc'>
        <Navigation page="XOC" />
        
        <div className='services'>
        <Nav tab="srv" />
          <div className='vhead'> Services</div>
          <div>
            Choose the service:
          </div>
          <select>
            <option value = "NFM">NFM</option>
            <option value = "NIDS">NIDS</option>
            <option value = "NBAD">NBAD</option>
            <option value = "EDR">EDR</option>
            <option value = "UTM">UTM</option>
          </select>
          <br />
          <button>Submit</button>
        </div>
    </div>
    <Footer />
    </>
  )
}
