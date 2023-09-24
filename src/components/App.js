import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
    this.state = {
      isButtonClicked: false, // Initialize the state to false
	};
    }
	handleButtonClick = () => {
    this.setState({ isButtonClicked: true });
  };

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		 { /* Render the button with an onClick event handler */ }
        <button id="click" onClick={this.handleButtonClick}>
          Click me
        </button>

        { /* Conditionally render the paragraph based on the state */ }
        {this.state.isButtonClicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
          </p>
        )}
    		</div>
    	);
    }
}


export default App;

