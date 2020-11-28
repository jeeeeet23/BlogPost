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
      case 'edit_blogpost':
         return state.map((blogPosts) => {
            return blogPosts.id === action.payload.id
               ? action.payload
               : blogPosts;
            //    if (blogPost.id === action.payload.id) {
            //       return action.payload;
            //    } else {
            //       return blogPost
            //    }
         });
      default:
         return state;
   }
};

const addBlogPost = (dispatch) => {
   return (title, content, callback) => {
      dispatch({ type: 'add_blogpost', payload: { title, content } });
      if (callback) {
         callback();
      }
   };
};

const deleteBlogPost = (dispatch) => {
   return (id) => {
      dispatch({ type: 'delete_blogpost', payload: id });
   };
};

const editBlogPost = (dispatch) => {
   return (id, title, content, callback) => {
      dispatch({
         type: 'edit_blogpost',
         payload: { id: id, title: title, content: content },
      });
      if (callback) {
         callback();
      }
   };
};

export const { Context, Provider } = createDataContext(
   blogReducer,
   { addBlogPost, deleteBlogPost, editBlogPost },
   [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);

// using useState(); create multiple const for each screen eg.
// const addBlogPost = () => {
//    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
//    // create a new array and add all the current blogposts in the new array.
// };
