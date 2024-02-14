import React from "react";
export function generateMetadata() {
    return {
        title: "About - Shiva",
        description: "Hi. I'm Shiva Bhattacharjee, a self-taught full stack developer from Guwahati Assam India. I'm a student currently pursuing my bachelors in Computer Science and Technology, I love build software that solves real world problems which is probably why everything I build is Open Source.My everyday tech stack includes NEXTJS , Typescript , Tailwind , and so on ....",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutmemoji from "@/assets/about/confused-memoji.svg";
const AboutPage = () => {
    return (
        <section className=" p-4 w-full lg:max-w-[50%] lg:m-auto">
            <div className="flex flex-col gap-4">
                <h1 className=" text-3xl lg:text-5xl font-bold tracking-wide mt-7">
                    Hi. I&apos;m{" "}
                    <a href="https://twitter.com/sh17va" rel="noopener noreferrer" target="_blank" className=" text-balance text-blue-500">
                        @sh17va{" "}
                    </a>
                    🤟
                </h1>
                <Image src={aboutmemoji} alt="confused-memoji" height={160} width={160}></Image>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Info />
                    Short Bio
                </h2>
                <p className="text-md lg:text-2xl flex flex-col gap-2 whitespace-break-spaces font-normal">
                    <span>
                        Hey , stranger 👋 I&apos;m Shiva Bhattacharjee, a self-taught full stack developer from Guwahati Assam India. I&apos;m a student currently pursuing my bachelors in <span className=" font-bold">Computer Science and Technology</span>, I love build software that solves real world problems which is probably why everything I build is{" "}
                        <a href="https://github.com/shivabhattacharjee" target="_blank" rel="noopener noreferrer" className=" font-bold text-green-500">
                            Open Source
                        </a>
                        .
                    </span>

                    <span>
                        My everyday tech stack includes <span className="font-bold">NEXTJS , Typescript , Tailwind , and so on.... </span>(the list goes long lol 🔋)
                    </span>
                    <span>
                        My Operating System of choice is{" "}
                        <a href="https://fedoraproject.org/" target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold uppercase">
                            Fedora
                        </a>{" "}
                        and{" "}
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold uppercase">
                            VSCODE
                        </a>{" "}
                        for IDE .
                    </span>
                    <span>
                        I am an active participant in hackathons too ( have won a few of them) as I love building protoypes in a rushing enviroment. I was also a finalist in{" "}
                        <a href="https://www.sih.gov.in/#" className=" text-orange-400 font-bold" target="_blank" rel="noopener noreferrer">
                            Smart India Hackathon 2023
                        </a>{" "}
                    </span>
                    <span>
                        So if you are a hackathon organiser , looking for a teammate or just want to have a chat with me feel free to connect with me my socials are listed below , do drop a visit to my{" "}
                        <Link href={"/projects"} className=" font-bold capitalize text-lg lg:text-3xl">
                            projects
                        </Link>
                    </span>
                </p>
                <div className="flex justify-center flex-wrap gap-8 items-center mt-5 mb-5">
                    <Link href={"/#contact"} className="loadmorebtn flex justify-center items-center">
                        Leave A Message
                    </Link>
                    <Link href={"/projects"} className="loadmorebtn flex justify-center items-center">
                        Visit Projects
                    </Link>
                </div>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Zap />
                    Lets Connect
                </h2>
                <div className="flex gap-2 flex-wrap mt-2 mb-2 items-center">
                    <a href="https://github.com/shivabhattacharjee" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://twitter.com/sh17va" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:itsshivahere@outlook.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://instagram.com/shivahereig" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>
                <p className=" text-md lg:text-2xl whitespace-break-spaces font-normal">
                    I&apos;m excited to connect with others via email (
                    <a href="mailto:itsshivahere@outlook.com?body=Hello" rel="noopener noreferrer" target="_blank" className=" text-blue-500 italic font-bold">
                        itsshivahere@outlook.com
                    </a>
                    ) and{" "}
                    <a href="https://twitter.com/sh17va" rel="noopener noreferrer" target="_blank" className="font-bold italic text-blue-500">
                        Twitter
                    </a>{" "}
                    to chat about projects and ideas I&apos;m taking on freelance projects and I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it&apos;s a good fit.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
