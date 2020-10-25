import React from 'react'
import './Main_left.css'
import './global.css'
import Info from './Info_right'


function Main_left() {
    return (
        <div className="Main_left">
          <div className="heading">
            <h4>Personal Info</h4>
            </div>
<div className="data_main">

            <Info 
            heading="Phone" 
            data = "8076635803"
            />
           
            <Info 
            heading="Address"
            l1 = "E - 5/2, Satya Vihar Kamlapur,"
            l2 ="Brurai,"
            l3="Delhi - 110084"
            />
            
            <Info
            heading="Email"
            data="rs181915@gmail.com"
            />
            <Info
            heading="Website"
            a="https://rahuldeveloper.com"
            />
            <Info
            heading="DOB"
            data="18th Oct 2000"
            />
            <Info
            heading="Father's Name"
            data="Mr. Hari Krishan"
            />
            <Info
            heading="Mother's Name"
            data="Mrs. Pinki"
            />

            </div>
        </div>
    )
}

export default Main_left
