'use client'


import React from 'react'
import { useRouter } from 'next/navigation'

export default function Navigation({page}) {

  
  const classname = []


  const router = useRouter()
  return (
    <>
    <aside>
  <nav>
    <ul>
    <a onClick={() => router.push('/db')}><li className={page === "DB" ? "active" : "unactive"}><img src='/dashboard-monitoring-icon.svg'></img>Dashboard </li></a>
      <a onClick={() => router.push('/')}><li className={page === "VAPT" ? "active" : "unactive"}><img src='/VAPT.svg'></img>VAPT </li></a>
      <a onClick={() => router.push('/ddm')}><li className={page === "DDM" ? "active" : "unactive"}><img className='dimg' src='/Trap.svg'></img>DDM</li></a>
      <a onClick={() => router.push('/xoc')}><li className={page === "XOC" ? "active" : "unactive"}><img src='/XOC.svg'></img>XOC</li></a>
      <a onClick={() => router.push('/reports')}><li className={page === "REPORT" ? "active" : "unactive"}><img src='/Reports.svg'></img>Reports</li></a>
      <a onClick={() => router.push('/soar')}><li className={page === "SOAR" ? "active" : "unactive"}><img src='/SOAR Automation.svg'></img>SOAR</li></a>
      <a onClick={() => router.push('/shd')}><li className={page === "SHD" ? "active" : "unactive"}><img src='/shd.svg' className='dimg'></img>SHD</li></a>
      <a onClick={() => router.push('/setting')}><li className={page === "SETTING" ? "active" : "unactive"}><img src='/Setting-icon.svg'></img>Settings </li></a>
    </ul>
  </nav>
</aside>
    </>
  )
}
