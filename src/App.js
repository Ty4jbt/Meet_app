import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
// import mockData from './mock-data';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  
  state = {
    events: [],
    locations: [],
    numberOfEventsShown: 32,
    selectedLocation: 'all',
    warningText: ''
  };
  
  componentDidMount() {
    // const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (!navigator.onLine) {
        this.setState({
          warningText: 'You are offline. These events may not be up-to-date.'
        });
      } else {
        this.setState({
          warningText: ''
        });
      }

      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  };
  
  componentWillUnmount() {
    this.mounted = false;
  };

  updateEvents = (location) => {

    if (!navigator.onLine) {
      this.setState({
        warningText: 'You are offline. These events may not be up-to-date.'
      });
    } else {
      this.setState({
        warningText: ''
      });
    }

    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      
      const { numberOfEventsShown } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEventsShown)
      });
    });
  };

  updateEventCount = (num) => {
    const { selectedLocation } = this.state;
    this.setState({
      numberOfEventsShown: num
    });
    this.updateEvents(selectedLocation);
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {

    const { selectedLocation, events, numberOfEventsShown } = this.state;
    const filteredEvents = selectedLocation === 'all' ? events : events.filter(event => event.location === selectedLocation);

    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEventsShown={numberOfEventsShown}
          updateNumberOfEvents={this.updateEventCount}
        />
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={filteredEvents} />
      </div>
    );
  };
  
}

export default App;
