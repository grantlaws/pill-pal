import React from 'react';
import renderer from 'react-test-renderer';

import { PillCard } from '../PillCard';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<PillCard name="name" formattedTimeLeft="time" dosage="dosage" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
