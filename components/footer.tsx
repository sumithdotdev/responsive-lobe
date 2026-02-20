import Image from "next/image"
import { TbMessageCircleDown } from "react-icons/tb"
import { FaTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-50 gap-y-20 lg:grid-cols-5 lg:gap-x-20 mt-10">
            <div className="flex flex-col gap-y-8">
                <div className="flex gap-x-3 items-center">
                    <p className="font-bold text-gray-800 tracking-wider">lobe</p>
                    <Image src={"/pop.png"} alt="logo" width={32} height={32} />
                </div>
                <div className="flex flex-col gap-y-5 lg:flex lg:flex-col lg:gap-y-6">
                    <p className="text-gray-800">A product by Microsoft.</p>
                    <p className="text-gray-800">All Rights Reserved</p>
                    <p className="text-gray-800">© 2021</p>
                </div>
            </div>
            <div className="flex flex-col text-gray-800 gap-y-10">
                <p className="font-bold">About</p>
                <div className="flex flex-col gap-y-6">
                    <p>Download</p>
                    <p>Overview</p>
                    <p>Examples</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="flex flex-col text-gray-800 gap-y-10">
                <p className="font-bold">General</p>
                <div className="flex flex-col gap-y-6">
                    <p>Notice</p>
                    <p>License</p>
                    <p>Press Inquiry</p>
                    <p>Press Images</p>
                </div>
            </div>
            <div className="flex flex-col text-gray-800 gap-y-10">
                <p className="font-bold">About</p>
                <div className="flex flex-col gap-y-6">
                    <p>Download</p>
                    <p>Overview</p>
                    <p>Examples</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="    flex gap-x-4 col-span-full justify-center">
                <TbMessageCircleDown fill="#04ddb2" color="#04ddb2" size={30} />
                <FaTwitter fill="#04ddb2" color="#04ddb2" size={30} />
                <FaYoutube fill="#04ddb2" color="#04ddb2" size={30} />
            </div>
        </footer>
    )
}