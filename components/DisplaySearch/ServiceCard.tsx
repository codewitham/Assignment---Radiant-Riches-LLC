import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown, Trophy } from 'lucide-react'

const ServiceCard = ({ highlight }: any) => {
    return (
        <div className=' w-full grid grid-cols-1 md:grid-cols-4 gap-5 rounded-xl bg-white '>
            <div className=' relative flex flex-col gap-2 items-center justify-center min-h-48 h-full w-full'>
                <img src="/image.png" alt="image" className=' h-fit w-fit' />
                <h1>builder 1</h1>

                <div className=' absolute top-[-10px] left-[-10px] flex flex-col gap-2'>
                    <div className='  rounded-r-lg bg-orange-500 py-2 px-3 flex items-center text-white text-sm'>
                        <Trophy className=' h-4 w-4 mr-2' /> Best Choice
                    </div>
                    <Button variant={"outline"} className=' rounded-full' size={"icon"}>
                        1
                    </Button>
                </div>
            </div>
            <div className=' col-span-2 flex flex-col gap-2 p-5'>
                <div className=' text-muted-foreground'>
                    <span className=' font-semibold text-primary mr-2'>
                        WixPro 72-Inch Responsive Website Builder-
                    </span>

                    Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                </div>
                <div>
                    <h1 className=' font-semibold'>Main highlights</h1>
                    {highlight}
                    <Button variant={"ghost"} className=' text-blue-500'>
                        Show More <ChevronDown className=' h-4 w-4 ml-2' />
                    </Button>
                </div>
            </div>
            <div className=' h-full w-full flex flex-col gap-5 justify-between pb-5'>
                <div className=' mx-5 p-5 bg-[#F3F9FF] rounded-b-lg flex flex-col items-center justify-center text-center gap-2'>
                    <h1 className='text-xl'>9.8</h1>
                    <p className=' text-muted-foreground'>Excellent</p>
                    <img src="/rating.png" alt="rating" />
                </div>
                <div className=' mx-5'>
                    <Button className=' rounded-lg w-full bg-blue-500 ' size={"lg"} >
                        View Deal
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard