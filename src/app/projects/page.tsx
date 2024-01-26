import React from "react";
import Image from "next/image";
export function generateMetadata() {
    return {
        title: "Projects - Shiva",
    };
}
import reactmemoji from "@/assets/projects/memoji.svg";
import { projectArray } from "@/assets/projects/projectsArray";
import workscribble from "@/assets/projects/work-scribble.svg";
import Card from "@/components/projects/card";
const Projects = () => {
    return (
        <div className=" lg:max-w-[50%] lg:m-auto min-h-screen overflow-hidden ">
            <div className="flex w-full justify-between items-center pr-3 ">
                <Image src={workscribble} height={300} width={300} alt="work-scribble" priority className=" lg:mt-6" />
                <Image src={reactmemoji} height={140} width={140} alt="reaction-memoji" className=" fill-black dark:fill-white"></Image>
            </div>
            <div className="flex pl-4 pr-4 flex-col pb-7 md:pb-0">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectArray.map((item, index) => (
                        <Card item={item} index={index} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
