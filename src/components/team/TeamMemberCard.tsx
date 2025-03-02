"use client"; // Mark as client component for animations and Image

import React from "react";
import Image from "next/image";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

// Define the type for an expert card
interface Expert {
    name: string; // e.g., "Cassian Coleson"
    title: string; // e.g., "Founder, CTO"
    imageUrl: string; // URL or path to the initial state image
    socialLinks: {
        facebook?: string;
        twitter?: string;
        pinterest?: string;
        instagram?: string;
    };
}



const TeamMember: React.FC<Expert> = ({
    name,
    title,
    imageUrl,
    // socialLinks,
}) => {
    return (
        <div className="hover:-translate-y-2 relative group hover:rounded-none transition-all duration-500 flex flex-col justify-center items-center w-56 h-64 rounded-t-full border-gray-700 border-[1px] gap-4 pt-4">

            <Image
                src={imageUrl}
                alt="member image"
                width={200}
                height={200}
                className="group-hover:rounded-none transition-all duration-500 w-44 h-40 object-cover rounded-t-full"
            />

            <div className="flex flex-col">
                <h1 className="text-lg font-bold ">{name}</h1>
                <h3 className="text-xs text-gray-400">{title}</h3>
            </div>

            <div className="bg-black opacity-0 group-hover:opacity-100 translate-x-1 group-hover:-translate-x-1 transition-all duration-700  group-hover:rounded-none rounded-tr-3xl absolute -left-9 top-16 flex flex-col gap-5 border-gray-500 border-[1px] justify-center items-center w-10 py-4">
                <Linkedin  className="w-5 h-5" />
                <Facebook className="w-5 h-5"/>
                <Twitter className="w-5 h-5"/>
                <Github className="w-5 h-5"/>
            </div>

        </div>
    );
};




export default TeamMember;