import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskForm = ({ onSubmit }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const submitHandler = () => {
    onSubmit(newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Название задачи"
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
        style={styles.input}
      />
      <Button title="Добавить задачу" onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10
  }
});

export default AddTaskForm;
