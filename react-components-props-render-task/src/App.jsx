import React from "react";
import UserCard from "./assets/components/UserCardComponent";

const users = [
  {
    id: 1,
    name: 'Ivan',
    gender: 'male'
  },
  {
    id: 2,
    name: 'Kamila',
    gender: 'female'
  },
  {
    id: 3,
    name: 'Petro',
    gender: 'male'
  },
]

  function App() {
    return (
      <div>
        <UserCard id={users[0].id} name={users[0].name} gender={users[0].gender} />
        <UserCard id={users[1].id} name={users[1].name} gender={users[1].gender} />
        <UserCard id={users[2].id} name={users[2].name} gender={users[2].gender} />
      </div>
    );
  };

export default App;
