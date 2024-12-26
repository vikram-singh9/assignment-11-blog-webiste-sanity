const blockContent = {
  title: "Block Content",
  name: "blockContent",
  type: "array", // This should be an array, not a document
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url", // Use "url" type for better validation
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
            initialValue: {
              blank: true,
            },
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      type: "code",
      name: "code",
      title: "Code Blocks",
      options: {
        languageAlternatives: [
          { title: "Javascript", value: "javascript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "React", value: "react" },
          { title: "Node", value: "node" },
          { title: "MySQL", value: "mysql" },
          { title: "Shell", value: "sh" }, // Corrected mode naming
        ],
        withFilename: false,
      },
    },
    {
      type: "table",
      name: "table",
      title: "Table",
      options: {
        withFilename: false,
      },
    },
  ],
};

export default blockContent;
