import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import Nav from './Nav';

jest.mock('../hooks/useAPIContext', () => ({
  useAPI: jest.fn(() => ({
    users: [{
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }],
    isLoading: false,
    isError: false,
  })),
}));

describe('Nav', () => {
  it('renders the button', async() => {
    const { queryByText } = render(
      <Router>
        <Nav 
          setPostQuery={() => {}} 
          setListItemNumber={() => {}} 
          setClickedUser={() => {}} 
          clickedUser="Leanne Graham"
        />
      </Router>);
    await waitFor(() => {
      expect(queryByText('Leanne')).toBeInTheDocument();
      expect(queryByText('monkey baloons')).not.toBeInTheDocument();
    });
  });
});