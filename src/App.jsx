import { useState } from "react";
import AddUser from "./Component/Users/AddUser";
import UsersList from "./Component/Users/UsersList";
import ErrorModal from "./Component/Ui/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error , setError] = useState("");

  const addUserHanalder = (uName, uAge) => {
    setUsersList((prevState) => [
      ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

 const errorHandler = (errorOccured) => {
  setError(errorOccured);
  console.log(errorOccured);
 }

  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        {error && <ErrorModal title="An error occured!" message="Something went wrong!" />}
        <AddUser onAddUser={addUserHanalder} onError={errorHandler} />
        <UsersList users={usersList} />
      </div>
    </>
  );
}

export default App;
