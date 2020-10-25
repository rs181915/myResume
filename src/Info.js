import React from 'react'

function Info(props) {
    return (
        <div className="info left">
             <div className="info_heading">{props.heading}</div>
                <div className="info_data">{props.data} {props.l1}<br></br>{props.l2}<br></br>{props.l3}</div>
        </div>
    )
}

export default Info
