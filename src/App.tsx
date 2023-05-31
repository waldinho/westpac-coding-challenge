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

  const AppRoutes = (): JSX.Element => {
    const { users } = useAPI();
    return (
      <Routes>
        {users?.map(item => {
          const { id } = item;
          return <Route path={`/${id}`} element={
            <List 
              listItemNumber={listItemNumber} 
              setListItemNumber={setListItemNumber} 
              clickedUser={clickedUser}
              clickedUserId={clickedUserId}
            />
          } key={id} />
        })}
      </Routes>
    )
  };

  return (
    <ApiContextProvider query="users" postQuery={postQuery} commentQuery={commentQuery}>
      <Router>
        <Nav 
          setPostQuery={setPostQuery} 
          setListItemNumber={setListItemNumber} 
          setClickedUser={setClickedUser} 
          clickedUser={clickedUser}
          setClickedUserId={setClickedUserId}
          setCommentQuery={setCommentQuery} 
        />
        {checkError()}
        {checkLoading()}
        <AppRoutes />
      </Router>
    </ApiContextProvider>
  )
};