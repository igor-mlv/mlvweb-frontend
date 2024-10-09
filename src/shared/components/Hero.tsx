import React from 'react'

function Hero({ data }: any) {
    return (
        <div className='w-[200px] '>
            <p className='text-[50px]'>
                {data.title}
            </p>
        </div>
    )
}

export default Hero