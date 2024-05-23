"use client";
import React, { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

import { toast } from "@/components/ui/use-toast";
const CopyCmd = () => {
    const [copied, setCopied] = useState(false);
    const handleCopyToClipboard = () => {
        const textToCopy = "npx shivadev";
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);

                toast({
                    title: "Copied to clipboard",
                    description: "Paste the command in your terminal :3",
                });
            })
            .catch((error) => {
                toast({
                    variant: "destructive",
                    title: "Uh oh! An error occurred",
                    description: "There was a problem copying the text. Please try again later.",
                });
                console.error("An error occurred:", error);
            });
    };
    return (
        <div onClick={handleCopyToClipboard} className="homepagecontactbtn">
            {copied ? <ClipboardCheck /> : <Clipboard />}
            npx shivadev
        </div>
    );
};

export default CopyCmd;
