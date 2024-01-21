import TypingAnimation from "@/components/TypingAnimation";
import { TechStack } from "@/components/stacks";
import { GitHubLogoIcon, GlobeIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { MouseIcon, MoveDown, Terminal } from "lucide-react";
import React from "react";

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
                    I develop open-source <span className=" dark:text-blue-300 text-blue-500 uppercase font-bold">full-stack</span> apps/tools and occasionally take on <span className=" uppercase dark:text-blue-300 text-blue-500 font-bold tracking-wider">freelance</span> projects.
                </p>
                <div className="flex items-center gap-6">
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
                    <a href="https://instagram.com/shivahereig" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>

                <div className=" opacity-70 mt-12 justify-center flex items-center flex-col">
                    <MouseIcon size={40} className=" animate-bounce" />
                    <span className="flex gap-2 text-sm font-medium justify-center items-center">Scroll Down</span>
                </div>

                <div className=" mt-8 w-full flex md:justify-center md:items-center md:text-center flex-col lg:mt-28">
                    <h1 className=" text-2xl tracking-wide lg:text-4xl font-bold  md:border-b-2 ">Skills</h1>
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default page;
