export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "metadata",
      title: "MetaDeta",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
			name: "tags",
			title: "Tags",
			type: "array",
			validation: (Rule: any) => Rule.required(),
			of: [
				{
					type: "string",
					validation: (Rule: any) =>
						Rule.custom((fields: any) => {
							if (
								fields !== fields.toLowerCase() ||
								fields.split(" ").includes("")
							) {
								return "Tags must be lowercase and not be included space";
							}
							return true;
						}),
				},
			],
		},
    
  ],
};
