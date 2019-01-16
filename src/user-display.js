import React, { Component } from 'react';

class UserDisplay extends Component {
 constructor(props){
   super(props)
   this.state = {
     users: []
   }
 }

  getData = () => {
    return fetch('https://randomuser.me/api/?results=5')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let data = JSON.parse(JSON.stringify(myJson)).results
      return data
    })
  }

async componentDidMount(){
  let users = await this.getData()
  this.setState({
    users
  })
  console.log(this.state.users)

}


render(){

  return (<div>

    <h1>it's happening!!!!!</h1>
  </div>)
}

}

export default UserDisplay
