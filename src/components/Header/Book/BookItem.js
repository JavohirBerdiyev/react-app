import React, { Component } from 'react';
import Button from '../Button/Button';

class Bookitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
      buttonTitle: false
    };
  }

  incrementView = () => {
    this.setState({ view: this.state.view + 1 });
    this.setState({ buttonTitle: !this.state.buttonTitle });
    // this.state.view = this.state.view + 1;
  }


  render() {
    const { title, author, handleClick } = this.props;
    const { view, buttonTitle } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <div onClick={this.incrementView}> View count: <b>{view}</b> </div>
        <p>Author:{author}</p>
        <Button onClick={() => handleClick(author)} id="book1" disabled={false}>
          {buttonTitle ? 'Active' : 'Inactive'}
        </Button>
      </div>
    );
  }
}

export default Bookitem;
