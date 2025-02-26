import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <h1 className='bg-gray-400 text-center h-10 pt-2 text-lg'>User: {userid}</h1>
    )
}

export default User
