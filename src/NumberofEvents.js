
import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateNumberOfEvents(value);
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor="fname">Events per page:
          <input 
            type="text"
            id="number" 
            value={this.props.numberOfEventsShown} 
            onChange={this.handleChange}
          />
        </label>
      </div>
    )
  }
}

export default NumberOfEvents;