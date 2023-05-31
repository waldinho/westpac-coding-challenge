export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  }
}

export type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export type Context = {
  users: User[],
  posts: Post[],
  comments: Comment[],
  isloading: boolean;
  isError: boolean;
};

export type UserContext = {
  data: User[],
  isloading: boolean;
  isError: boolean;
};

export type PostContext = {
  data: Post[],
  isloading: boolean;
  isError: boolean;
};

export type CommentContext = {
  data: Comment[],
  isloading: boolean;
  isError: boolean;
};

export type Nav = {
  title:  string,
  type: 'series' | 'movie' | null;
  path: string;
  location: string;
};