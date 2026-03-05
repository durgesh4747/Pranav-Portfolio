import { defineField, defineType } from "sanity";

export const ContentSchema = defineType({
  name: "work",
  title: "My Videos",
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
          { title: "Promotion Video", value: "Promotion Video" },
          { title: "Property Tour", value: "Property Tour" },
          { title: "Real Estate", value: "Real Estate" },
          { title: "Wedding", value: "Wedding" },
          { title: "Custom Video", value: "Custom Video" },
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
      name: "customVideo",
      title: "Direct Video Upload (Use if YT copyright occurs - normally not recommended to maintain speed - keep that in mind pranav)",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "manualThumb",
      title:"Manual Thumbnail (Only for directly uploaded videos)",
      type:"image"
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
  ],
});
