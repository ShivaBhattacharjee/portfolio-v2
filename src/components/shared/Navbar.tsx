"use client";

import React from "react";
import { Home, Info, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "../ui/darkmodebtn";

const navbarItems = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Projects",
        href: "/projects",
        icon: TerminalIcon,
    },
    {
        name: "About",
        href: "/about",
        icon: Info,
    },
];
const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="z-50 lg:sticky max-w-[90%] m-auto lg:top-0">
            {/* ipad & desktop navbar */}
            <section className="flex w-full justify-between items-center  m-auto p-2 rounded-full">
                <Link href={"/"} className=" uppercase text-3xl font-bold tracking-widest relative">
                    Shiva <span className=" text-blue-500 font-bold text-8xl absolute -bottom-2">.</span>{" "}
                </Link>
                <div className=" hidden lg:flex gap-5 min-w-96 justify-center items-center border-2 border-white/30 bg-black/10 backdrop-blur-lg rounded-full p-2">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link href={item.href} key={item.name} className={`${isActive && "bg-white text-black"} flex items-center justify-center gap-2 uppercase hover:bg-white duration-200 ease-linear w-36  font-medium hover:text-black rounded-full p-2 text-center `}>
                                <item.icon /> {item.name}
                            </Link>
                        );
                    })}
                </div>
                <ModeToggle />
            </section>
            {/* mobile navbar */}
            <section className="fixed z-50 md:w-[30rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center w-full">
                <div className="border-black/10 dark:border-white/10 flex gap-3 flex-wrap items-center w-[60%] justify-between p-2 bg-black/20 dark:bg-white/5 backdrop-blur-lg border-2 rounded-full">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href} className={` ${isActive && "bg-[#3c3939] dark:bg-white/30 rounded-full text-white dark:text-black"} p-2 text-black dark:text-white`}>
                                <item.icon />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
