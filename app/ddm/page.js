'use client';


import React, { useState, useEffect } from 'react'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import Footer from '../Components/Footer'




export default function DDM(){

    const [status,setStatus] = useState(true)
    const [activity, setActivity] = useState("")

    const statusapicall = () =>{
        fetch('http://10.8.0.68:8002/status')
       .then((response) => response.json())
       .then((data) => {

        data.Honeypot === "active" ? setActivity("Active") : setActivity(" Stopped ")
          if(data.Honeypot === "active"){
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
        fetch('http://10.8.0.68:8002/stop')
       .then((response) => response.json())
       .then((data) => {
        setActivity(data.Honeypot)
        statusapicall()

       })
       .catch((err) => {
          console.log(err.message);
       }); 
    }
    const startapicall = () =>{
        fetch('http://10.8.0.68:8002/start')
       .then((response) => response.json())
       .then((data) => {
        setActivity(data.Honeypot)
        statusapicall()

       })
       .catch((err) => {
          console.log(err.message);
       }); 
    }
    const restartapicall = () =>{
        fetch('http://10.8.0.68:8002/restart')
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
    <div className='ddm'>
        
        <Navigation page="DDM" />
        <div className='ddmain'>
            <div className='ddheader' >
                Decoy Status : {activity}
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
    <Footer />
    </>
  )
}
