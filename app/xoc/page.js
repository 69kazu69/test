import React from 'react'
import Nav from './Components/Nav'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function XOC() {
  return (
    <>
    <Header />
    <div className='xoc'>
        <Navigation page="XOC" />
        
        <div className='cxoc'>
          <Nav tab="xoc" />
          <div className='mxoc'>
            <div className='vhead'>
              XOC
            </div>
            <br>
            </br>
        <div>
          Status : 
        </div>
        <textarea>

        </textarea>
        <button>
          Start
        </button>
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
