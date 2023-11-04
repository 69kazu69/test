import React, { useState, useEffect } from 'react'


function Vapt() {


const [exists, setExist] = useState(true)
const [rerenderCounter, setRerenderCounter] = useState(0);
const [customer, setcustomer] = useState("")
const [scanner, setscanner] = useState(false)
const [details, setdetails] = useState(false)

const [scusomter, setscustomer] = useState(false)

const [ips, setips] = useState("")
const [domain, setdomain] = useState("")
const [subdomain, setsubdomain] = useState("") 

const [status, setStatus] = useState("Completed")

const [recips, setrecips] = useState([])
const [recdomain, setrecdomain] = useState([])
const [recsubdomain, setrecsubdomain] = useState([]) 


const statusapicall = () => {
  fetch('http://10.8.0.65:8003/status')
       .then((response) => response.json())
       .then((data) => {
          setStatus(data.status)

          if(data.status === "Ongoing"){
          setrecdomain(data.domains)
          setrecips(data.ips)
          setrecsubdomain(data.subdomains)
          }
       })
       .catch((err) => {
          console.log(err.message);
       }); 
}



useEffect(
  () => {
    statusapicall()
  }, 
  []
)



const handleClickupload = () => {
    fetch('http://10.8.0.65:8003/upload', {
      method: 'POST',
      body: JSON.stringify({
        "ip": ips,
        "subdomain": subdomain,
        "domain": domain
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setscanner(true)
       })
       .catch((err) => {
          console.log(err.message);
          
       }); 
}

const handleClickscan = () => {
  fetch('http://10.8.0.65:8003/scan', {
    method: 'POST',
    body: JSON.stringify({
      "name": customer
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        statusapicall()
     })
     .catch((err) => {
        console.log(err.message);
     }); 
}


const customerfunc = (e) => {
  setcustomer(e.target.value)
}


const setipsfunc = (e) => {
  setips(e.target.value)
}

const setdomainfunc = (e) => {
  setdomain(e.target.value)
}

const setsubdomainfunc = (e) => {
  setsubdomain(e.target.value)
}

const showDetails = (e) => {
  setdetails(!details)
}

const submit = (e) => {
    setExist(false)
}


const recipsstr = recips.join('\n');

const recdomainstr = recdomain.join('\n');

const recsubdomainstr = recsubdomain.join('\n');





if(exists && status === "Completed") { 
  return(
   <div className='vapt'>
  <div className='left-vapt'>
      <p className='vhead'>VAPT Scanner</p>
      <p className='vshead'>Enter the name of the customer</p>
      <input onChange={customerfunc}></input>
      <br></br>
      <button onClick={submit}> Submit </button>
  </div>
</div>)
}else if(exists === false && status === "Completed"){
return(
  <div className='vapt'>
<div className='right-vapt'>
  <h1>
      Details for the scan.
  </h1>
  <div className='inputs'>
    <div className='iset'>
  <p className='vshead'>IP Address</p>
  <textarea onChange={setipsfunc}></textarea>
  </div>
  <div className='iset'>
  <p className='vshead'>Sub Domain</p>
  <textarea onChange={setsubdomainfunc}></textarea>
  </div>
  <div className='iset'>
  <p className='vshead'>Domain</p>
  <textarea onChange={setdomainfunc}></textarea>
  </div>
  </div>
  <br />
  <button onClick={handleClickupload}>Uploadtest</button>
  {scanner ? <button onClick={handleClickscan}>Scan</button> : <></>}
</div>
</div>
)
}








else if(!details){ return (
<div className='vapt'>
  <div className='left-vapt'>
    <div className='vinfo'>
      The Scan is already running.
    </div>
    <button className='ibutton' onClick={showDetails}>See Details</button>
  </div>
</div>
)}










    
  else if(details){return (
    <div className='vapt'>
        <div className='right-vapt'>
          
            <h1>Details</h1>
            <div className='details'>
              <div>
            <p className='vshead'>
              IPs
            </p>
            
            <textarea>{recipsstr}</textarea>
            </div>
            <div>
            <p className='vshead'>
              Domains
            </p>
            <textarea>{recdomainstr}</textarea>
            </div>
            <div>
            <p className='vshead'>
              SubDomains
            </p>
            <textarea>{recsubdomainstr}</textarea>
            </div>
            </div>
            <br />
            <button className='ibutton' onClick={showDetails}>Close</button>

        </div>
    </div>)}
  
}

export default Vapt