import React, { useState, useRef } from "react";
import Card from "../Ui/Card";
import Button from "../Ui/Button";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const AddUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return props.onError(true);
    }

    props.onAddUser(enteredUsername, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div>
      <Card>
        <form
          className="bg-white w-1/2 max-w-lg mx-auto my-8 p-8 flex flex-col gap-6 rounded-xl shadow-lg"
          onSubmit={AddUserHandler}>
          <div>
            <label htmlFor="username" className="block font-bold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 focus:border-purple-500"
              placeholder="Enter your username"
              required
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor="age" className="block font-bold text-gray-700">
              Age (years)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 focus:border-purple-500"
              placeholder="Enter your age"
              step="1"
              min="0"
              required
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
