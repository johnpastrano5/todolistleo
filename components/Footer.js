import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => (
  <View>
    <Text style={styles.text}>
      Copyright © 2024 Todo List. All rights reserved.
    </Text>
    <Text style={styles.text}>
      "John Leo F. Pastrano, 20211259, IT35C-IT83, App dev, BSIT, 2023-2024"
    </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '100',
  },
});

export default Footer;
