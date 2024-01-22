import React from "react";
export function generateMetadata() {
    return {
        title: "Projects - Shiva",
    };
}
const Projects = () => {
    return (
        <div className=" lg:max-w-[50%] lg:m-auto min-h-screen ">
            <div className="flex p-5 flex-col">
                <h1 className=" font-bold text-3xl lg:text-5xl lg:mt-8 capitalize tracking-wide">Nice stuff I&apos;ve built</h1>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={item} className={`border-2 dark:border-white/40 border-neutral-600 h-44 rounded-lg ${index % 2 != 0 ? "rotate-1" : " rotate-1"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
