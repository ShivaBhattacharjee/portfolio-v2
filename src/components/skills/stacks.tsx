"use client";

import React, { useRef } from "react";
import { Cpu } from "lucide-react";
import Image from "next/image";

import ConnectionLine from "./connection-line";

import { docker, git, go, mongodb, nextjs, nodejs, postgresssql, python, react, redux, rust, socketio, tailwind, ts } from "@/assets/skills/index";
import { cn } from "@/lib/utils";

type TechBoxProps = {
    pinId: string;
    title: string;
    image: string;
    color: string;
    boxRef: React.RefObject<HTMLDivElement>;
};

type Tech = {
    title: string;
    image: string;
    color: string;
};

const TechBox: React.FC<TechBoxProps> = (props) => {
    const direction = props.pinId.split("-")[0];
    const borderMap: Record<string, string> = {
        stage1: "only-bottom",
        stage2: "nothing",
        stage3: "nothing",
        stage4: "only-top",
    };

    return (
        <div id={props.pinId.replace("pin", "div")} ref={props.boxRef} className={cn("relative flex-col w-36 h-36 ", borderMap[direction] || "")}>
            <Image src={props.image} width={300} height={300} alt={props.title} className="rounded-xl scale-50" />
        </div>
    );
};

const renderTechBoxes = (techArray: Tech[], idPrefix: string, refs: React.RefObject<HTMLDivElement>[]) => {
    return (
        <div className="w-full flex justify-between items-center">
            {techArray.map((tech, idx) => {
                return <TechBox key={`${idPrefix}-${idx + 1}`} pinId={`${idPrefix}-pin-${idx + 1}`} title={tech.title} image={tech.image} color={tech.color} boxRef={refs[idx]} />;
            })}
        </div>
    );
};

export const TechStack = () => {
    const refs = {
        stage1: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage2: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage3: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage4: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
    };
    return (
        <section className="relative w-full hidden md:flex flex-col justify-between items-center p-5 gap-8">
            {renderTechBoxes(techs.stage1, "stage1", refs.stage1.techbox)}
            {renderTechBoxes(techs.stage2, "stage2", refs.stage2.techbox)}
            {renderTechBoxes(techs.stage3, "stage3", refs.stage3.techbox)}
            {renderTechBoxes(techs.stage4, "stage4", refs.stage4.techbox)}
            <div id="cpu" className="absolute w-40 h-20 rounded-2xl  flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-muted z-20">
                {renderPins(5, "stage1", refs.stage1.pins)}
                {renderPins(2, "stage2", refs.stage2.pins)}
                {renderPins(2, "stage3", refs.stage3.pins)}
                {renderPins(5, "stage4", refs.stage4.pins)}

                <div id="placeholder" className=" absolute w-[10rem] flex h-20 rounded-2xl border-2 dark:border-white/40 border-black/40  justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-muted z-20">
                    <h1 className="font-bold uppercase flex items-center gap-2 tracking-wider">
                        <Cpu />
                        Tech Stack
                    </h1>
                </div>
            </div>
            {Object.keys(refs).map((key) => {
                const techboxRefs = refs[key as keyof typeof refs].techbox;
                const pinRefs = refs[key as keyof typeof refs].pins;
                return (
                    <React.Fragment key={key}>
                        {techboxRefs.map((techboxRef, idx) => (
                            <ConnectionLine key={`${key}-line-${idx + 1}`} div1Ref={techboxRef} div2Ref={pinRefs[idx]} color={techs[key as keyof typeof techs][idx].color} direction={key as keyof typeof techs} />
                        ))}
                    </React.Fragment>
                );
            })}
        </section>
    );
};

const renderPins = (pinCount: number, idPrefix: string, refs: React.RefObject<HTMLDivElement>[]) => {
    return (
        <div id={idPrefix} className={cn("absolute justify-evenly items-center w-full -z-10", idPrefix === "stage1" || idPrefix === "stage4" ? "flex" : "flex justify-between w-[115%]", idPrefix === "stage1" ? "top-0 -translate-y-3" : "", idPrefix === "stage2" ? "top-0 translate-y-4" : "", idPrefix === "stage3" ? "bottom-0 -translate-y-4" : "", idPrefix === "stage4" ? "bottom-0 translate-y-3" : "")}>
            {Array.from({ length: pinCount }, (_, idx) => {
                return <div key={`${idPrefix}-pin-${idx + 1}`} ref={refs[idx]} className={cn("pin", idPrefix === "stage1" || idPrefix === "stage4" ? "w-2 h-6" : "w-6 h-2")}></div>;
            })}
        </div>
    );
};

export const techs = {
    stage1: [
        {
            title: "React",
            image: react,
            color: "#61DAFB",
        },
        {
            title: "Next.js",
            image: nextjs,
            color: "#bdbdbd",
        },
        {
            title: "Typescript",
            image: ts,
            color: "#007acc",
        },
        {
            title: "Tailwind CSS",
            image: tailwind,
            color: "#38b2ac",
        },
        {
            title: "Rust",
            image: rust,
            color: "#bf0477",
        },
    ],
    stage2: [
        {
            title: "Docker",
            image: docker,
            color: "#61DAFB",
        },
        {
            title: "Git",
            image: git,
            color: "#FF0000",
        },
    ],
    stage3: [
        {
            title: "MongoDB",
            image: mongodb,
            color: "#45A538",
        },
        {
            title: "SQL",
            image: postgresssql,
            color: "#f58220",
        },
    ],
    stage4: [
        {
            title: "NodeJS",
            image: nodejs,
            color: "#83CD29",
        },
        {
            title: "Redux",
            image: redux,
            color: "#764abc",
        },
        {
            title: "Socket.io",
            image: socketio,
            color: "#b52d3f",
        },
        {
            title: "Python",
            image: python,
            color: "#27AACD",
        },
        {
            title: "Go",
            image: go,
            color: "#00acd7",
        },
    ],
};
