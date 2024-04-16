import React from "react";
import Comment from "./Comment";

const data = [
  {
    username: "Syam Kumar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                username: "Deepika Padukone",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                  {
                    username: "Deepika Padukone",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    replies: [
                      {
                        username: "Deepika Padukone",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                          {
                            username: "Deepika Padukone",
                            comment:
                              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          },
        ],
      },
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Sachin Tendulkar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
  },
];

function Comments() {
  return <Comment data={data} />;
}

export default Comments;
