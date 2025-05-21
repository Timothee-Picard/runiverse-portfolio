import Image from "next/image";

export default function Section(props) {
    const { right, anchor, title, description, image, color } = props
    return (
        <div className="w-full aspect-[1366/800] relative" id={anchor}>
            <Image src={`/${image}`}
                   className="object-cover object-[0px_45%]" alt='aaa' fill />
            <div className={`relative h-full w-5/12 ${right ? 'text-right ml-auto mr-14' : 'text-left mr-auto ml-14'} flex flex-col justify-center`}>
                <div className={`flex flex-col gap-20 ${right ? 'items-end' : 'items-start'}`}>
                    <h2 className={`text-6xl uppercase font-bold relative w-fit text-[${color}]`}>{title}<div className={`absolute top-full ${right ? 'right-0' : 'left-0'} h-1 w-10/12 mt-2 bg-[${color}]`} /></h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}