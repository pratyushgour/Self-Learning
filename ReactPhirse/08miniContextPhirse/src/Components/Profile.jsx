import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return(
        <div>Please Login</div>
    )

    else return (
        <div>Profile: {user.username}</div>
    )
}

export default Profile
