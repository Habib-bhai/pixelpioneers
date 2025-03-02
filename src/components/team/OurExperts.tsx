import React from 'react'
import TeamMember from './TeamMemberCard';
import { motion } from 'framer-motion';
function OurExperts() {
    const dummyExperts = [
        {
            name: "Cassian Coleson",
            title: "Founder, CTO",
            imageUrl: "/images/member.jpg",
            socialLinks: {
                facebook: "https://facebook.com/cassian",
                twitter: "https://twitter.com/cassian",
                pinterest: "https://pinterest.com/cassian",
                instagram: "https://instagram.com/cassian",
            },
        },
        {
            name: "Cassian Coleson",
            title: "Founder, CTO",
            imageUrl: "/images/member.jpg",
            socialLinks: {
                facebook: "https://facebook.com/cassian",
                twitter: "https://twitter.com/cassian",
                pinterest: "https://pinterest.com/cassian",
                instagram: "https://instagram.com/cassian",
            },
        },
        {
            name: "Cassian Coleson",
            title: "Founder, CTO",
            imageUrl: "/images/member.jpg",
            socialLinks: {
                facebook: "https://facebook.com/cassian",
                twitter: "https://twitter.com/cassian",
                pinterest: "https://pinterest.com/cassian",
                instagram: "https://instagram.com/cassian",
            },
        },
        {
            name: "Cassian Coleson",
            title: "Founder, CTO",
            imageUrl: "/images/member.jpg",
            socialLinks: {
                facebook: "https://facebook.com/cassian",
                twitter: "https://twitter.com/cassian",
                pinterest: "https://pinterest.com/cassian",
                instagram: "https://instagram.com/cassian",
            },
        },

    ];

    return (
        <section className="w-full bg-black py-12 flex justify-center items-center flex-col">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <div className="inline-flex items-center border border-emerald-500 rounded-sm px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                    <span className="text-gray-300 tracking-wider text-sm font-medium">OUR EXPERTS</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 ml-3"></div>
                </div>
            </motion.div>

            <div className="w-full mx-auto px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
                {dummyExperts.map((expert, index) => (
                    <TeamMember key={index} {...expert} />
                ))}
            </div>
        </section>
    );
}

export default OurExperts