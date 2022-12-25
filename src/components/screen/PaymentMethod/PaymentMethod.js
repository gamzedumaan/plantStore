import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './PaymentMethod.styles';

function PaymentMethod() {
  const navigation = useNavigation();
  const {goBack}=useNavigation();
  const AddCard = () => {
    navigation.navigate('AddCard');
  };
  const [cancel, setCancel]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons onPress={goBack} name="cancel" size={24} color="black" />
          <Text style={styles.doneText}>Done</Text>
        </View>
        <View style={styles.paymentMethodContainer}>
          <Text style={styles.PaymentMethodText}>Payment method</Text>
        </View>
        <View style={styles.choseTextContainer}>
          <Text style={styles.choseText}>Choose desired vehicle type.</Text>
        </View>

        <TouchableOpacity style={styles.card1}>
          <View style={styles.contentContainer}>
            <Image style={styles.Image} source={require('./../../../../image/cardImage.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.cardNumber}>**** **** *** 5674</Text>
              <Text style={styles.dateText}>Expires 09/25</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card1}>
          <View style={styles.contentContainer}>
            <Image style={styles.Image} source={require('./../../../../image/image.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.cardNumber}>**** **** *** 0908</Text>
              <Text style={styles.dateText}>Expires 08/43</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={AddCard} style={styles.Button}>
            <Text style={styles.checkoutText}>ADD PAYMENT METHOD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PaymentMethod;
