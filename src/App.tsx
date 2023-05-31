import React, { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useAPI } from './hooks/useAPIContext';
import ApiContextProvider from './hooks/useAPIContext';
import './styles.css';

import Nav from './components/Nav';
import Error from './components/Error';
import List from './containers/List';

export const App = (): JSX.Element => {
  const [postQuery, setPostQuery] = useState(false);
  const [commentQuery, setCommentQuery] = useState(false);
  const [listItemNumber, setListItemNumber] = useState(3);
  const [clickedUser, setClickedUser] = useState("");
  const [clickedUserId, setClickedUserId] = useState(-1);

  const checkError = (): JSX.Element => {
    const { isError } = useAPI();
    return <>{isError && <Error/>}</>;
  };

  const checkLoading = (): JSX.Element => {
    const { posts, users } = useAPI();
    return <>{posts.length === 0 || users.length === 0 && <Box display="flex" justifyContent="center" mt={25}><CircularProgress /></Box>}</>; 
  };

  return (
    <ApiContextProvider query="users" postQuery={postQuery} commentQuery={commentQuery}>
      <Nav 
        setPostQuery={setPostQuery} 
        setListItemNumber={setListItemNumber} 
        setClickedUser={setClickedUser} 
        clickedUser={clickedUser}
        setClickedUserId={setClickedUserId}
      />
      {checkError()}
      {checkLoading()}
      <List 
        setCommentQuery={setCommentQuery} 
        listItemNumber={listItemNumber} 
        setListItemNumber={setListItemNumber} 
        clickedUser={clickedUser}
        clickedUserId={clickedUserId}
      />
    </ApiContextProvider>
  )
};