import React, { Component } from 'react'

import {CLIENT_ID,CLIENT_SECRET_KEY} from '../../config/githubKeys'
import UserInfo from './UserInfo'


export default class User extends Component {
  state={
    input:'',
    useData:null
  }
  componentDidMount(){
    
  }
 
  handleInputChange=event=>{
    this.setState({input:event.target.value})
  }
  handleFormSubmite = event=>{
    event.preventDefault()
    fetch(`https://api.github.com/users/${this.state.input}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        this.setState({userData:res})
    })
  }
  render() {
    return (
      <div className="container">
        

        <form class="form-inline my-2 mx-2 my-lg-6" onSubmit={this.handleFormSubmite}>
      <input class="form-control mr-sm-2" type="text" placeholder="GitHub Uesername"  value={this.state.input} onChange={this.handleInputChange}/>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
      {this.state.userData!=null?<UserInfo userData={this.state.userData} />:null}
      </div>
    )
  }
}
