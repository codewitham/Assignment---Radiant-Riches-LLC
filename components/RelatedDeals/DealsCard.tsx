import React from 'react'
import { Button } from '../ui/button'

const DealsCard = () => {
    return (
        <div className='flex flex-col gap-2 w-full bg-white rounded-lg overflow-hidden'>
            <div className=' object-contain w-full  h-48 flex flex-col items-center justify-center'>
                <img src="/image.png" alt="image" className=' h-fit w-fit' />
            </div>
            <div className=' flex flex-col gap-2 p-5 '>
                <div className=' flex gap-2 flex-wrap text-xs w-full '>
                    <div className=' rounded-lg p-2 bg-secondary text-[#074786]'>
                        20% Off
                    </div>
                    <div className=' rounded-lg p-2 bg-secondary text-[#074786]'>
                        Limited Time
                    </div>
                </div>

                <h1 className='text-xl'>
                    Webbuilder 1
                </h1>
                <p className=' text-muted-foreground'>
                    Computer  Modern clasic with wix support
                </p>
                <div className=' flex items-end gap-2'>
                    <div className=' text-lg'>$39.96</div>
                    <div className=' text-xs text-muted-foreground pt-2 pb-1'>
                        $49.96 <span className=' text-red-500'>(20% Off)</span>
                    </div>
                </div>
                <Button className=' rounded-lg w-full bg-blue-500' size={"lg"} >
                    View Deal
                </Button>
            </div>
        </div>
    )
}

export default DealsCard