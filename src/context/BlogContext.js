import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
   // created a component that accepts another component as argument.

   const blogPosts = [
      { title: 'Blog Post #1' },
      { title: 'Blog Post #2' },
   ];

   return (
      <BlogContext.Provider value={blogPosts}>
         {children}   
      </BlogContext.Provider>
   );
};

export default BlogContext;
