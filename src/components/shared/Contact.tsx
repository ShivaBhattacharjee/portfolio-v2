"use client";
import React, { useRef, useState } from "react";
import { ScaleLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import { MailPlus, Nfc } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);
            await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form.current!, process.env.NEXT_PUBLIC_PUBLIC_KEY);
            toast({
                title: "Email Sent",
                description: "Your message has been sent successfully",
            });
            setMessage("");
            form.current!.reset();
        } catch (error) {
            setLoading(false);
            toast({
                variant: "destructive",
                title: "Uh oh! An error occurred",
                description: "There was a problem sending your message. Please try again later.",
            });
            console.error("An error occurred:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
    return (
        <div className="flex justify-center items-center gap-5 flex-col" id="contact">
            <h1 className=" capitalize font-bold text-4xl relative lg:text-6xl tracking-wide">
                Contact Me <span className="  text-8xl lg:text-[9rem] animate-pulse absolute lg:-bottom-2 bottom-0">.</span>
            </h1>
            <span className=" font-normal text-sm md:text-lg text-center">
                Shoot me an email if you want to connect! You can also find me on{" "}
                <a className=" text-blue-500 font-bold" href="https://twitter.com/sh17va" target="_blank">
                    Twitter
                </a>{" "}
                if that&apos;s more your speed.
            </span>
            <a href="mailto:itsshivahere@outlook.com?body=Hello" target="_blank" className="flex items-center gap-2 text-xl font-medium">
                <MailPlus /> itsshivahere@outlook.com
            </a>
            <form className="flex flex-col gap-4" autoComplete="off" ref={form} onSubmit={sendEmail}>
                <div className="flex justify-center items-center flex-wrap gap-3 w-full">
                    <input type="text" placeholder="Please Enter Your Full Name" className=" flex-1 border-2 duration-300 rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent" name="to_name" required />
                    <input type="email" placeholder="Please Enter Your Email" className=" flex-1 border-2 duration-200 rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent" name="from_name" required />
                </div>
                <textarea placeholder="Enter Your Message" className=" bg-transparent h-64 dark:border-white/40 border-black/40 p-4 rounded-lg w-full flex-auto  border-2" required autoComplete="false" name="message" value={message} onChange={handleMessageChange}></textarea>
                {loading ? (
                    <button className="flex justify-center items-center boxshadowbtn gap-3 " disabled>
                        <ScaleLoader color="#808080" className=" scale-50" /> Processing.....
                    </button>
                ) : (
                    <button className="flex justify-center items-center gap-3 boxshadowbtn">
                        <Nfc />
                        Contact
                    </button>
                )}
            </form>
        </div>
    );
};

export default Contact;
