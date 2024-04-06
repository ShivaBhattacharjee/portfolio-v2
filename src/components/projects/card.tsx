import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface CardProps {
    item: {
        name: string;
        image: string | StaticImageData;
        hostedLink: string;
        githubLink: string;
        description: string;
        type: string;
    };
    index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
    return (
        <div key={item.name} className={`border-2 p-3 dark:border-white/40 border-neutral-600  rounded-lg ${index % 2 != 0 ? "rotate-1" : " rotate-1"}`}>
            <div className="flex justify-between items-center">
                <Image src={item?.image} alt={item.name} height={100} className=" w-16 h-16 rounded-full" width={200}></Image>
                <div className="flex gap-3 flex-wrap items-center">
                    <span className=" text-xs rounded-full font-semibold dark:text-white text-black min-w-24 max-w-44 p-[0.3rem] text-center  dark:bg-white/20 bg-black/20 capitalize">{item.type}</span>
                    {item.githubLink && (
                        <Link href={item.githubLink} target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className=" w-8 h-8" />
                        </Link>
                    )}
                    {item.hostedLink && (
                        <Link rel="noopener noreferrer" target="_blank" href={item.hostedLink} className=" border-2 rounded-full p-1 group">
                            <MoveUpRight className=" group-hover:rotate-12 duration-200" />
                        </Link>
                    )}
                </div>
            </div>
            <h1 className=" text-2xl font-bold mt-4">{item.name}</h1>
            <p className=" text-xs md:text-md whitespace-pre-wrap font-medium">{item.description}</p>
        </div>
    );
};

export default Card;
