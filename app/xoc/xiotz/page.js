"use client"


import React from 'react'
import Navigation from '@/app/Components/Navigation'
import Nav from '../Components/Nav'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import { useState } from 'react'

export default function xiotz() {
  

  const [command, setcommand] = useState("quit")

  const commands = {
    "Check license validity and other information": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -license",
    "Check/Set agent license limit": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -agentLicense",
    "Renew xiotz license": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -renew",
    "Enable DMARC": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -enableDmarc",
    "Display system specification": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -specs",
    "Display network information": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -network",
    "Updates GeoIP databases": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -geoip",
    "Generate XOC reports and get it in your email": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -generateReports",
    "Updates xiotz core scripts to the latest version": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -scriptUpdater",
    "Generates IP-based honeypot, sinkhole, endpoints packages": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -localAgents",
    "Generates domain-based honeypot, sinkhole, endpoints packages": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -publicAgents",
    "Upgrades the dashboard with new dashboard files and Kibana binary": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -updateUi",
    "Upgrades the latest ILM policies from Git": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -updateIlm",
    "Upgrades the latest logstash and config files from Git": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -updateEtl",
    "Upgrades HIDS manager (Use with caution!)": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -updateHids",
    "Display endpoints and other installer URLs": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -displayUrls",
    "Remove VAPT results from DB and delete result files": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -vaptCleanup",
    "Import VAPT results to the dashboard": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -vaptImport",
    "Enables elastalert": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -enableAlerts",
    "Enables production alert rules for elastalert": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -enableProdAlerts",
    "Enabled validation alert rules for elastalert": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -enableValdnAlerts",
    "Initiate xiotz self-destruct function *DANGER*": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -destruct",
    "Add TCP target to uptime monitor": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -addTcp",
    "Add HTTP target to uptime monitor": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -addHttp",
    "Add ICMP target to uptime monitor": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -addIcmp",
    "Display the running status of xiotz subsystems": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -status",
    "Checks overall system health": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -health",
    "Checks xiotz cluster health": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -clusterHealth",
    "Checks whether all the services are running": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -services",
    "Removes unwanted log files and tmp files": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -cleanupStorage",
    "Perform indices cleanup": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -cleanupIndices",
    "Get indices information such as index size, the number of index, etc": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -indexInsights",
    "Inspect SSL certificate": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -ssl",
    "Start a debugging session": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -debug",
    "Display the total number of endpoints and its status": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -endpoints",
    "Run the integrity/rootcheck checking on agents": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -rootcheck",
    "Generates a list with all outdated agents": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -outdated",
    "Restart Wazuh on all endpoints": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -restartAll",
    "Removes vulnerability data from a specific endpoint": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -flushVuln",
    "Removes vulnerability data from all the endpoints": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -flushAllVuln",
    "Removes SCA data from a specific endpoint": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -flushSca",
    "Removes SCA data from all the endpoints": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -flushAllSca",
    "Removes all disconnected endpoints from SIEM manager": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -deleteAll",
    "Delete a specific endpoint from SIEM manager": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -deleteAgent",
    "Delete agent limit and enables users to install more endpoints": "bash /etc/xiotz/scripts/xiotz-core-cli.sh -removeAgentLock",

}
const keysArray = Object.keys(commands);

const handleChange = (e) => {
     setcommand(e.value)
}

  const apirequest = () => {
    fetch('http://10.8.0.65:8002/upload', {
      method: 'POST',
      body: JSON.stringify({
        "customer": "saini",
        "ip": "0.0.0.0",
        "subdomain": "0.0.0.0",
        "domain": "0.0.0.0"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  return (<>
  <Header />
    <div className='xoc'>
        <Navigation page="XOC" />
        <div className='xiotz'>
        <Nav tab = "x" />
        <div className='vhead'>
          xIoTz Commands
        </div>
        <select>
            {
              keysArray.map( (value)=> (
                <option value = {value} > {value} </option>
              ))
            }
          </select>
          <br />
          <button onClick={apirequest()}>Run</button>
        </div>
    </div>
    <Footer />
    </>
  )
}
