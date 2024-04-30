// store.js
import create from 'zustand';

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({ todos: [todo, ...state.todos] })),
  deleteTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  editTodo: (index, newText) =>
    set((state) => ({
      todos: state.todos.map((todo, i) => (i === index ? newText : todo)),
    })),
}));

export default useStore;
