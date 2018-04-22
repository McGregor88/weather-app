import React from "react";

const Weather = props => (
    <div className="weather-block">
        <ul className="weather-list">
            { props.city && props.country && <li className="weather-list-item">Location: { props.city }, { props.country }</li> }
            { props.temperature && <li className="weather-list-item">Temperature: { props.temperature }</li> }
            { props.humidity && <li className="weather-list-item">Humidity: { props.humidity }</li> }
            { props.description && <li className="weather-list-item">Conditions: { props.description }</li> }
            { props.error && <li className="weather-list-item text-error">{ props.error }</li> }
        </ul>
    </div>
);

export default Weather;