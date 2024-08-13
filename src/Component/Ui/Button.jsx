import React from "react";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className="w-full py-3 px-4 bg-purple-500 text-white font-semibold rounded-md 
          hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
