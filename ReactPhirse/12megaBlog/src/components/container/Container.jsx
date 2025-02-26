import React from 'react'

//container ke andar sirf hum styling properties define karte hai

function Container({children}) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            {children} 
        </div>
    )
}

export default Container
