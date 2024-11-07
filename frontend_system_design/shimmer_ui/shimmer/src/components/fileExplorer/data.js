export const data = {
  id: 1,
  name: "root",
  isFolder: true,
  files: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      files: [
        {
          id: 10,
          name: "assets",
          isFolder: true,
          files: [
            {
              id: 11,
              name: "images",
              isFolder: true,
              files: [
                {
                  id: 12,
                  name: "logo.svg",
                  isFolder: false,
                  files: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "index.html",
          isFolder: false,
          files: [],
        },
        {
          id: 4,
          name: "robots.txt",
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      id: 5,
      name: "src",
      isFolder: true,
      files: [
        {
          id: 6,
          name: "App.js",
          isFolder: false,
          files: [],
        },
        {
          id: 7,
          name: "index.js",
          isFolder: false,
          files: [],
        },
        {
          id: 8,
          name: "data.js",
          isFolder: false,
          files: [],
        },
        {
          id: 9,
          name: "fileExplorer.js",
          isFolder: false,
          files: [],
        },
      ],
    },
  ],
};
