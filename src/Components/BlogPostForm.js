import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
   const [title, setTitle] = useState(initialValues.title);
   const [content, setContent] = useState(initialValues.content);
   // 2 labels
   // 2 textinputs
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
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
         />
      </View>
   );
};

BlogPostForm.defaultProps = {
   // default values when there is no initial values from created screens.
   initialValues: {
      title: '',
      content: '',
   },
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

export default BlogPostForm;
