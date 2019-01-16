import React, { Component } from 'react';

class UserDisplay extends Component {
 constructor(props){
   super(props)
   this.state = {
     users: []
   }
   this.getData = this.getData.bind(this)
 }

  getData = () => {
    return fetch('https://randomuser.me/api/?results=5')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let data = JSON.parse(JSON.stringify(myJson))
      return data
    })
  }

async componentDidMount(){
  let users = await this.getData()

}


render(){

  return (<div>

    <h1>it's happening!!!!!</h1>
  </div>)
}

}

export default UserDisplay
