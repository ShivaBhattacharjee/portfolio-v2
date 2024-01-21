import Terminalcomp from "@/components/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";
import { TechStack } from "@/components/stacks";
import { GitHubLogoIcon, GlobeIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { MailPlus, MouseIcon, Pi, Terminal } from "lucide-react";
import React from "react";
const skills = ["React", "Next.js", "Typescript", "Tailwind CSS", "Rust", "Docker", "SQL", "MongoDB", "NodeJS", "Redux", "Socket.io", "Python", "GIT", "GO"];
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[80%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <h1 className="text-4xl relative lg:text-8xl font-bold ">
                    Hey, I'm Shiva <span className=" absolute bottom-0 text-8xl lg:text-[12rem] ml-2 animate-pulse">.</span>
                </h1>
                <h1 className=" font-bold lg:text-3xl">
                    I am a <TypingAnimation />
                </h1>
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    I develop open-source <span className="  text-blue-500 uppercase font-bold">full-stack</span> apps/tools and occasionally take on <span className=" uppercase text-blue-500 font-bold tracking-wider">freelance</span> projects.
                </p>
                <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
                    <button className="rounded-lg hover:bg-black hover:dark:bg-white duration-200 hover:text-white hover:dark:text-black w-32 lg:text-2xl p-2 lg:pl-5 lg:pr-5 font-medium border-2 border-black/40 dark:border-white/40 flex justify-center items-center gap-2">
                        <GlobeIcon />
                        Contact
                    </button>
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

                <div className=" opacity-70 mt-12 justify-center flex items-center flex-col">
                    <MouseIcon size={40} className=" animate-bounce" />
                    <span className="text-sm font-medium">Scroll Down</span>
                </div>

                <div className=" mt-8 w-full flex md:justify-center md:items-center md:text-center flex-col lg:mt-28">
                    <h1 className=" text-4xl flex gap-2 items-center tracking-wide lg:text-7xl font-bold  md:border-b-2 ">
                        <Pi className=" opacity-70 lg:w-12 lg:h-12" /> Skills
                    </h1>
                    <p className=" mt-2 lg:mt-7 text-sm md:text-lg opacity-70 font-medium uppercase tracking-widest ">I mostly craft full stack web apps using M.E.R.N stack</p>
                    <div className=" md:hidden mt-4 flex gap-2 flex-wrap">
                        {skills.map((skill, index) => (
                            <span key={index} className={`text-sm font-medium dark:text-white border-2 border-neutral-950  dark:bg-neutral-700 dark:border-white/10 dark:shadow-lg p-2 rounded-lg mt-2 mr-2 ${index % 2 === 1 ? " rotate-3" : " -rotate-3"}`}>
                                {skill}
                            </span>
                        ))}
                    </div>
                    <TechStack />
                </div>

                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Terminal
                    </div>
                    <Terminalcomp />
                </div>
            </div>
        </section>
    );
};

export default page;
