import { CheckCircle, ChevronDown, Info } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const PageHeader = () => {
    return (
        <div className=' flex flex-col gap-5 py-10'>
            <h1 className=' text-3xl md:text-5xl'>
                Best Website builders in the US
            </h1>
            <div className=' border-t border-b w-full flex items-center gap-4 py-2 text-xs md:text-sm text-muted-foreground'>
                <div className=' flex items-center gap-2'>
                    <CheckCircle className=' h-4 w-4' />
                    <p>Last Updated - February 22, 2020</p>
                </div>
                <div className=' flex items-center gap-2'>
                    <Info className=' h-4 w-4' />
                    <p>Advertising Disclosure</p>
                </div>

                <div className=' flex items-center gap-2 mr-0 ml-auto'>
                    <Button variant={"ghost"}>
                        Top Relevent <ChevronDown className=' h-4 w-4 ml-2' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PageHeader