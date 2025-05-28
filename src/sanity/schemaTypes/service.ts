import { defineField, defineType } from "sanity";

export const service = defineType({
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string"
        }),
        defineField({
            name: "heroDescription",
            title: "Hero Description",
            type: "text"
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "painPoints",
            title: "Pain Points",
            type: "array",
            of: [
                { type: "string" }
            ]
        }),
        defineField({
            name: "solutions",
            title: "Solutions",
            type: "array",
            of: [
                { type: "string" }
            ]
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [
                defineField({
                    name: "feature",
                    title: "Feature",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string"
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text"
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "string"
                        }),
                        defineField({
                            name: "metrics",
                            title: "Metrics",
                            type: "string"
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: "process",
            title: "Process Steps",
            type: "array",
            of: [
                defineField({
                    name: "processStep",
                    title: "Process Step",
                    type: "object",
                    fields: [
                        defineField({
                            name: "step",
                            title: "Step Number",
                            type: "number"
                        }),
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string"
                        }),
                        defineField({
                            name: "duration",
                            title: "Duration",
                            type: "string"
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text"
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [
                { type: "string" }
            ]
        }),
        defineField({
            name: "pricing",
            title: "Pricing",
            type: "object",
            fields: [
                defineField({
                    name: "starting",
                    title: "Starting Price",
                    type: "number"
                }),
                defineField({
                    name: "average",
                    title: "Average Price",
                    type: "number"
                }),
                defineField({
                    name: "enterprise",
                    title: "Enterprise Pricing",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                defineField({
                    name: "testimonial",
                    title: "Testimonial",
                    type: "object",
                    fields: [
                        defineField({
                            name: "quote",
                            title: "Quote",
                            type: "text"
                        }),
                        defineField({
                            name: "client",
                            title: "Client Name",
                            type: "string"
                        }),
                        defineField({
                            name: "position",
                            title: "Position",
                            type: "string"
                        }),
                        defineField({
                            name: "avatar",
                            title: "Avatar",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }),
                        defineField({
                            name: "rating",
                            title: "Rating",
                            type: "number",
                            validation: Rule => Rule.min(1).max(5)
                        }),
                        defineField({
                            name: "results",
                            title: "Results",
                            type: "string"
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: "caseStudies",
            title: "Case Studies",
            type: "array",
            of: [
                defineField({
                    name: "caseStudy",
                    title: "Case Study",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string"
                        }),
                        defineField({
                            name: "client",
                            title: "Client",
                            type: "string"
                        }),
                        defineField({
                            name: "challenge",
                            title: "Challenge",
                            type: "text"
                        }),
                        defineField({
                            name: "solution",
                            title: "Solution",
                            type: "text"
                        }),
                        defineField({
                            name: "results",
                            title: "Results",
                            type: "array",
                            of: [
                                { type: "string" }
                            ]
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }),
                        defineField({
                            name: "link",
                            title: "Link",
                            type: "url"
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                defineField({
                    name: "faq",
                    title: "FAQ",
                    type: "object",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "string"
                        }),
                        defineField({
                            name: "answer",
                            title: "Answer",
                            type: "text"
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: "metrics",
            title: "Metrics",
            type: "object",
            fields: [
                defineField({
                    name: "projects",
                    title: "Number of Projects",
                    type: "number"
                }),
                defineField({
                    name: "clients",
                    title: "Number of Clients",
                    type: "number"
                }),
                defineField({
                    name: "successRate",
                    title: "Success Rate (%)",
                    type: "number",
                    validation: Rule => Rule.min(0).max(100)
                })
            ]
        })
    ]
})