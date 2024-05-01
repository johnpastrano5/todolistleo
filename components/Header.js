import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import TFs from './assets/TFs.jpg';

const Header = () => (
  <View style={styles.header}>
    <Image source={TFs} style={styles.logoheader} />
    <Text style={styles.headerText}>Pastrano Todo List</Text>
  </View>
);

const styles = StyleSheet.create({
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
  logoheader: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    marginBottom: 5,
  },
});

export default Header;
