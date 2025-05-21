import Card from "@/components/card";

export default function CardList() {
    return (
        <div className="mt-12 flex flex-col gap-20">
            <div className="flex items-center justify-evenly">
                <Card title="Necropole" image="/necropole.png" linkTo="necropole" />
                <Card title="Exode" image="/exode.png" linkTo="exode" />
                <Card title="Fuite" image="/fuite.png" linkTo="fuite" />
            </div>
            <div className="flex items-center justify-evenly">
                <Card title="Spectre" image="/spectre.png" linkTo="spectre" />
                <Card title="Légende" image="/legende.png" linkTo="legende" />
                <Card title="épopée" image="/epopee.png" linkTo="epopee" />
            </div>
        </div>
    )
}