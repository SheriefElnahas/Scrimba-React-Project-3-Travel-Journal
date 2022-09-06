import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Card() {
    return (
        <div className="card">
            <img className="card-img" src="https://source.unsplash.com/WLxQvbMyfas" />
            <div className="card-content">
                <div className="card-location-details">
                <p className="card-country"><FontAwesomeIcon className="icon" icon={faLocationDot} /> Japan</p>
                <a href="#" className="view-country">View on Google Maps</a>
                </div>
                <h1 className="card-location-name">Mount Fuji</h1>
                <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}

export default Card;