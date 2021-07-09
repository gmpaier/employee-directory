import React from "react";
import UserCard from "./UserCard"

function UserList(props) {
  return (
  <ul>
    {props.users.map((user) => {
      return(
        <li>
          <UserCard
            gender = {user.gender}
            name = {user.name}
            nat = {user.nat}
            email = {user.email}
            login = {user.login}
            dob = {user.dob.date}
            phone = {user.phone}
            image = {user.picture.large}
          />
        </li>
      )
    })}
  </ul>   
  )
}

export default UserList;