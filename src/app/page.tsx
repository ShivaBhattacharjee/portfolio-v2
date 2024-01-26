import React from "react";
import { GitHubLogoIcon, GlobeIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
import Link from "next/link";

import { projectArray } from "@/assets/projects/projectsArray";
import Card from "@/components/projects/card";
import Contact from "@/components/shared/Contact";
import Skills from "@/components/skills/Skills";
import Terminalcomp from "@/components/terminal/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";

const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <h1 className="text-4xl relative md:text-7xl lg:text-8xl font-bold ">
                    Hey, I&apos;m Shiva <span className=" absolute bottom-0 text-8xl lg:text-[12rem] ml-2 animate-pulse">.</span>
                </h1>
                <h1 className=" font-bold lg:text-3xl">
                    I am a <TypingAnimation />
                </h1>
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    I develop open-source <span className="  text-blue-500 uppercase font-bold">full-stack</span> apps/tools and occasionally take on <span className=" uppercase text-blue-500 font-bold tracking-wider">freelance</span> projects.
                </p>
                <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
                    <Link href={"#contact"} className="homepagecontactbtn">
                        <GlobeIcon className=" lg:w-6 h-6" />
                        Contact
                    </Link>
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

                <Skills />

                <div className="mt-12 lg:mt-28">
                    <div className="own</span>flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Terminal
                    </div>
                    <Terminalcomp />
                </div>

                {/* projects */}
                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Projects
                    </div>

                    <div className="flex gap-8 w-full justify-center items-center pl-4 pr-4 flex-col pb-7 md:pb-0">
                        <div className="mt-6 relative place-items-center grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projectArray
                                .filter((_, index) => index === 0 || index === 3)
                                .map((item, index) => (
                                    <Card item={item} index={index} key={index} />
                                ))}
                        </div>
                        <Link href={"/projects"} className="loadmorebtn text-center">
                            Load More
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
                {/* about me */}
                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> About Me
                    </div>
                    <h1>TODO</h1>
                </div>
                <Contact />
            </div>
        </section>
    );
};

export default page;
