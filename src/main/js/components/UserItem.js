import React from "react";
import Delete from "./Delete"
export default class UserItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = { account: props.account }

	}

  render() {

    const { account } = this.props;
  
    return (
      <div class="well col-md-4 col-md-offset-4" key={account.numAccount}>
        Número de cuenta: {account.numAccount} Balance: {account.balance}<br/>
        <Delete id={account.numAccount}/>
      </div> 
    );
  }
}
