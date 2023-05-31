import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { Context } from '../types/general'

const ApiContext = createContext<Context>({ users: [], posts: [], comments: [], isloading: false, isError: false })

interface Props {
  children?: ReactNode;
  query?: string;
  postQuery?: string;
  commentQuery?: string;
};

const ApiContextProvider = ({ children, query, postQuery, commentQuery }: Props) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url: string, type: 1 | 2 | 3) => { 
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        type === 1 && setUsers(json);
        type === 2 && setPosts(json);
        type === 3 && setComments(json);
        setIsLoading(false);
      }),
      (err: Error) => {
        console.log('Users Context error: ', err);
        setIsError(true);
      }
    }

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    fetchData(url, 1);
  }, [query]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postQuery}`;
    postQuery && fetchData(url, 2);
  }, [postQuery]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments/${commentQuery}`;
    commentQuery && fetchData(url, 3);
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