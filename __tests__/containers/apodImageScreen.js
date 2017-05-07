import 'react-native';
import React from 'react';
import ApodImageScreen from '../../app/containers/apodImageScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ApodImageScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
