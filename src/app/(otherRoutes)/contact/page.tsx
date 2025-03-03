"use client"
import React from 'react'
import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, PinIcon as Pinterest } from "lucide-react"
export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your form submission logic here
    }


    return (
        <div className='bg-black min-w-screen min-h-screen'>
            <HeroBannerWithRouteName tagline='For Any Query' pageName='Contact Us' />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-5 bg-black text-white p-6">
                {/* text content */}
                <div className="space-y-6 w-full max-w-md">
                    <div className="space-y-2">
                        <p className="text-emerald-500 uppercase font-medium text-sm">CONTACT WITH US</p>
                        <h2 className="text-4xl font-bold tracking-tight">LET&apos;S WORK TOGETHER?</h2>
                        <p className="text-gray-400 mt-4">
                            I have world-class, flexible support via live chat, email and phone. I guarantee that you&apos;ll be able to
                            have any issue resolved within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-4 mt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">Karachi, Sindh, Pakistan</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">+92 334-295024</p>
                                <p className="text-gray-300">+apna number add kardiyo</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">I&apos;ll give you the official email(ibad)</p>
                                <p className="text-gray-300">habibahmed918131@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mt-8">
                        <h3 className="font-bold text-xl">Follow Us</h3>
                        <p className="text-gray-400">Follow us on Social Network</p>
                        <div className="flex gap-2 mt-2">
                            {[Facebook, Twitter, Instagram, Pinterest].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-8 rounded-md">
                    <h3 className="text-xl font-bold mb-6 text-center">Make a Free Consulting</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm mb-1">
                            Company/Organization
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
