import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather} autoComplete="off">
        <div className="form-fields">
            <div className="input-field">
                <input id="city" name="city" type="text" className="validate"/>
                <label htmlFor="city">City...</label>
            </div>
            <div className="input-field">
                <input id="country" name="country" type="text" className="validate"/>
                <label htmlFor="country">Country...</label>
            </div>
        </div>
        <div className="form-buttons center-align">
            <button className="waves-effect waves-orange btn" type="submit"><i className="material-icons left">cloud</i>Get Weather</button>
        </div>
    </form>
);

export default Form;