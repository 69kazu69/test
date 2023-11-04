'use client';


import React from 'react'
import Navigation from '../../Components/Navigation'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Snav from '../../Components/Snav'
import { useState, useEffect } from 'react'


export default function SOAR() {
    const [status,setStatus] = useState(true)
    const [activity, setActivity] = useState("")
    const [progress, setprogress] = useState(false)

    const statusapicall = () =>{
        fetch('http://10.8.0.73:8002/iotstatus')
       .then((response) => response.json())
       .then((data) => {

        data.Iot === "active" ? setActivity("Active") : setActivity(" Stopped ")
          if(data.Iot === "active"){
            setStatus(true)
          }
          else if(data.Iot === "in progress"){
           setprogress(true)
           setInterval(statusapicall, 10000)
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
        fetch('http://10.8.0.73:8002/iotstop')
       .then((response) => response.json())
       .then((data) => {
        setActivity(data.Iot)
        statusapicall()

       })
       .catch((err) => {
          console.log(err.message);
       }); 
    }
    const startapicall = () =>{
        fetch('http://10.8.0.73:8002/iotstart')
       .then((response) => response.json())
       .then((data) => {
        setActivity(data.Iot)
        statusapicall()

       })
       .catch((err) => {
          console.log(err.message);
       }); 
    }
    const restartapicall = () =>{
        fetch('http://10.8.0.73:8002/iotrestart')
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


    if(progress){
        return (
            <>
            <Header />
            <div className='sor'>
              <Navigation page="SOAR" />
              <div style={{width : "100%"}}>
              <Snav page="IOT"/>
            <div className='sorm'>
                
                <div className = "loader"></div>
            </div>
              </div>
            </div>
            <Footer />
            </>
        )
    }
  return (<>
  <Header />
    <div className='sor'>
              <Navigation page="SOAR" />
    <div style={{width: "100%"}}>

    <Snav page="IOT"/>
    <div className='sorm'>
    <div className='ddmain'>
            <div className='ddheader' >
                IOT Status : {activity}
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
