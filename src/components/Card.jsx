import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={props.imageUrl} 
                className="card--img"
                alt={`${props.title}`}
            />
            <div className="card--text">
                <p className="card--location">
                    <img 
                        src="./images/location-icon.svg" 
                        className="card--location-icon"
                        alt="Location icon"
                    />
                    {props.location} 
                    <a 
                        href={props.googleMapsUrl} 
                        className="card--maps"
                    >
                        View on Google Maps
                    </a>
                </p>
                <h1 className="card--title">
                    {props.title}
                </h1>
                <h3 className="card--date">
                    {props.startDate} - {props.endDate}
                </h3>
                <p className="card--description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}