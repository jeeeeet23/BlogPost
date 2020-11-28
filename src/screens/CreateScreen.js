import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
   const { addBlogPost } = useContext(Context);

   return (
      <BlogPostForm
         onSubmit={(title, content) => {
            addBlogPost(title, content, () => {
               navigation.navigate('index');
            });
         }}
      />
   );
};

const styles = StyleSheet.create({});

export default CreateScreen;
