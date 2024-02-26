import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const PageNavigation = () => {
    const menu = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"]
    return (
        <div className=' flex gap-2 flex-wrap text-sm py-5'>
            {menu.map((item, index) => (
                <div key={index} className=' flex items-center'>
                    <Link href={"/"} className=' text-muted-foreground p-2'>
                        {item}
                    </Link>
                    {index !== menu.length - 1 && <div>&gt;</div>}
                </div>
            ))}
        </div>
    )
}

export default PageNavigation