"use client"

import Image from "next/image"
import { useState } from "react";
import { IoMenu } from "react-icons/io5"
import { FaX } from "react-icons/fa6";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        console.log(open)
        setOpen((prev) => !prev)
    }

    return (
        <div className="text-black flex justify-between mt- px-10 items-center text-2xl ">
            {/* logo */}
            <div className="flex items-center gap-x-2 mt-3">
                <Image src={"/pop.png"} width={32} height={32} alt="" />
                <p className="font-bold text-gray-800">lobe</p>
            </div>
            <div className="justify-center w-full text-gray-700 items-center hidden lg:flex sm:gap-x-12 text-xl">
                <p>Overview</p>
                <p>Examples</p>
                <p>Tour</p>
                <p>Blog</p>
                <p>Help</p>
            </div>

            {open &&
                <div className="bg-[#2ffdd4] z-50 p-4 rounded-lg space-y-3 justify-center absolute top-15 right-4 text-[#00715a] items-center lg:flex sm:gap-x-12 text-lg">
                    <p>Overview</p>
                    <p>Examples</p>
                    <p>Tour</p>
                    <p>Blog</p>
                    <p>Help</p>
                    <button className="p-3 bg-[#04ddb2] text-white rounded-lg">Download</button>
                </div>
            }
            {
                open ? <FaX onClick={toggleMenu} className="relative mt-3" /> : <IoMenu size={30} className="relative mt-3 lg:hidden" onClick={toggleMenu} />
            }
            <div className="hidden lg:flex mt-3">
                <button className="p-3 bg-[#04ddb2] text-white rounded-lg">Download</button>
            </div>
        </div>
    )
}