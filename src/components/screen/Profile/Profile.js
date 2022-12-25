import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import Icon2 from '@expo/vector-icons/AntDesign';
import Icon3 from '@expo/vector-icons/Ionicons';
import styles from './Profile.styles';
import ProfileComponent from '../../ProfileComponent';
import { useNavigation } from '@react-navigation/native';

function Profile({ navigation: { goBack } }) {
  const navigation = useNavigation();

  const EditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const PaymentMethod = () => {
    navigation.navigate('PaymentMethod');
  };
  const HelpCenter = () => {
    navigation.navigate('HelpCenter');
  };
  const Settings=()=>{
    navigation.navigate('Settings')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.IconsContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={30} color="black" />
            <Icon2 onPress={Settings} name="setting" size={24} color="black" />
        </View>
        <View style={styles.Icon3Container}>
          <Icon3 name="person" size={100} color="black" />
          <Text style={styles.nameText}>Nikita Jain</Text>
          <Text style={styles.mailText}>ğ@gmail.com</Text>
        </View>
        <TouchableOpacity onPress={EditProfile}>
          <ProfileComponent title="Edit Profile" iconName="person" iconType="Ionicons" />
        </TouchableOpacity>
        <TouchableOpacity onPress={PaymentMethod}>
          <ProfileComponent title="Payment Method" iconName="payments" iconType="MaterialIcons" />
        </TouchableOpacity>
        <TouchableOpacity onPress={HelpCenter}>
          <ProfileComponent
            title="Help Center"
            iconName="help-circle-outline"
            iconType="MaterialCommunityIcons"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default Profile;
