import React from 'react'

function CardPhirse(props) {
    return (
        <>
            <div className='w-[300px] rounded-md border mt-2'>
                <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt=""  className='w-full rounded-md '/>
                <div className='m-5'>
                    <p className='font-semibold text-md my-3'>{props.username}</p>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?</p>
                    <button className='mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-10 focus-visible:outline-offset-2 focus-visible:outline-red-600'>{props.btnText}</button>
                </div>
            </div>
        </>
    )
}

export default CardPhirse
