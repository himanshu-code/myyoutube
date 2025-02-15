import React from "react";
import { Comment, CommentsList } from "./Comment";
const commentsData = [
  {
    name: "Username",
    text: "lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Username",
    text: "lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Username",
    text: "lorem ipsum dolor",
    replies: [
      {
        name: "Username",
        text: "lorem ipsum dolor",
        replies: [],
      },
      {
        name: "Username",
        text: "lorem ipsum dolor",
        replies: [
          {
            name: "Username",
            text: "lorem ipsum dolor",
            replies: [],
          },
        ],
      },
      {
        name: "Username",
        text: "lorem ipsum dolor",
        replies: [],
      },
      {
        name: "Username",
        text: "lorem ipsum dolor",
        replies: [
          {
            name: "Username",
            text: "lorem ipsum dolor",
            replies: [
              {
                name: "Username",
                text: "lorem ipsum dolor",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Username",
    text: "lorem ipsum dolor",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
