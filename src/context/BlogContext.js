import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
   // 2 arguments == (state, action)
   // state object
   // action == { type, payload }
   switch (action.type) {
      case 'get_blogposts':
         return action.payload;
      // not using {...state, } since we want to replace existing state and not add onto the existing state.

      // case 'add_blogpost':
      //    return [
      //       ...state,
      //       {
      //          id: Math.floor(Math.random() * 99999),
      //          title: action.payload.title,
      //          content: action.payload.content,
      //       },
      //    ];

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

const getBlogPosts = (dispatch) => {
   return async () => {
      const response = await jsonServer.get('/blogPosts');
      // response.data === [{}, {}, {}]
      dispatch({ type: 'get_blogposts', payload: response.data });
   };
};

const addBlogPost = (dispatch) => {
   return async (title, content, callback) => {
      await jsonServer.post('/blogposts', { title, content });
      // dispatch({ type: 'add_blogpost', payload: { title, content } });
      if (callback) {
         callback();
      }
   };
};

const deleteBlogPost = (dispatch) => {
   return async (id) => {
      await jsonServer.delete(`/blogposts/${id}`);

      dispatch({ type: 'delete_blogpost', payload: id });
   };
};

const editBlogPost = (dispatch) => {
   return async (id, title, content, callback) => {
      await jsonServer.put(`/blogposts/${id}`, { title, content });
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
   { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
   []
);

// using useState(); create multiple const for each screen eg.
// const addBlogPost = () => {
//    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
//    // create a new array and add all the current blogposts in the new array.
// };
