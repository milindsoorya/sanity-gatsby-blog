export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6355cbb95b4a5e5882b2443e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gvm942s7",
                  apiId: "6a5f051d-3973-46ac-8046-5919fb7b56d6",
                },
                {
                  buildHookId: "6355cbba6b1a765f22311844",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-g6gp4dwn",
                  apiId: "c32269f4-cd86-41e2-b285-ce78303fe295",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/milindsoorya/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-g6gp4dwn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
