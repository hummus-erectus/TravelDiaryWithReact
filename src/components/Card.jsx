import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function card(props){
    let dateFormat
    if (props.endDate){
        dateFormat=`${props.startDate} - ${props.endDate}`
    } else {
        dateFormat=`${props.startDate}`
    }

    return(
        <div className="card">
            <img className="card--image" src={props.imageUrl}/>
            <div class-className="card--details">
                <p><FontAwesomeIcon icon={faLocationDot} className="card--pin"/><span className="card--location">{props.location}</span><a href={`${props.googleMapsUrl}`} className="card--mapsUrl">View on Google Maps</a></p>
                <h1>{props.title}</h1>
                <p className="card--date">{dateFormat}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}