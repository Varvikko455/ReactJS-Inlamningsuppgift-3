import React from 'react';

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Account(){

    const user = useSelector((state) => {return state})

    return(
        <section>
            <h1 className="header">Välkommen!</h1>
            <h1>Ditt konto</h1>
            <p className="description">NAME</p>
            <label className="user-information">{ user.name }</label>
            <p className="description">EMAIL</p>
            <label className="user-information">{ user.email }</label>
            <p className="description">PASSWORD</p>
            <label className="user-information"
                   type="password"
            >{ user.password }</label>
            <Link to="/updateAccount"><button>Ändra</button></Link>
        </section>
    )
}

export default Account