import React from 'react'
import DealsCard from './DealsCard'

const DisplayRelatedDeals = () => {
    return (
        <div className=' flex flex-col gap-10 py-10'>
            <h1 className=' text-3xl md:text-5xl'>Related deals you might like for</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <DealsCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default DisplayRelatedDeals