import React from "react";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className="flex ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="live" />
    </div>
  );
};

export default ButtonList;
