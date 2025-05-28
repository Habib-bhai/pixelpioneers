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
        })
    ]
})