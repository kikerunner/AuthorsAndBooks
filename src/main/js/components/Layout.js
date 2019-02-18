import React from "react"
import AddAccount from "./AddAccount"
import UserList from "./UserList"

export default class Layout extends React.Component {

  render() {
   
    return (
      <div class="text-center">
        <AddAccount />
        <UserList />
      </div>
    )
  }
}
