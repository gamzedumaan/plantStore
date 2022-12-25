import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MenuComponent(props) {
  return (
    <View>
      <Text style={styles.nameText}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    color: 'black',
    fontSize: 20,
  },
});
