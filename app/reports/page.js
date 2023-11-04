import React from 'react'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Report() {
  return (<>
    <Header />
    <div className='report'>
        <Navigation page="REPORT" />
        <div className='rmain'>
          <div className='vhead'>Reports</div>
          <div>
            Number of Days
          </div>
          <input>
        
          </input>

          <div>
          Name of Report
          </div>
          <input>

          </input>

          <div>
          <button>
          Generate
          </button>
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
