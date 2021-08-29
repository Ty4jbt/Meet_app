
import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleChange = (event) => {
    const value = event.target.value;
    if(value !== 0) {
      this.setState({
        numberOfEvents: value 
      });
    } else {
      this.setState({
        numberOfEvents: 32
      });
    }
  }

  render() {
    const numberOfEvents = this.state.numberOfEvents
    return (
      <div className="numberOfEvents">
        <form>
          <label for="fname">Events per page:
            <input 
              type="text"
              id="number" 
              value={numberOfEvents} 
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default NumberOfEvents;