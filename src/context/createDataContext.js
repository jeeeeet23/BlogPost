// automate the creation of functions.

import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
   const Context = React.createContext();

   const Provider = ({ children }) => {
      // created a component that accepts another component as argument.
      const [state, disptach] = useReducer(reducer, initialState);

      // actions === { addBlogPost: (dispatch) => { return () => {} } }
      const boundAction = {};
      for (let key in actions) {
         boundAction[key] = actions[key](disptach);
      }

      return (
         <Context.Provider value={{ state, ...boundAction }}>
            {children}
         </Context.Provider>
      );
   };

   return { Context, Provider };
};
