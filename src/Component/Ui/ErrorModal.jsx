import React from "react";
import Card from "./Card";
import Button from "./Button";
function ErrorModal(props) {
  return (
    <div>
      <Card>
      <div className="h-[200%] w-[200%] fixed bg-white blur-lg rounded-xl"></div>
        <div className="w-96 flex flex-col justify-center items-center shadow-2xl top-96 fixed bg-white">
          <header>
            <h2 className="font-bold text-3xl bg-purple-600 text-white w-96 p-4 rounded-t-xl">
              {props.title}
            </h2>
          </header>
          <div className="mt-8 px-4">
            <p>{props.message}</p>
          </div>
          <footer className="mt-12 w-full">
            <Button type="reset">Ok</Button>
          </footer>
        </div>
      </Card>
    </div>
  );
}

export default ErrorModal;
