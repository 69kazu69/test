'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


function Snav({page}) {

    const router = useRouter()

  return (
    <div className='snav'>
        <div className={page === "SOAR" ? "sactive snitem" : "snitem"} onClick={() => router.push('/soar')}>
SOAR
           </div>
           <div className={page === "IOT" ? "sactive snitem" : "snitem"} onClick={() => router.push('/soar/iot')}>
IOT
           </div>
           
    </div>
  )
}

export default Snav