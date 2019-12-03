import React from 'react';
import renderer from 'react-test-renderer';

import { PillsLoggedTodayCard } from '../PillsLoggedTodayCard';

// mock data to represent pills the user has logged so far today
const pillsLoggedToday = [
  {
    id: 0,
    name: 'Ibuprofen',
    dosage: '2 pills',
    formattedTimeTaken: '8:30 a.m.',
  },
  {
    id: 1,
    name: 'Ibuprofen',
    dosage: '2 pills',
    formattedTimeTaken: '1:07 p.m.',
  },
  {
    id: 2,
    name: 'Nitroglycerin',
    dosage: '1 pill',
    formattedTimeTaken: '3:45 p.m.',
  },
];

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <PillsLoggedTodayCard
        title="Pills Logged Today"
        infoArray={pillsLoggedToday}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
