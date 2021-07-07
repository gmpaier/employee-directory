import React, { Component } from 'react';
import API from "./utils/API";
import UserList from './components/UserList';
import SortFilter from './components/SortFilter';
import './App.css';

class App extends Component {
  state = {
    sort: {},
    filter: "",
    rawUsers: [],
    showUsers: []
  }

  componentDidMount() {
    API.getUsers()
    .then(res => {
      this.setState({rawUsers: res.data.results, showUsers: res.data.results})
      console.log(this.state.showUsers);
    })
    .catch(err => console.log(err))
  }

  handleSort = event => {
    this.setState({ sort: event.target.value })
  }

  handleFilter = event => {
    this.setState({ filter: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    let tempUsers = []
    if (this.state.filter){
      tempUsers = this.state.rawUsers.filter((user) => user.gender === this.state.filter);
    }
    else {
      tempUsers = this.state.rawUsers.map((user) => user);
    }

    if (this.state.sort){
      tempUsers.sort((a,b) => (a.name[this.state.sort.name] > b.name[this.state.sort.name]) ? 1 : ((b.name[this.state.sort.name] > a.name[this.state.sort.name]) ? -1 : 0))
      if (this.state.sort.order === "desc"){
        tempUsers.reverse();
      }
    }

    this.setState({showUsers: tempUsers});
  }

  render() {
    return (
      <div>
        <SortFilter
          handleSort = {this.handleSort}
          handleFilter = {this.handleFilter}
          handleSubmit = {this.handleSubmit}
        />
        <UserList
        users = {this.state.showUsers}
        />
      </div>
    );
  }

}

export default App;
