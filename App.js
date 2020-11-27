import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator(
   {
      index: IndexScreen,
      show: ShowScreen,
      create: CreateScreen,
   },
   {
      initialRouteName: 'index',
      defaultNavigationOptions: {
         title: 'BlogPost',
      },
   }
);

const App = createAppContainer(navigator);

export default () => {
   return (
      <BlogProvider>
         <App />
      </BlogProvider>
   );
};
