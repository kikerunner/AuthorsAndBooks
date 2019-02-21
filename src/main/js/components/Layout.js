import React from "react"
import AddAccount from "./AddAccount"
import UserList from "./UserList"
import { NavLink, Switch } from 'react-router-dom';

export default class Layout extends React.Component {

  render() {
   
    return (
      <BrowserRouter>
      <div className="App">
        <div className="nav">
            <NavLink exact to="/AddAccount" activateClassName="active">AddAcount</NavLink>
            <NavLink to="/UserList" activateClassName="activate">Lista de Users</NavLink>
        </div>
        <Switch>
            <route exact path="/AddAccount" component={AddAccount} />
            <route path="/UserList" component={UserList} />
        </Switch>
      
        <div className="text-center">
          <AddAccount />
          <UserList />
        </div>
      </BrowserRouter>
      </div>
    )
  }
}
