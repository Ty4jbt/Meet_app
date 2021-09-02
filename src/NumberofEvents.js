
import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleChange = (event) => {
    const value = event.target.value;
    if(value <= 0 || value >= 32) {
      this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
      this.props.updateEvents('', value);
    }
  }

  render() {
    // const numberOfEvents = this.state.numberOfEvents
    return (
      <div className="numberOfEvents">
        <form>
          <label htmlFor="fname">Events per page:
            <input 
              type="text"
              id="number" 
              value={this.state.numberOfEvents} 
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default NumberOfEvents;