
import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    if ( value < 1 || value > 32 ) {
      return this.setState({
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value
      });
    }

    this.props.updateNumberOfEvents(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor="fname">Events per page:
          <input 
            className='event-number-input'
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