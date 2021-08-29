import React, { Component } from 'react';
// import { mockData } from './mock-data';
class Event extends Component {

    state = {
        showMore: false
    }

    showMore() {
        if (this.state.showMore === false) {
            this.setState({ showMore: true })
        } else {
            this.setState({ showMore: false })
        }
    }

    showText() {
        if (this.state.showMore === false) {
            return 'Show More'
        } else {
            return 'Show Less'
        }
    }

    eventDescription(event) {
        if (this.state.showMore === false) {
            return ''
        } else {
            return event.description;
        }
    }

    render() {

        const { event } = this.props;

        return (
            <>
                <div className='event'>
                    <h2>{event.summary}</h2>
                    <p className="description">{this.eventDescription(event)}</p>
                    <button className='details-btn' onClick={() => {this.showMore(event)}}>{this.showText()}</button>
                </div>
            </>
        );
    }
}

export default Event;