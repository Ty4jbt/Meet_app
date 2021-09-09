import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  
  state = {
    events: [],
    locations: [],
    numberOfEventsShown: 32,
    selectedLocation: 'all'
  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
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
      
      const { numberOfEventsShown } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEventsShown)
      });
    });
  }

  updateEventCount = (num) => {
    const { selectedLocation } = this.state;
    this.setState({
      numberOfEventsShown: num
    });
    this.updateEvents(selectedLocation);
  }

  render() {

    const { selectedLocation, events, numberOfEventsShown } = this.state;
    const filteredEvents = selectedLocation === 'all' ? events : events.filter(event => event.location === selectedLocation);

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEventsShown={numberOfEventsShown}
          updateNumberOfEvents={() => this.updateEventCount()}
        />
        <EventList events={filteredEvents} />
      </div>
    );
  }
  
}

export default App;
