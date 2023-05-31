import { render } from '@testing-library/react';
import { useAPI } from '../hooks/useAPIContext';
import Error from './Error';

jest.mock('../hooks/useAPIContext', () => ({
  useAPI: jest.fn()
}));

describe('checkError', () => {
  test('displays Error component when isError is true', () => {
    (useAPI as jest.Mock).mockReturnValue({
      isError: true
    })
    const { getByTestId } = render(Error());
    const errorComponent = getByTestId('error');
    expect(errorComponent).toBeInTheDocument();
  });
});



