import React from "react";

export const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const CommentsList = ({ comments }) => {
  if (comments) {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.replies.length > 0 ? (
          <div className="pl-5 border border-l-black">
            <CommentsList comments={comment.replies} />
          </div>
        ) : (
          ""
        )}
      </div>
    ));
  }
};
