import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './Users.css'

const Users = () => {
    // Using State for all contestant and total fee cart
    const[users, setusers] = useState([]);
    const [cart, setCart] = useState([]);

    //Load Data
    useEffect(()=>{
        fetch('./users.json')
        .then(res => res.json())
        .then(data => setusers(data))
    },[])

    //handle clickHandler
    const handleRegistrationDone = (user) => {
        const existId = cart.find(addedId => addedId.id === user.id);
        if (!existId) {
            const newCart = [...cart, user];
            setCart(newCart)
        }
        else {
             alert("This Participant has already registered.");
        }
    }

    return (<div className='body-part'>
            <div className='users'>
            {
                users.map(user => <User user={user} 
                key = {user.id}
                handleRegistrationDone = {handleRegistrationDone}
                ></User>)
            }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
    </div>
    );
};

export default Users;