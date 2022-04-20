import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import addUser from '../action/addUserAction'

import { useDispatch } from 'react-redux';

function Registration(){

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const dispatch = useDispatch()

    async function handeClick (){
        dispatch(addUser(name, email, password))
    }

    return(
        <section>
            <h1 className="header">Välkommen!</h1>
            <h1>Registrera dig för ett konto</h1>
            <p className="description">NAME</p>
            <input onChange={ (event) => setName(event.target.value) }
                   type="text"
            />
            <p className="description">EMAIL</p>
            <input onChange={ (event) => setEmail(event.target.value) }
                   type="text"
            />
            <p className="description">PASSWORD</p>
            <input onChange={ (event) => setPassword(event.target.value) }
                   type="text"
                   type="password"
            />
            <Link to="/account"><button onClick={ handeClick } >Sign me up!</button></Link>
            
        </section>
    )
}

export default Registration