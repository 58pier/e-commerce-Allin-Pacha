import React from 'react'
import { useState } from 'react';
import { api } from '../api/apiConfig';

interface loginProps {
    username: string,
    password: string,
}

export const login = (/* {username,password }: loginProps */) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const user = {
        username: 'mor_2314',
        password: '83r5^_'
    }

    api.post('auth/login', user)
    .then(res => {
        res.data.token ?   (
            setLoggedIn(true),
            localStorage.setItem('token', res.data.token)
        ) : setLoggedIn(false);
    })

    return loggedIn
}
export const register = (/* {username,password }: loginProps */) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const user = {
        username: 'mor_2314',
        password: '83r5^_'
    }

    api.post('auth/login', user)
    .then(res => {
        res.data.token ?   (
            setLoggedIn(true),
            localStorage.setItem('token', res.data.token)
        ) : setLoggedIn(false);
    })

    return loggedIn
}
