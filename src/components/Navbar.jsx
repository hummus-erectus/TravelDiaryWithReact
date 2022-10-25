import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <nav>
            <p><FontAwesomeIcon icon={faEarthAmericas} className="nav--world"/><span>my travel journal.</span></p>
        </nav>
    )
}