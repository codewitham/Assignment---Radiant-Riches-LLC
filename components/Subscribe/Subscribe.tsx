import React from 'react'

const Subscribe = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 py-20'>
            <h1 className=' text-3xl md:text-5xl'>
                Sign up and get exclusive special deals
            </h1>
            <div>
                <div className=' hover:border hover:border-blue-500 w-full h-14 rounded-lg  overflow-hidden flex items-center'>
                    <input type="text" className=' h-full w-full outline-none border-none bg-white p-2  flex-1' />
                    <button className=' h-full  bg-blue-500 text-white w-fit py-2 px-4'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe