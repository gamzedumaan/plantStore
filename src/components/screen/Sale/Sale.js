import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './Sale.styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

function Sale({navigation:{goBack}}) {
  const navigation = useNavigation();
  const Home = () => {
    navigation.navigate('Home');
  };
  const flowersData = [
    {
      id: 1,
      title: 'Monstera',
      price: '€10',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 2,
      title: 'Monstera Adan',
      price: '€20',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Sweet Orange',
      price: '€30',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 4,
      title: 'Alocasia Zebra',
      price: '€25',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 5,
      title: 'Papias',
      price: '€25',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 6,
      title: 'Purple Plant',
      price: '€25',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
      <Icon onPress={() => goBack()} name="chevron-left" size={30} color="black" />

        <View style={styles.imageContainer}>
          <Image style={styles.Image1} source={require('./../../../../image/plant.png')} />
          <Image style={styles.Image2} source={require('./../../../../image/plant.png')} />
          <Image style={styles.Image3} source={require('./../../../../image/plant.png')} />
          <Image style={styles.Image4} source={require('./../../../../image/plant.png')} />
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.saleText}>Sale</Text>
          <TouchableOpacity onPress={Home}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          data={flowersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.flowersDataContainer}>
                <View style={styles.ImageContainer}>
                  <Image style={styles.Image} source={item.img} />
                </View>
                <Text style={styles.titleText}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                  <Text style={styles.priceText}>{item.price}</Text>
                  <Text style={styles.sizeText}>{item.size}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Sale;
