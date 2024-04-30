import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import useStore from './store';
import TodoItem from './TodoItem';
import TFs from './assets/TFs.jpg';

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
        <Image source={TFs} style={styles.logoheader} />
        <Text style={styles.headerText}>Pastrano Todo List</Text>
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
          <TodoItem 
            item={item} 
            index={index} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.text}>
        Copyright © 2024 Todo List. All rights reserved.
      </Text>
      <Text style={styles.text}>
        "John Leo F. Pastrano, 20211259, IT35C-IT83, App dev, BSIT, 2023-2024"
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    backgroundColor: '#483D8B', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1, 
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 10, 
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    elevation: 5, 
    marginBottom: 20, 
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    backgroundColor: '#f9f9f9', 
  },
  addButton: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 5, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
  },
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '100',
  },
  logoheader: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    marginBottom: 5,
  },
});

export default App;
