import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Icon3 from '@expo/vector-icons/Ionicons';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './EditProfile.styles';

function EditProfile({ navigation: { goBack } }) {
  const navigation = useNavigation();
  const complete = () => {
    Alert.alert('Complete');
  };

  const [username, setUsername] = useState();
  const [fullName, setFullName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [date, setDate] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.tabContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={30} color="black" />
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.Icon3Container}>
          <Icon3 name="person" size={100} color="black" />
        </View>
        <Text style={styles.usernameText}>Username</Text>
        <TextInput
          style={styles.Input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.fullnameText}>Full Name</Text>
        <TextInput
          style={styles.Input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Text style={styles.emailText}>Email Address</Text>
        <TextInput style={styles.Input} value={mail} onChangeText={(text) => setMail(text)} />
        <Entypo style={styles.Iconeye} name="eye-with-line" size={24} color="black" />
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.Input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.dateText}>Date of Birth </Text>
        <TextInput style={styles.Input} value={date} onChangeText={(text) => setDate(text)} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={complete} style={styles.Button}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.checkoutText}>Complete</Text>
              <Feather style={styles.checkIcon} name="check" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfile;
