'use client'


import React from 'react'
import Navigation from '../Components/Navigation'
import { useRouter } from 'next/navigation';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function setting() {

    const router = useRouter()

    
  return (<>
    <Header />
    <div className='main'>
        <Navigation page="SETTING" />
    <div className='setting'>
        <p className='shead'>
            SETTINGS
        </p>
        <div className='sinput'>
            <p>
                VAPT IP
            </p>
            <input>

            </input>
        </div>
        <div className='sinput'>
            <p>
                WAF IP
            </p>
            <input>
            
            </input>
        </div>
        <div className='sinput'>
            <p>
                DDM IP
            </p>
            <input>
            
            </input>
        </div>
        <div className='sinput'>
            <p>
                XOC IP
            </p>
            <input>
            
            </input>
        </div>
        <div>
            <button>
                Update
            </button>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
