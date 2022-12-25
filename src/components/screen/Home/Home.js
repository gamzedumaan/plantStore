import Icon4 from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from '@expo/vector-icons/build/Ionicons';
import Icon2 from '@expo/vector-icons/build/Ionicons';
import Icon3 from '@expo/vector-icons/build/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, FlatList, Image, Alert } from 'react-native';
import MenuComponent from '../../MenuComponent';
import styles from './Home.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home() {
  const navigation = useNavigation();

  const Profile = () => {
    navigation.navigate('Profile');
  };
  const notifications = () => {
    Alert.alert('No Notification');
  };
  const flowersData = [
    {
      id: 1,
      title: 'Monstera',
      price: '€55',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 2,
      title: 'Monstera Adan',
      price: '€40',
      size: 'S,M,L',
      img: require('./../../../../image/plant.png'),
    },
    {
      id: 3,
      title: 'Sweet Orange',
      price: '€32',
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
        <View style={styles.iconContainer}>
          <Icon3 onPress={Profile} style={styles.Icon3} name="ios-person" size={24} color="black" />
          <Icon2
            onPress={notifications}
            style={styles.Icon2}
            name="md-notifications"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.dealText}>Deal of </Text>
          <View style={styles.TextIconContainer}>
            <Text style={styles.thedayText}>the day</Text>
            <Icon4 style={styles.Icon4} name="bee-flower" size={30} color="green" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }}>
          <TouchableOpacity>
            <MenuComponent name="All" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuComponent name="Indoor" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuComponent name="Outdoor" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuComponent name="Pots" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuComponent name="New In" />
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
export default Home;
