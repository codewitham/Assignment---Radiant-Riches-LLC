import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'

const Footer = () => {
    return (
        <div className=' bg-slate-800 '>
            <div className=' container mx-auto py-20 px-5 text-white'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div>
                        <h1 className=' text-lg font-semibold  uppercase'>
                            Categories
                        </h1>

                        <div className=' mt-4 flex flex-col gap-2 text-muted-foreground'>
                            <Link href={"/"}>Web Builder</Link>
                            <Link href={"/"}>Hosting</Link>
                            <Link href={"/"}>Data Center</Link>
                            <Link href={"/"}>Robotic-Automation</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-lg font-semibold  uppercase'>
                            Contact
                        </h1>

                        <div className=' mt-4 flex flex-col gap-2 text-muted-foreground'>
                            <Link href={"/"}>Contact</Link>
                            <Link href={"/"}>Privacy Policy</Link>
                            <Link href={"/"}>Terms Of Service</Link>
                            <Link href={"/"}>Categories</Link>
                            <Link href={"/"}>About</Link>
                        </div>
                    </div>

                    <div>
                        <Button variant={"ghost"}>
                            United States <ChevronDown className=' h-4 w-4 ml-2' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer