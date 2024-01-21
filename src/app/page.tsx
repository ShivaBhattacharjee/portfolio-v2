import TypingAnimation from "@/components/TypingAnimation";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Send, Terminal } from "lucide-react";
import React from "react";

const page = () => {
    return (
        <section className="lg:max-w-[50%] lg:m-auto p-4 flex gap-3 flex-col justify-center items-left min-h-screen">
            <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                <Terminal size={17} />
                Hello World
            </span>
            <h1 className="text-4xl lg:text-8xl font-bold ">Hey, I'm Shiva.</h1>
            <h1 className=" font-bold lg:text-3xl">
                I am a <TypingAnimation />
            </h1>
            <div className="flex items-center gap-4">
                <button className="rounded-lg w-32 lg:text-2xl p-2 lg:pl-5 lg:pr-5 font-medium border-2 border-black/40 dark:border-white/40">Contact</button>
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
        </section>
    );
};

export default page;
