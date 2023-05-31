import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAPI } from './hooks/useAPIContext';
import ApiContextProvider from './hooks/useAPIContext';
import './styles.css';

import Nav from './components/Nav';
import Error from './components/Error';
import List from './containers/List';

export const App = (): JSX.Element => {
  const [postQuery, setPostQuery] = useState('');
  const [commentQuery, setCommentQuery] = useState('');
  const [listItemNumber, setListItemNumber] = useState(3);
  const [clickedUser, setClickedUser] = useState("");

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
      <Router>
        <Nav 
          setPostQuery={setPostQuery} 
          setListItemNumber={setListItemNumber} 
          setClickedUser={setClickedUser} 
          clickedUser={clickedUser}
        />
        {checkError()}
        {checkLoading()}
        <Routes>
          <Route path={`/`} element={
            <List 
              setCommentQuery={setCommentQuery} 
              listItemNumber={listItemNumber} 
              setListItemNumber={setListItemNumber} 
              clickedUser={clickedUser}
            />
          }/>
        </Routes>
      </Router>
    </ApiContextProvider>
  )
};