"use client";
import { TerminalSquare } from "lucide-react";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";
import HelpCommand from "./HelpCommand";
import { useRouter } from "next/navigation";

interface Command {
    id: number;
    input: string;
    output: string | JSX.Element;
    time: string;
}

const Terminalcomp: React.FC = () => {
    const [input, setInput] = useState("");
    const [commands, setCommands] = useState<Command[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const getFormattedTime = (): string => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds}${amPm}`;
    };

    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            processCommand();
            scrollTerminalToBottom();
        }
    };

    const scrollTerminalToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    const processCommand = () => {
        const command = input.trim().toLowerCase();

        let output: string | JSX.Element;
        switch (command) {
            case "hello":
                output = "Yahallo! how can i help you??";
                break;
            case "sudo":
            case "su":
                output = "Why do you need sudo cheeky brat ?";
                break;
            case "ls -a":
                output = ".open_me";
                break;
            case "cat .open_me":
                window.location.href = "https://www.youtube.com/watch?v=hf1DkBQRQj4";
                output = "";
                break;
            case "shiva":
                output = "Hello there! I am Shiva, a Full Stack Developer experienced in the MERN stack, currently pursuing my Bachelor's  in Computer Science and Engineering. Type about to know more about me";
                break;
            case "about":
                router.push("/about");
                output = "";
                break;
            case "blogs":
                router.push("/blogs");
                output = "";
                break;
            case "proj":
                router.push("/projects");
                output = "";
                break;
            case "help":
                output = <HelpCommand />;
                break;
            case "ip":
                output = "IP Address: 192.168.1.1";
                break;
            case "quibble":
                output = "Under development";
                break;
            case "clear":
                setCommands([]);
                output = "Terminal cleared.";
                break;
            default:
                if (command.startsWith("echo ")) {
                    output = command.substring(5);
                } else if (command.startsWith("rm")) {
                    window.location.href = "https://www.youtube.com/watch?v=AlLhMySQTlo";
                    output = "";
                } else if (command.startsWith("sex") || command.startsWith("fuck")) {
                    window.location.href = "https://www.youtube.com/watch?v=Rl1ImG2b1k8&t=51s";
                    output = "";
                } else if (/^\d+[+\-*/]\d+$/.test(command)) {
                    try {
                        const result = eval(command);
                        output = result;
                    } catch (error) {
                        output = "Error in evaluating the expression.";
                    }
                } else {
                    output = `Cannot find command: ${command}. Type 'help' for more info.`;
                }
                break;
        }

        const newCommand: Command = {
            id: Date.now(),
            input,
            time: getFormattedTime(),
            output,
        };

        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setInput("");
    };

    return (
        <div ref={terminalRef} className="border-2 p-2 border-black/30 dark:border-white/30 rounded-lg h-[400px] overflow-y-auto w-full">
            <div className="flex justify-between mb-5 items-center sticky top-0 dark:bg-black/20 z-20 backdrop-blur-lg bg-white">
                <div className="flex gap-3" onClick={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                    <div className="w-4 h-4 duration-200 cursor-pointer bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 duration-200 cursor-pointer bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 cursor-pointer duration-200 bg-green-500 rounded-full"></div>
                </div>
                <span className="border flex gap-3 font-medium text-sm border-white/30 rounded-lg p-2 justify-center items-center">
                    <TerminalSquare size={20} />
                    Zsh
                </span>
            </div>
            <h1 className="text-sm font-medium  opacity-70 tracking-wide">Welcome to my website! Get started by typing `help` command below</h1>
            <span className=" text-xs opacity-70 mb-3">Linux enthusiasts i have added a few easter eggs take time to discover</span>
            {commands.map((command) => (
                <div key={command.id} className="mt-2 flex  justify-between">
                    <div className=" w-full">
                        <p className="text-md font-medium opacity-70 flex items-center gap-3 w-full">
                            {" "}
                            <span className=" text-green-500 font-bold text-2xl">{">"}</span> {command.input}
                        </p>
                        <p className="text-sm w-full font-medium opacity-70">{command.output}</p>
                    </div>
                    <span className="text-sm opacity-60">{command.time}</span>
                </div>
            ))}
            <div className="flex justify-between items-center text-md">
                <div className="w-full flex items-center gap-3">
                    <span className=" text-2xl font-bold">{">"}</span>
                    <input type="text" value={input} onChange={handleInputChange} onKeyPress={(e) => input.length > 0 && handleKeyPress(e)} className="bg-transparent w-[80%] outline-none border-none focus:outline-none" />
                </div>
                <span className="text-sm opacity-60">{currentTime}</span>
            </div>
        </div>
    );
};

export default Terminalcomp;
