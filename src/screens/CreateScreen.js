import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const { addBlogPost } = useContext(Context);

   return (
      <View>
         <Text style={styles.title}>Enter Title:</Text>
         <TextInput
            style={styles.textTitleStyle}
            value={title}
            onChangeText={(text) => setTitle(text)}
         />
         <Text style={styles.title}>Enter Content:</Text>
         <TextInput
            style={styles.textContentStyle}
            value={content}
            onChangeText={(text) => setContent(text)}
         />
         <Button
            title="Add Blog Post"
            onPress={() => addBlogPost(title, content)}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   title: {
      fontSize: 30,
      fontWeight: '300',
      marginTop: 10,
      marginLeft: 10,
   },

   textTitleStyle: {
      fontSize: 20,
      fontWeight: '400',
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      // height: 50,
   },

   textContentStyle: {
      fontSize: 20,
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      // height: 500,
   },
});

export default CreateScreen;
