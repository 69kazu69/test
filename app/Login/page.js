import React from 'react'
import Header from '../Components/Header'

function Login() {
  return ( <>
  <Header />
    <div className='loginbg'>
        <div>
            <div className='loginheader'>
                <h1 className='loginheader'>
                    Header
                </h1>
            </div>
            <div className='logincard'>
                <div className='inputs'>
                <div className='sinput'>
            
            <input className='loginfield' placeholder='Username'>
            
            </input>
        </div>
        <div className='sinput'>
            
            <input className='loginfield' placeholder='Password'>
            
            </input>
        </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Login