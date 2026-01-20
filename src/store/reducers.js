const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;
