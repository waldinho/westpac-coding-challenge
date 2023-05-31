import { Post, Comment } from '../types/general'

const filterTitles = (data: Post[] | Comment[], field: string, value: number) => {       
  const selected = Object.values(data).filter((item) => item[field] === value);
  return selected; 
}
  
export default filterTitles;