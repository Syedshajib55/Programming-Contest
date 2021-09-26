import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';

const Users = () => {
    const[users, setusers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./users.json')
        .then(res => res.json())
        .then(data => setusers(data))
    },[])
    const handleRegistrationDone = (user) => {
        const existId = cart.find(addedId => addedId.id === user.id);
        if (existId) {
            alert("This Participant has alreasdy registered.");
        }
        else {
            const newCart = [...cart, user];
            setCart(newCart)
        }
    }
    return (<div>
            <div className='reg'>
            {
                users.map(user => <User user={user} 
                key = {user.id}
                handleRegistrationDone = {handleRegistrationDone}
                ></User>)
            }
            </div>
            <div className='cart'>
                <Cart> cart={cart}</Cart>
            </div>
    </div>
    );
};

export default Users;