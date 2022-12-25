import React, { useState } from 'react';
import Icon2 from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Icon3 from '@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';

import styles from './CheckOutScreen.styles';

function CheckOutScreen({ navigation: { goBack } }) {
  const [totalValue, setTotalValue] = React.useState(false);
  const [close, setClose] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.IconsContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={24} color="black" />
          <Icon2 name="shoppingcart" size={24} color="black" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View style={styles.ImageContainer}>
            <Image style={styles.Image} source={require('./../../../../image/plant.png')} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sweatOrange}>Sweat Orange</Text>
            <View style={{ top: 5 }}>
              <Text style={styles.priceText}> €55</Text>
              <Text style={styles.pieceText}>Piece</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: '30%',
                }}>
                <Text style={styles.totalText}>Total : </Text>
                <Text style={styles.zeroText}>{totalValue}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <TouchableOpacity
                    onPress={() => {
                      setTotalValue(totalValue - 55);
                      console.log(totalValue);
                    }}>
                    <AntDesign style={styles.minus} name="minus" size={24} color="black" />
                  </TouchableOpacity>
            

                  <TouchableOpacity>
                    <Entypo
                      style={styles.plus}
                      name="plus"
                      size={24}
                      color="black"
                      onPress={() => {
                        setTotalValue(totalValue + 55);
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setClose(true)} style={styles.button}>
            <Text style={styles.buyText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent visible={close}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              height: 130,
              width: 310,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 8,
              shadowColor: 'black',
              shadowOffset: { width: 1, height: 0.5 },
              shadowRadius: 6,
              shadowOpacity: 1,
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ marginLeft: '22%', marginTop: '16%' }}>
                Your order has been received.
              </Text>
              <EvilIcons onPress={() => setClose(false)} name="close" size={24} color="black" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
export default CheckOutScreen;
