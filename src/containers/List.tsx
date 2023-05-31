import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, Card, Box } from '@mui/material';
import { useAPI } from '../hooks/useAPIContext';
import filterData from '../utils/filterData';
import * as style from '../styleVars/variables';

type Props = {
  listItemNumber: number;
  setListItemNumber: Dispatch<SetStateAction<number>>;
  clickedUser?: string;
  clickedUserId: number;
};
  
const List = ({ listItemNumber, setListItemNumber, clickedUser, clickedUserId }: Props)=> {
  const { posts, comments } = useAPI();
  const [clickedPost, setClickedPost] = useState(0);
  return <>
    {clickedUser && <h2>Posts by {clickedUser}</h2>}
    {filterData(posts, 'userId', clickedUserId)?.slice(0, listItemNumber).map(item => {
      const {id, title, body} = item;
      return (
        <Card sx={{ my: 1, p: 2, }} key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <Button 
            onClick={() => { 
              setClickedPost(id)
            }} 
            variant='contained' 
            >
              Expand
          </Button>
          {clickedPost === id && filterData(comments, 'postId', id)?.map((comment, i) => 
            <Card sx={{ backgroundColor: style.lightGrey, padding: 1, marginY: 1 }} key={`${comment?.body + i}`}>
              <p>{comment?.body}</p>
              <h5>User: {comment?.email}</h5>
            </Card>
          )}
        </Card>
    )})}
    {listItemNumber === posts?.length || posts?.length !== 0 && 
      <Box display="flex" justifyContent="center">
        <Button onClick={() => {setListItemNumber(posts?.length)}} variant='contained' sx={{ my: 2 }}>Load all</Button>
      </Box>
    }
  </>;
};

export default List;