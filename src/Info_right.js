import React from 'react'

function Info_right(props) {
    return (
        <div className="info">
             <div className="info_heading">{props.heading}</div>
                <div className="info_data">{props.data}<a href={props.a}>{props.a}</a> {props.l1}<br></br>{props.l2}<br></br>{props.l3}</div>
        </div>
    )
}

export default Info_right
