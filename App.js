import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { create } from 'zustand';

// Create a store for managing todos
const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  editTodo: (index, newText) =>
    set((state) => ({
      todos: state.todos.map((todo, i) => (i === index ? newText : todo)),
    })),
}));

const App = () => {
  const [text, setText] = useState('');
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const editTodo = useStore((state) => state.editTodo);

  const handleAddTodo = () => {
    addTodo(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Add Todo"
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => deleteTodo(index)} style={styles.button}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const newText = prompt('Enter new text:');
                  if (newText !== null) {
                    editTodo(index, newText);
                  }
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
