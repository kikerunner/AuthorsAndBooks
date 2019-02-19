import React from "react";
import UserItem from "./UserItem"
import UserCount from "./UserCount"

export default class UserList extends React.Component {

	constructor(props) {
		super(props)
		this.state = { accounts: [] }
	}

  render() {
		if (this.state.accounts.length == 0) {	
			fetch('/api/v1/account/list/')
			.then((response) => {
				return response.json();
			})			
			.then((account) => {
        		this.setState({ accounts: account})
      		})
			
		}

		if (this.state.accounts.length > 0) {
		
			var accountItems = [];
			this.state.accounts.forEach(
				(account) => {
					accountItems.push(<UserItem account={account} />)
				}
			)
		
		return (
				<div>
					{accountItems}
					<UserCount  count={accountItems.length}/>
				</div>
			)
			
		
		} else {
			return <p className="text-center">Loading users...</p>
		}


    
  }
}