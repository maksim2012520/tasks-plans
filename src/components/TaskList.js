import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, handleDelete }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <View style={styles.task}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginHorizontal: 16
  }
});

export default TaskList;
