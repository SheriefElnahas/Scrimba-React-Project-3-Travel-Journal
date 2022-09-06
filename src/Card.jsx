import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} />
            <div className="card-content">
                <div className="card-location-details">
                <p className="card-country"><FontAwesomeIcon className="icon" icon={faLocationDot} /> {props.item.location}</p>
                <a href={props.item.googleMapsUrl} className="view-country">View on Google Maps</a>
                </div>
                <h1 className="card-location-name">{props.item.title}</h1>
                <p className="card-date">{props.item.date}</p>
                <p className="card-text">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card;