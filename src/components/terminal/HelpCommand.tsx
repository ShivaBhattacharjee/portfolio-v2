import React from "react";

const HelpCommand = () => {
    return (
        <div className="mt-2 ">
            <p className="text-sm font-medium opacity-70">Available commands:</p>
            <ul className="text-sm font-medium tracking-wide flex flex-col gap-2">
                <li className=" mt-2 flex gap-2 items-center">
                    shiva: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Displays a brief info about me</span>
                </li>
                <li className=" mt-2 flex gap-2 items-center">
                    echo: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">prints whatever written after echo</span>
                </li>
                <li className="flex items-center gap-2">
                    ip: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">displays ip address</span>
                </li>
                <li className=" mt-2 flex gap-2 items-center">
                    quibble: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Enables quibble ai chatbot inside terminal</span>
                </li>
                <li className=" mt-2 flex gap-2 items-center">
                    qexit: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Exists quibble ai chatbot session</span>
                </li>
                <li className="flex items-center gap-2">
                    proj: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">navigates to project page</span>
                </li>
                <li className="flex items-center gap-2">
                    about: <span className="text-green-800 dark:text-green-500 opacity-70 text-xs">Displays a brief about myself and my hobbies</span>
                </li>
                <li className="flex items-center gap-2">
                    blogs: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Navigate to blog page</span>
                </li>
                <li className="flex items-center gap-2">
                    clear: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Clears terminal</span>
                </li>
            </ul>
        </div>
    );
};

export default HelpCommand;
