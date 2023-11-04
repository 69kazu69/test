'use client'


import React from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function page() {
    const router = useRouter()
  return (
    
        <>
  <Header />
  <div class="main">

  <Navigation page="DB" />
  
<div className='mcards'>
<div class="wrapper">
  <div class="box a" onClick={() => router.push('/')}><img src='/VAPT.svg'></img>VAPT</div>
  <div class="box b" onClick={() => router.push('/ddm')}><img className='dimg' src='/Trap.svg'></img>DDM</div>
  <div class="box c" onClick={() => router.push('/xoc')}><img src='/XOC.svg'></img>XOC</div>
  <div class="box d " onClick={() => router.push('/xoc/database')}><img src='/dpm.svg' className='dimg' ></img>DataBase</div>
  <div class="box e" onClick={() => router.push('/xoc/services')}><img src='/apm.svg' className='dimg'></img>Services</div>
  <div class="box f" onClick={() => router.push('/xoc/xiotz')}><img src='/favicon-32x32.svg' className='ximg'></img>xIoTz Operations</div>
  <div class="box f" onClick={() => router.push('/soar')}><img src='/SOAR Automation.svg' />SOAR</div>
  <div class="box d" onClick={() => router.push('/soar/iot')}><img src='/netflow.svg' className='dimg'></img>IOT</div>
  <div class="box e" onClick={() => router.push('/reports')}><img src='/Reports.svg'></img>Reports</div>
  <div class="box f" onClick={() => router.push('/shd')}><img src='shd.svg' className='dimg'></img>SHD</div>
  <div class="box f" onClick={() => router.push('/setting')}><img src='/Setting-icon.svg'></img>Settings</div>
</div>
</div>


  </div>
  <Footer />
  </>
    
  )
}

export default page