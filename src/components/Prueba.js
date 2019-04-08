import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    name: '',
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/tasks`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  api
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>

    )
  }
}