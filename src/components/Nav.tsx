import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { useAPI } from '../hooks/useAPIContext';
import * as style from '../styleVars/variables';

type Props = {
  setPostQuery: Dispatch<SetStateAction<string>>;
  setListItemNumber: Dispatch<SetStateAction<number>>;
  setClickedUser: Dispatch<SetStateAction<string>>;
  clickedUser: string;
};

const Nav = ({ setPostQuery, setListItemNumber, setClickedUser, clickedUser }: Props): JSX.Element => {
  const { users } = useAPI();
  return (
    <Menu display="flex" justifyContent="space-between">
        {users?.map((item, i) => {
          const { name, id } = item;
          return (
            <NavButton 
              onClick={() => { 
                setPostQuery(`?userId=${id}`), 
                setListItemNumber(3), 
                setClickedUser(name) 
              }}
              variant='contained'
              active={(clickedUser === name).toString()}
              key={id}
            >
              {name?.replace(/^\s*(?:M(?:iss|rs?|s)|Dr|Rev|Er)\b[\s.]*/ig, '').split(' ')[0]}
            </NavButton>
          )
        })}
    </Menu>
  )
};

const Menu = styled(Box)`
  ${style.column};
  @media (min-width: ${style.desktop}) {
    ${style.row};
  }
`;

const NavButton = styled(Button)<{ active?: string }>`
  ${({ active }) => active === 'true' && `
    background-color: ${style.orange} !important;
  `}
`;

export default Nav;