import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import useStore from './components/store';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import InputSection from './components/InputSection';
import Footer from './components/Footer';

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
      <Header />
      <InputSection
        text={text}
        onChangeText={setText}
        handleAddTodo={handleAddTodo}
      />
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
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});

export default App;
