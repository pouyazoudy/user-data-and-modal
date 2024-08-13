import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
}

export default Card;
