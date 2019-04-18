import { CLIENT_ID, CLIENT_SECRET_KEY } from './githubKeys';

export const GET_USER_REPOS = `https://api.github.com/users/${
  this.state.input
}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`;
export const GET_USER_INFO = '';
