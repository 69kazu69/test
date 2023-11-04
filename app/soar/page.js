'use client';


import React from 'react'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Snav from '../Components/Snav'
import { useState, useEffect } from 'react'

export default function SOAR() {
  const [status,setStatus] = useState(true)
  const [activity, setActivity] = useState("")

  const statusapicall = () =>{
      fetch('http://10.8.0.73:8002/soarstatus')
     .then((response) => response.json())
     .then((data) => {

      data.Soar === "active" ? setActivity("Active") : setActivity(" Stopped ")
        if(data.Soar === "active"){
          setStatus(true)
        }
        else{
          setStatus(false)
        }
     })
     .catch((err) => {
        console.log(err.message);
     }); 
  }

  const stopapicall = () =>{
      fetch('http://10.8.0.73:8002/soarstop')
     .then((response) => response.json())
     .then((data) => {
      setActivity(data.Soar)
      statusapicall()

     })
     .catch((err) => {
        console.log(err.message);
     }); 
  }
  const startapicall = () =>{
      fetch('http://10.8.0.73:8002/soarstart')
     .then((response) => response.json())
     .then((data) => {
      setActivity(data.Soar)
      statusapicall()

     })
     .catch((err) => {
        console.log(err.message);
     }); 
  }
  const restartapicall = () =>{
      fetch('http://10.8.0.73:8002/soarrestart')
     .then((response) => response.json())
     .then((data) => {
      statusapicall()
     })
     .catch((err) => {
        console.log(err.message);
     }); 
  }

  useEffect(() => {
      statusapicall()
  }, [])
  return (<>
  <Header />
    <div className='sor'>
              <Navigation page="SOAR" />
    <div style={{width: "100%"}}>
    <Snav page="SOAR"/>
    <div className='sorm'>
    <div className='ddmain'>
            <div className='ddheader' >
                SOAR Status : {activity}
            </div>
            <div>{ status ?
            <>
                <button onClick={stopapicall}>
                    Stop
                </button>
                <button onClick={restartapicall}>
                    Restart
                </button>
                </>
                :
                <button onClick={startapicall}>
                    Start
                </button>
}
            </div>
        </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
