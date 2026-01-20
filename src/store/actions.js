import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/tasks');
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const addTask = (title) => async (dispatch) => {
  try {
    const response = await axios.post('/api/tasks', { title });
    dispatch({ type: 'ADD_TASK', payload: response.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: id });
  } catch (err) {
    console.error(err.message);
  }
};
