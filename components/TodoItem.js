// TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ item, index, deleteTodo, editTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => deleteTodo(index)} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const newText = prompt('');
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
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 3, 
  },
  todoText: {
    fontSize: 16,
    flex: 1,
    color: '#333', 
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#8A2BE2', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 10,
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
  },
});

export default TodoItem;
