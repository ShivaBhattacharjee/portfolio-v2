"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimation,Variants } from "framer-motion";

type ConnectionLineProps = {
    div1Ref: React.RefObject<HTMLDivElement>;
    div2Ref: React.RefObject<HTMLDivElement>;
    color: string;
    direction: "stage1" | "stage2" | "stage3" | "stage4";
};

const variants: Variants = {
    offscreen: {
        pathLength: 0,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1,
    },
    onscreen: {
        pathLength: 1,
        strokeWidth: 1.5,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const ConnectionLine: React.FC<ConnectionLineProps> = ({ div1Ref, div2Ref, color, direction }) => {
    const [path, setPath] = useState("");
    const svgRef = useRef<SVGSVGElement>(null);
    const controls = useAnimation();

    useLayoutEffect(() => {
        const updatePath = () => {
            const rect1 = div1Ref.current?.getBoundingClientRect();
            const rect2 = div2Ref.current?.getBoundingClientRect();
            const svg = svgRef.current;

            if (!rect1 || !rect2 || !svg) return;

            const svgRect = svg.getBoundingClientRect();

            // Calculate control points to create a smooth curve
            let x1;
            let y1;
            let x2;
            let y2;

            let controlX1;
            let controlX2;
            let controlY1;
            let controlY2;
            if (direction === "stage1") {
                x1 = rect1.x - svgRect.x + rect1.width / 2;
                y1 = rect1.y - svgRect.y + rect1.height;
                x2 = rect2.x - svgRect.x + rect2.width / 2;
                y2 = rect2.y - svgRect.y + rect2.height / 2;

                controlX1 = x1;
                controlY1 = y1 + (y2 - y1) / 2;
                controlX2 = x2;
                controlY2 = y2 - (y2 - y1) / 2;
            } else if (direction === "stage4") {
                x1 = rect1.x - svgRect.x + rect1.width / 2;
                y1 = rect1.y - svgRect.y;
                x2 = rect2.x - svgRect.x + rect2.width / 2;
                y2 = rect2.y - svgRect.y + rect2.height / 2;

                controlX1 = x1;
                controlY1 = y1 + (y2 - y1) / 2;
                controlX2 = x2;
                controlY2 = y2 - (y2 - y1) / 2;
            } else if (direction === "stage2") {
                x1 = rect1.x - svgRect.x + rect1.width / 2;
                y1 = rect1.y - svgRect.y + rect1.height / 2;
                x2 = rect2.x - svgRect.x + rect2.width / 2;
                y2 = rect2.y - svgRect.y + rect2.height / 2;

                controlX1 = x1 + (x2 - x1) / 2;
                controlY1 = y1;
                controlX2 = x2 - (x2 - x1) / 2;
                controlY2 = y2;
            } else {
                x1 = rect1.x - svgRect.x + rect1.width / 2;
                y1 = rect1.y - svgRect.y + rect1.height / 2;
                x2 = rect2.x - svgRect.x + rect2.width / 2;
                y2 = rect2.y - svgRect.y + rect2.height / 2;

                controlX1 = x1 + (x2 - x1) / 2;
                controlY1 = y1;
                controlX2 = x2 - (x2 - x1) / 2;
                controlY2 = y2;
            }

            // Create a path string
            const pathString = `M${x1},${y1} C${controlX1},${controlY1} ${controlX2},${controlY2} ${x2},${y2}`;

            setPath(pathString);
        };

        updatePath();

        window.addEventListener("resize", updatePath);

        return () => {
            window.removeEventListener("resize", updatePath);
        };
    }, [div1Ref, div2Ref, controls, direction]);

    return (
        <motion.svg ref={svgRef} initial="offscreen" whileInView="onscreen" viewport={{ once: false }} className="absolute w-full h-full">
            <motion.path d={path} className={"animate-pulse"} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" variants={variants} />
        </motion.svg>
    );
};

export default ConnectionLine;
