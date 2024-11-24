import React from "react";

const UserCard = ({ id, name, gender }) => {
  return (
    <div className="user-card">
      <h3>Картка користувача</h3>
      <p>ID: {id}</p>
      <p>Ім'я: {name}</p>
      <p>Стать: {gender}</p>
    </div>
  );
};

export default UserCard;
