import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { Context } from '../types/general'

const ApiContext = createContext<Context>({ 
  users: [], 
  posts: [], 
  comments: [], 
  isloading: false, 
  isError: false 
})

interface Props {
  children?: ReactNode;
  query?: string;
  postQuery?: boolean;
  commentQuery?: boolean;
};

const ApiContextProvider = ({ children, query, postQuery, commentQuery }: Props) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url: string, type: 1 | 2 | 3) => { 
    try {
      const data = await fetch(url);
      const json = await data.json();
      type === 1 && setUsers(json);
      type === 2 && setPosts(json);
      type === 3 && setComments(json);
    } 
    catch (error) {
      console.log('API Context error: ', error);
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    fetchData(url, 1);
  }, [query]);

  useEffect(() => {
    postQuery && fetchData('https://jsonplaceholder.typicode.com/posts', 2);
  }, [postQuery]);

  useEffect(() => {
    commentQuery && fetchData('https://jsonplaceholder.typicode.com/comments', 3);
  }, [commentQuery]);

  return (
    <ApiContext.Provider value={{ users, posts, comments, isloading, isError }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;

export const useAPI = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}