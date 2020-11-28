import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
   // console.log(navigation.getParam('id'));
   const { state } = useContext(Context);
   // big list of blogposts == state

   const blogPost = state.find(
      (blogPost) => blogPost.id === navigation.getParam('id')
   );

   return (
      <View>
         <Text>{blogPost.title}</Text>
         <Text>{blogPost.content}</Text>
      </View>
   );
};

ShowScreen.navigationOptions = ({ navigation }) => {
   return {
      headerRight: () => (
         <TouchableOpacity
            onPress={() =>
               navigation.navigate('edit', { id: navigation.getParam('id') })
            }
         >
            <MaterialCommunityIcons
               style={{ marginRight: 10 }}
               name="pencil"
               size={30}
            />
         </TouchableOpacity>
      ),
   };
};

const styles = StyleSheet.create({});

export default ShowScreen;
