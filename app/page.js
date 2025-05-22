import Image from "next/image";
import Counter from "@/components/counter";
import Hero from "@/components/hero";
import CardList from "@/components/cardList";
import Section from "@/components/section";

export default function Home() {
  return (
    <div>
       <div className="flex flex-col items-center justify-center p-6 w-fit">
           <Image className="-my-10" src="/logo.png" alt="logo" width={200} height={200} />
           <span className="uppercase">Runiverse</span>
       </div>
        <Counter />
        <Hero />
        <CardList />
        <div className="flex flex-col gap-20 mt-20">
            <h2 className="text-5xl font-bold uppercase text-center">choisis ton univers</h2>
            <Section
                title="Necropole"
                description="Le monde est tombé, les rues envahies par des zombies affamés. Chaque pas que tu fais te rapproche du danger, mais aussi de la liberté. Les morts-vivants te traquent, le sol est boueux, le temps est contre toi. Mais si tu veux survivre, tu n’as pas le choix : continue à courir. Les zombies ne s’arrêtent jamais, et toi non plus. Fuir ou mourir. À toi de décider."
                anchor="necropole"
                image="bg-necropole.png"
                color="#9d1b24"
                right
            />
            <Section
                title="Exode"
                description="Les villes ne sont plus que des ruines, englouties par le silence et la poussière. Le vent siffle à travers les carcasses de béton, portant les échos d’un monde disparu. Derrière toi, le danger rôde—famine, pillards, tempêtes. Devant toi, l’inconnu. Le monde a pris fin. Mais ton histoire, elle, ne fait que commencer."
                anchor="exode"
                image="bg-exode.png"
                color="#017425"
            />
            <Section
                title="Fuite"
                anchor="fuite"
                description="Les sirènes hurlent derrière toi, tes poumons brûlent, ton cœur bat à tout rompre. Ruelles sombres, avenues désertes, chaque pas peut te sauver… ou te condamner. Pourquoi toi ? Quel secret cherches-tu à percer ? Pas le temps d’y penser. Seule compte la course. Si tu t’arrêtes, c’est fini."
                image="bg-fuite.png"
                color="#0448a5"
                right
            />
           {/* <Section
                title="Spectre"
                anchor="spectre"
                image="bg-necropole.png"
            />
            <Section
                title="légende"
                anchor="legende"
                image="bg-necropole.png"
                right
            />
            <Section t
                     itle="épopée"
                     anchor="epopee"
                     image="bg-necropole.png"
            />*/}
        </div>
    </div>
  );
}
