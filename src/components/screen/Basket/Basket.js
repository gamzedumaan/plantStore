import Icon2 from '@expo/vector-icons/AntDesign';
import Icon3 from '@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';

import styles from './Basket.styles';

function Basket({ navigation: { goBack } }) {
  const navigation = useNavigation();

  const CheckOut = () => {
    navigation.navigate('Checkout');
  };
  const [visible, setVisible] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.IconsContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={24} color="black" />
          <Icon2 name="shoppingcart" size={24} color="black" />
        </View>

        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={require('./../../../../image/plant.png')} />
        </View>
        <View style={styles.square}>
          <View style={{ width: '93%', alignSelf: 'center' }}>
            <View style={styles.monsteraTextContainer}>
              <Text style={styles.monsteraText}>Monstera Variegated</Text>
              <Text style={styles.youText}>You won't find a variegated Monstera in the wild.</Text>
            </View>
            <View style={styles.sizepriceContainer}>
              <Text style={styles.sizeText}>Size : S</Text>
              <Text style={styles.priceText}>€56.96</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={CheckOut} style={styles.Button}>
                <Text style={styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Basket;
