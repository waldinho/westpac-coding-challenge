import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { useAPI } from '../hooks/useAPIContext';
import * as style from '../styleVars/variables';

// const ACTIVE_CLASS = 'active';

type Props = {
  setPostQuery: Dispatch<SetStateAction<string>>;
  setListItemNumber: Dispatch<SetStateAction<number>>;
};

const Nav = ({ setPostQuery, setListItemNumber }: Props): JSX.Element => {
  const { users } = useAPI();
  return (
    <Menu display="flex" justifyContent="space-between">
        {users?.map((item, i) => {
          const { name, id } = item;
          return (
            <Button 
              onClick={() => {
                setPostQuery(`?userId=${id}`), 
                setListItemNumber(3)}
              } 
              variant='contained' 
            >
              {name?.replace(/^\s*(?:M(?:iss|rs?|s)|Dr|Rev|Er)\b[\s.]*/igsm, '').substring(0, name.indexOf(' '))}
            </Button>
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

export default Nav;