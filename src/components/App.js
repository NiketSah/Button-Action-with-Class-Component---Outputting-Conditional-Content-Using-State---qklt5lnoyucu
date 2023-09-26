import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state to keep track of whether the button is clicked
    this.state = {
      isButtonClicked: false,
    };
  }

  // Function to handle button click
  handleButtonClick = () => {
    // Update the state to indicate that the button has been clicked
    this.setState({
      isButtonClicked: true,
    });
  };

  render() {
    return (
      <div id="main">
        { /* Do not remove this main div!! */ }
        <button
          id="click"
          onClick={this.handleButtonClick} // Attach click event handler
        >
          Click Me
        </button>
        {this.state.isButtonClicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;



