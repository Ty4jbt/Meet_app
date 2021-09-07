import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let numberFilter;

  beforeAll(() => {
    numberFilter = shallow(<NumberOfEvents />);
  });

  test('render the number of events menu', () => {
    expect(numberFilter.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render the default number of events on the page (32)', () => {
    const eventCount = numberFilter.props().numberOfEventsShown;
    expect(numberFilter.find('#number').prop('value')).toBe(eventCount);
    // expect(numberFilter.state('numberOfEventsShown')).toBe(32);
  });

  test('check if input and state value are the same', () => {
    const propsNumber = numberFilter.prop('numberOfEventsShown');
    expect(numberFilter.find('#number').prop('value')).toBe(propsNumber);
  });

  // test('change state when text input changes', () => {
  //   const eventObj = { target: { value: 16 }};
  //   numberFilter.find('#number').simulate('change', eventObj);
  //   expect(numberFilter.state('numberOfEvents')).toBe(16);
  // });

  // test('display default of 32 events if show events is 0', () => {
  //   const eventObj = { target: { value: 0 }};
  //   numberFilter.find('#number').simulate('change', eventObj);
  //   expect(numberFilter.state('numberOfEvents')).toBe(32);
  // });

});