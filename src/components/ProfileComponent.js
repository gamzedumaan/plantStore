import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import EditProfile from './screen/EditProfile/EditProfile';

export default function ProfileComponent({ title, iconName, iconType }) {
  return (
    <View>
      <View style={styles.buttonEdit}>
        {iconType === 'Ionicons' && <Ionicons name={iconName} size={24} color="black" />}
        {iconType === 'MaterialIcons' && <MaterialIcons name={iconName} size={24} color="black" />}
        {iconType === 'MaterialCommunityIcons' && (
          <MaterialCommunityIcons name="help-circle-outline" size={24} color="black" />
        )}
        {iconType === 'Entypo' && <Entypo name="log-out" size={24} color="black" />}

        <Text style={styles.Text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonEdit: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CFD2CF',
    margin: 10,
    padding: 10,
  },
  Text: {
    left: 10,
    fontSize: 18,
    top: 2,
  },
});
