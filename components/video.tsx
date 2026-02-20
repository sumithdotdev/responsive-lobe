import Image from "next/image"

export default function VideoBody() {
    return (
        <div className="max-w-400 mt-10 w-full flex flex-col items-center gap-y-8 ">
            <div className="text-5xl flex gap-x-2 sm:text-6xl">
                <p className="text-[#333] font-bold tracking-wide">Lobe</p>
                <p className="text-[#04ddb2] font-bold tracking-wide">Tour</p>
            </div>
            <div className="text-[#333] text-sm flex flex-col items-center tracking-widest sm:text-lg ">
                <p>Build your first machine learning in ten</p>
                <p>minutes. No code or experience required</p>
            </div>
            <div className="w-80 h-80 relative md:w-160 md:h-120 lg:w-250 lg:h-184">
                <Image src={"/hill.jpg"} className="rounded-xl" fill alt="" />
            </div>
            <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-center gap-y-10">
                <div className="flex flex-col font-bold text-2xl lg:mt-10 lg:text-5xl text-[#333] lg:flex lg:flex-col items-center lg:font-bold ">
                    <p className="font-black">Train your app</p>
                    <p className="font-black">with Lobe</p>
                </div>
                <button className="px-10 font-bold py-4 rounded-4xl text-2xl bg-[#04ddb2]">Download</button>
            </div>
        </div>
    )
}