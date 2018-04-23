import React from "react";

const Weather = props => (
    <div className="weather-info">
        <ul className="weather-list">
            {
                props.city && props.country && <li className="weather-list-item">Location: 
                    <span className="weather-list-item__value"> { props.city }, { props.country }</span>
                </li>
            }
            {
                props.temperature && <li className="weather-list-item">Temperature: 
                    <span className="weather-list-item__value"> { props.temperature }°</span>
                </li>
            }
            {
                props.humidity && <li className="weather-list-item">Humidity: 
                    <span className="weather-list-item__value"> { props.humidity }%</span>
                </li>
            }
            {
                props.description && <li className="weather-list-item">Conditions: 
                    <span className="weather-list-item__value"> { props.description }</span>
                </li>
            }
        </ul>
        {
            props.error && <p className="text-error center-align"> { props.error }</p>
        }
    </div>
);

export default Weather;