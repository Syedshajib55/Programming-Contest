import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoins } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    // Destructuring
    const{picture,name,gender,email,phone,location} = props.user;
    
    return (
        <div className="user-details">
            <div className='container'>
                <div className='row row-cols-1 p-2'>
                    {/* Single Cart  */}
                <div className="cards h-100">
                        <div className="developer-img p-2">
                            <img className="img" src={picture.large} alt="..."/>
                        </div>
                        <div>
                            <h5>{name.first} {name.last}</h5>
                            <p>Gender : {gender}</p>
                            <p>Email : {email}</p>
                            <p>Phone no : {phone}</p>
                            <p>Country : {location.country}</p>
                            <button className="developer-btn" onClick={() => props.handleRegistrationDone(props.user)}>
                                <FontAwesomeIcon icon={faCoins}/>   Pay for Registration</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;