import Image from "next/image";

export default function Hero() {
    return (
        <div className="px-10 flex flex-col items-center justify-center">
            <div className="relative w-full h-[1000px]">
                <Image className="object-cover" src="/hero.png" alt="" fill />
                <Image className="object-cover rotate-180" src="/hero-foreground.png" alt="" fill />
            </div>
            <div className="z-10 -mt-50 flex gap-12 flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[#9d1b24] text-8xl uppercase">runiverse</h1>
                    <h2 className="text-white font-bold text-6xl uppercase">et si courir devenait un jeu ?</h2>
                </div>
                <button className="bg-[#9d1b24] text-white text-2xl uppercase font-bold px-10 py-4 rounded-3xl">rejoindre la beta</button>
            </div>
        </div>
    )
}