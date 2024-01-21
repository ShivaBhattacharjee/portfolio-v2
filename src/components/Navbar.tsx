"use client";
import { Home, PersonStanding, Blocks, TerminalIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
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
        icon: PersonStanding,
    },
    {
        name: "Blogs",
        href: "/blogs",
        icon: Blocks,
    },
];
const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0">
            {/* ipad & desktop navbar */}
            <section className="hidden md:flex justify-center items-center  m-auto p-2 mt-4 rounded-full">
                <div className="flex gap-5 min-w-96 justify-center items-center border-2 border-white/30 bg-black/40 backdrop-blur-lg rounded-full p-2">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link href={item.href} key={item.name} className={`${isActive && "bg-white text-black"} flex items-center justify-center gap-2 uppercase hover:bg-white duration-200 ease-linear w-36  font-medium text-lg hover:text-black rounded-full p-2 text-center `}>
                                <item.icon /> {item.name}
                            </Link>
                        );
                    })}
                </div>
            </section>
            {/* mobile navbar */}
            <section className="fixed md:hidden rounded-t-lg flex flex-wrap gap-2 bg-black/40 justify-between items-center p-4 bottom-0 backdrop-blur-xl border-t-2 border-white/20 w-full">
                {navbarItems.map((item) => {
                    return (
                        <Link key={item.name} href={item.href} className="flex text-center justify-center items-center flex-col gap-2">
                            <item.icon />
                            <span className="uppercase text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </section>
        </nav>
    );
};

export default Navbar;
