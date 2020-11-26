import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
   // created a component that accepts another component as argument.
   return (
      <BlogContext.Provider value={5}>
         {children}
      </BlogContext.Provider>
   )
};

export default BlogContext;
