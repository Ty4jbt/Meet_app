import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import mockData from './mock-data';
import { getEvents, extractLocations, numFilter } from './api';

class App extends Component {
  
  state = {
    events: [],
    locations: [],
    numberOfEventsShown: 32,
    locationsFilter: [],
    numFilteredList: []
  }
  
  componentDidMount() {
    // const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: [],
          numFilteredList: events.slice(0, 32),
          locations: extractLocations(events) });
      }
    });
  }
  
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      
      this.setState({
        locationsFilter: locationEvents,
        numFilteredList: numFilter(locationEvents, this.state.numberOfEventsShown)
        // currentCity: location,
        //locations: [location],
      });
    });
  }

  updateNumberOfEvents = (num) => {
    if (this.state.locationsFilter.length !== 0) {
      this.setState({
        numberOfEventsShown: num,
        numFilteredList: numFilter(this.state.locationsFilter, num)
      });
    } else {
      this.setState({
        numberOfEventsShown: num,
        numFilteredList: numFilter(this.state.events, num)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEventsShown={this.state.numberOfEventsShown}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
  
}

export default App;
