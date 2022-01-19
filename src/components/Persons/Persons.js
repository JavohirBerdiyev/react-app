import React, { Component } from 'react';
import './Person.scss';
import Person from './Person/Person';

class Persons extends Component {
  state = {
    person: [
      { name: 'Husan', age: 16 },
      { name: 'Ravshan', age: 15 },
      { name: 'Islom', age: 19 },
    ],
    otherCount: 1
  }

  switchNameHandler = () => {
    // bunday ishlamaydi, Don't do this this.state.person[0].name = 'Umidjon';
    this.setState({
      person: [
        { name: 'Abdusamad', age: 18 },
        { name: 'Shohrux', age: 23 },
        { name: 'Abdurahmon', age: 24 },
      ],
      otherCount: this.state.otherCount + 1
    })
  }
  render() {
    return (
      <div className='Person'>
        <h1>Hi I'm React</h1>
        <button className='btn btn-primary' onClick={this.switchNameHandler}>Click me</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />

        <p>Hammaga salom men Other Countman {this.state.otherCount}</p>
      </div>
    )
  }
}

export default Persons;