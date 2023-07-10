import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NewsDetailsScreen} from '@screens';
import {useSelector} from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  multiGet: jest.fn().mockResolvedValue([
    ['access-token', 'testAccessToken'],
    ['client', 'testClient'],
    ['uid', 'testUid'],
    ['authorization', 'testAuthorization'],
  ]),
}));

describe('<NewsDetailsScreen />', () => {
  const defaultProps = {};

  beforeEach(() => {
    useSelector.mockImplementation(selector =>
      selector({
        appReducer: {currentPost: 1},
      }),
    );
  });

  it('renders correctly', () => {
    const getByTestId = render(<NewsDetailsScreen {...defaultProps} />);
    expect(getByTestId).toMatchSnapshot();
  });

  it('navigates back when "Back" button is pressed', () => {
    const {getByText} = render(<NewsDetailsScreen {...defaultProps} />);
    fireEvent.press(getByText('Back'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Main Screen');
  });
});
