import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className=' text-white' variant={"ghost"} size={"icon"}>
                    <Menu className=' h-4 w-4' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>LOGO</SheetTitle>
                    <SheetDescription>
                        Find Best Services on our platform.
                    </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col mt-10'>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className=' w-full justify-start'>
                            Categories
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className='w-full justify-start'>
                            Website Builders
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className='w-full justify-start'>
                            Today's deals
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar