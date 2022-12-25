import Icon4 from '@expo/vector-icons/AntDesign';
import Icon3 from '@expo/vector-icons/Entypo';
import Icon2 from '@expo/vector-icons/FontAwesome';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Favorite.styles';


function Favorite() {
  const navigation = useNavigation();

  const Basket = () => {
    navigation.navigate('Basket');
  };

  const Sale = () => {
    navigation.navigate('Sale');
  };

  const flowersData = [
    {
      id: 1,
      title: 'Monstera',
      price: '€55',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 2,
      title: 'Monstera Adan',
      price: '€40',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Monstera',
      price: '€55',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Monstera Adan',
      price: '€40',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Monstera',
      price: '€55',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Monstera Adan',
      price: '€40',
      img: require('./../../../../image/plant.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <TouchableOpacity onPress={Sale}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', top: 20 }}>
            <View
              style={{ height: 100, width: '98%', backgroundColor: '#F2F2F2', borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 35 }}>
                <Icon style={styles.Icon} name="sale" size={35} color="black" />
                <Text style={styles.offText}>75% OFF</Text>
                <Icon2 style={styles.Icon2} name="angle-right" size={40} color="black" />
              </View>
              <Text style={styles.flowersText}>on all plants & flowers</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: '10%' }}>
          <Text style={styles.favoriteText}>Favorite Items</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            numColumns={2}
            data={flowersData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.flowersDataContainer}>
                  <View style={styles.ImageContainer}>
                    <Image style={styles.Image} source={item.img} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          backgroundColor: 'white',
                        }}>
                        <Icon4 style={styles.Icon4} name="heart" size={24} color="red" />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                    <Text style={styles.priceText}>{item.price}</Text>
                    <Icon3 onPress={Basket} name="plus" size={26} color="black" />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Favorite;
