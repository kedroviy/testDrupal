import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SimpleCard} from '@components';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

describe('<SimpleCard />', () => {
  const defaultProps = {
    id: 1,
    title: 'Test Title',
    short_text: 'Test short text',
    image_url: 'https://test.com/image.png',
  };

  it('renders correctly', () => {
    const getByTestId = render(<SimpleCard {...defaultProps} />);
    expect(getByTestId).toMatchSnapshot();
  });

  it('navigates to new details screen when pressed', () => {
    const {getByText} = render(<SimpleCard {...defaultProps} />);
    fireEvent.press(getByText('See details'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('News Details Screen');
  });

  it('no navigates to new details screen when pressed with wrong route', () => {
    const {getByText} = render(<SimpleCard {...defaultProps} />);
    fireEvent.press(getByText('See details'));

    expect(mockNavigation.navigate).not.toHaveBeenCalledWith('Details Screen');
  });
});
