import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import addUser from '../action/addUserAction'

function UpdateAccount(){

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const dispatch = useDispatch()
    const user = useSelector((state) => {return state})

    async function handeClick (){
        dispatch(addUser(name, email, password))
    }

    return(
        <section>
            <h1 className="header">Välkommen!</h1>
            <h1>Ditt konto</h1>
            <p className="description">NAME</p>
            <input onChange={ (event) => setName(event.target.value) }
                   type="text"
                   placeholder={user.name}
            />
            <p className="description">EMAIL</p>
            <input onChange={ (event) => setEmail(event.target.value) }
                   type="text"
                   placeholder={user.email}
            />
            <p className="description">PASSWORD</p>
            <input onChange={ (event) => setPassword(event.target.value) }
                   placeholder={user.password}
                   type="password"
            />
            <Link to="/account"><button onClick={ handeClick } >Spara</button></Link>
            
        </section>
    )
}

export default UpdateAccount