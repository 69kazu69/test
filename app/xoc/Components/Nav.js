'use client'


import React from 'react'
import { useRouter } from 'next/navigation'

export default function Nav({ tab }) {

  const xrouter = useRouter()
  return (
    <div className='navxoc'>
        <ul className='navul'>
  <li className='navli'><a className={tab === "xoc" ? "selected": "nava"} onClick={() => xrouter.push("/xoc")} >XOC</a></li>
  <li className='navli'><a className={tab === "db" ? "selected": "nava"} onClick={() => xrouter.push("/xoc/database")}>DataBase</a></li>
  <li className='navli'><a className={tab === "srv" ? "selected": "nava"} onClick={() => xrouter.push("/xoc/services")}>Services</a></li>
  <li className='navli'><a className={tab === "x" ? "selected": "nava"} onClick={() => xrouter.push("/xoc/xiotz")}>xIoTz</a></li>
</ul>
    </div>
  )
}
