import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Form } from 'react-native';

const Note = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
       <Form>
            <TextInput maxLength={64} style={styles.textInput}
            placeholder="Add Title"
            value={title}
            onChangeText={(text) => setTitle(text)} />
            
            <TextInput style={styles.textInput}
            multiline
            numberOfLines={5}
            placeholder="Write here"
            value={note}
            onChangeText={(text) => setNote(text)}  />
        </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    padding: 20,
    margin: 30,
    height: 170
  }
});

export default Note;