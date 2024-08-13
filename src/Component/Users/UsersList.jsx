import React from "react";
import Card from "../Ui/Card";

function UsersList(props) {
  return (
    <Card className="my-8 mx-auto w-[90%] max-w-[40rem] flex flex-col justify-center items-center">
      <ul className=" list-none">
        {props.users.map((user) => (
          <li className="border border-[#ccc] my-2 mx-0 p-2" key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
