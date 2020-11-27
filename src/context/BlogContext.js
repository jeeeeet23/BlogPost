import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
   // 2 arguments == (state, action)
   // state object
   // action == { type, payload }
   switch (action.type) {
      case 'add_blogpost':
         return [
            ...state,
            {
               id: Math.floor(Math.random() * 99999),
               title: action.payload.title,
               content: action.payload.content,
            },
         ];
      case 'delete_blogpost':
         return state.filter((blogPosts) => blogPosts.id !== action.payload);
      // it will save whatever is true. remove whatever is false.
      default:
         return state;
   }
};

const addBlogPost = (dispatch) => {
   return (title, content) => {
      dispatch({ type: 'add_blogpost', payload: { title, content } });
   };
};

const deleteBlogPost = (dispatch) => {
   return (id) => {
      dispatch({ type: 'delete_blogpost', payload: id });
   };
};

export const { Context, Provider } = createDataContext(
   blogReducer,
   { addBlogPost, deleteBlogPost },
   []
);

// using useState(); create multiple const for each screen eg.
// const addBlogPost = () => {
//    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
//    // create a new array and add all the current blogposts in the new array.
// };
