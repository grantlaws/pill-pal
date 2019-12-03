import React from 'react';
import { CalendarNote } from '../components/CalendarNote';

/**
 * Mock data to represent notes from the user.
 */
const notes = {
  id: 0,
  todaysDate: 'November 4th, 2019',
  pillsTaken: '2 Ibuprofen, 1 Hydrocodone',
  symptoms: 'Constipation, Sweating',
  feelings: 'Sad, Angry, Irritable',
  additionalDetails:
    'Here are my notes for today. I can put anything I want here.',
};

export default function CalendarScreen() {
  return (
    <CalendarNote
      key={notes.id}
      todaysDate={notes.todaysDate}
      pillsTaken={notes.pillsTaken}
      symptoms={notes.symptoms}
      feelings={notes.feelings}
      additionalDetails={notes.additionalDetails}
    />
  );
}

CalendarScreen.navigationOptions = {
  title: 'Calendar',
};
