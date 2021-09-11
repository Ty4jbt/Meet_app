
import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    if ( value < 1 || value > 32 ) {
      return this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
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
        <ErrorAlert text={this.state.errorText} />
      </div>
    )
  }
}

export default NumberOfEvents;