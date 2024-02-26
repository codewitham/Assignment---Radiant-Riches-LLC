import React from 'react'
import ServiceCard from './ServiceCard'
import { Check, CheckCircle, Divide } from 'lucide-react'

const DisplaySearch = () => {
    return (
        <div className=' py-20 flex flex-col gap-5'>
            <ServiceCard highlight={
                <div className=' p-2 text-muted-foreground'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                </div>
            } />
            <ServiceCard highlight={
                <div className=' p-2 text-muted-foreground'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                </div>
            } />
            <ServiceCard highlight={
                <div className=' p-2 text-muted-foreground'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                </div>
            } />

            <ServiceCard highlight={
                <div>
                    <div className=' mx-2 my-2 p-3 bg-[#FFF4ED] rounded-lg flex flex-col gap-2 text-sm' >
                        <div className=' flex items-center gap-2'>
                            <div className=' p-2 rounded-lg bg-white text-blue-500'>
                                9.9
                            </div>
                            <p>building responsive</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <div className=' p-2 rounded-lg bg-white text-blue-500'>
                                9.9
                            </div>
                            <p>building responsive</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <div className=' p-2 rounded-lg bg-white text-blue-500'>
                                9.9
                            </div>
                            <p>building responsive</p>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-2 text-sm my-2'>
                        <h1 className=' font-medium'>Why we love it</h1>
                        <div className=' flex items-center gap-2'>
                            <div className=' rounded-full bg-secondary '>
                                <Check className=' h-4 w-4 text-blue-500' />
                            </div>
                            <p>Documentation</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <div className=' rounded-full bg-secondary '>
                                <Check className=' h-4 w-4 text-blue-500' />
                            </div>
                            <p>Easy Use</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <div className=' rounded-full bg-secondary '>
                                <Check className=' h-4 w-4 text-blue-500' />
                            </div>
                            <p>Out of box</p>
                        </div>
                    </div>
                </div>
            } />
        </div >
    )
}

export default DisplaySearch