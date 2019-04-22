import React, { Component } from 'react'
import {CLIENT_ID,CLIENT_SECRET_KEY} from "../../config/githubKeys";
import Repository from "./Repository"
export default class Home extends Component {
  state = {
    repos:[],
    errorMessage:''
  } 
  componentDidMount(){
    fetch(`https://api.github.com/search/repositories?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}&q=created:">2018-09-30"language:javaScript&sort=stars&order=desc
    `)
    .then(res=>res.json())
    .then(res=>this.setState({repos:res.items}))
    //.then(r=>console.log(r.items,"llll"))
  }
  render() {
    console.log(this.state);
    return (
      
      <div className="container">
      <div className="row">
        {
          this.state.repos.map(repo=><Repository key={repo.id} repo={repo}/>)
        }
        </div>
      </div>
    )
  }
}
