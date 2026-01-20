import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { connect } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from '../store/actions';

const HomeScreen = ({ navigation, tasks, fetchTasksAction, addTaskAction, deleteTaskAction }) => {
  useEffect(() => {
    fetchTasksAction();
  }, []);

  const handleAddTask = (title) => {
    addTaskAction(title);
  };

  const handleDeleteTask = (id) => {
    deleteTaskAction(id);
  };

  return (
    <View style={styles.container}>
      <Header title="Список дел" />
      <TaskList tasks={tasks} handleDelete={handleDeleteTask} />
      <AddTaskForm onSubmit={handleAddTask} />
    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasksAction: () => dispatch(fetchTasks()),
  addTaskAction: (title) => dispatch(addTask(title)),
  deleteTaskAction: (id) => dispatch(deleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
