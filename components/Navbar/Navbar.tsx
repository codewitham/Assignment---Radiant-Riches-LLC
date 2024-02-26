import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-slate-800 w-full text-white'>
            <header className=' flex items-center justify-between gap-5 container mx-auto p-5'>
                <h1 className=' text-2xl font-bold'>LOGO</h1>
                <div className=' px-3 py-2 rounded-lg bg-white flex items-center gap-3 text-primary text-sm'>
                    <Search className=' h-4 w-4 text-blue-500' />
                    <input className=' w-full border-none h-full outline-none' type="text" name="" id="" />
                </div>
                <div className='hidden lg:flex items-center gap-2'>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Categories
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Website Builders
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Today's deals
                        </Button>
                    </Link>
                </div>
                <div className=' block lg:hidden'>
                    <MobileNavbar />
                </div>
            </header>
        </div>
    )
}

export default Navbar