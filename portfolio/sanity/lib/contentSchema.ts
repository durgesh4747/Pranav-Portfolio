import { defineField, defineType } from "sanity";

export const ContentSchema = defineType({
  name: "work",
  title: "My Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Reel", value: "Reel" },
          { title: "Shorts", value: "Shorts" },
          { title: "YouTube Video", value: "YouTube Video" },
          { title: "Events", value: "Events" },
          { title: "Property Tour", value: "Property Tour" },
          { title: "Real Estate", value: "Real Estate" },
          { title: "Custom Video", value: "Custom Video" },
          { title: "Wedding", value: "Wedding" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Video Link",
      type: "url",
    }),
    defineField({
      name: "Thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "REQUIRED. This is the Thumbnail for your video.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(150).warning("Keep descriptions short."),
    }),
  ],
});
