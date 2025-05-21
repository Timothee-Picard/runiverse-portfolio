import Image from "next/image";

export default function Card(props) {
    const { title, image, linkTo } = props;
    return (
        <a href={`#${linkTo}`} className="">
            <div className="relative w-[400px] h-[400px]">
                <Image src={image} alt="necropole" fill className="object-cover rounded-3xl"/>
                <h4 className="absolute bottom-6 left-1/2 -translate-x-1/2 uppercase text-white text-5xl font-bold">{title}</h4>
            </div>
        </a>
    )
}