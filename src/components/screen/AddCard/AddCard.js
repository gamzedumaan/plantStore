import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './AddCard.styles';

function AddCard({ navigation: { goBack } }) {
  const navigation = useNavigation();
  const Save = () => {
    Alert.alert('Recorded !');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.IconsContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={24} color="black" />
        </View>
        <Text style={styles.cardText}>Add to Credit Card</Text>
        <View style={styles.InputContainer}>
          <Text style={styles.nameText}>Name</Text>
          <TextInput style={styles.Input} />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.creditText}>Credit card number</Text>
          <TextInput secureTextEntry style={styles.InputCredit} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.InputContainerExpires}>
            <Text style={styles.expiresText}>Expires</Text>
            <TextInput style={styles.InputExpires} />
          </View>
          <View style={styles.InputContainerExpires}>
            <Text style={styles.expiresText}>CVV</Text>
            <TextInput secureTextEntry style={styles.InputExpires} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Save} style={styles.Button}>
            <Text style={styles.checkoutText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AddCard;
