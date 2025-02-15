import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-2 py-2 mx-2 rounded-md bg-gray-300">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
