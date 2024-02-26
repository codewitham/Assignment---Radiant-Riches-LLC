import React from 'react'
import { Button } from '../ui/button'

const FilterBox = () => {
    const menu = ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"]
    return (
        <div className=' flex flex-wrap gap-2 w-full'>
            {menu.map((item, index) => (
                <Button size={"sm"} key={index} variant={"outline"} className=' border-none text-sm'>
                    {item}
                </Button>
            ))}
        </div>
    )
}

export default FilterBox