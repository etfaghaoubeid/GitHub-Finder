import React,{Component} from 'react';
import { CLIENT_ID, CLIENT_SECRET_KEY } from '../../config/githubKeys';
import Repository from "../forms/Repository"

export default class Repositories extends Component {
  state = {
    input: '',
    campanyRepos: [],
    errorMessage: '',
  };
  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };
  handleFormSubmite = event => {
    event.preventDefault();

    fetch(
      `https://api.github.com/orgs/${this.state.input}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // res.message?this.setState({errorMessage:res.message}):
        this.setState({ campanyRepos: res });
      });
  };
  render(){  
  return (
    <div className="container">
      <h1>Company Repo</h1>
      <form className="form-inline my-2  mx-2 my-lg-6" onSubmit={this.handleFormSubmite}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Enter company name"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="row my-2">
         {
           
           this.state.campanyRepos.length>0?
           this.state.campanyRepos.map(repo=><Repository repo={repo} key={repo.id} />):null
         }
    </div>
    </div>
  );

  }
}
