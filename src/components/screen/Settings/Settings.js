import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './Settings.styles';

function Settings({ navigation: { goBack } }) {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [isButton, setIsButton] =useState(true);

  const toggleSwitch = () => setIsEnabled((previosState) => !previosState);
  const togglesSwitch = () => setIsButton((previosState) => !previosState);

  const Save = () => {
    Alert.alert('Save All !');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <Icon onPress={() => goBack()} name="chevron-left" size={30} color="black" />
        <View style={styles.header} />
        <Text style={styles.PrivacyText}>Privacy Settings</Text>
        <Text style={styles.personelText}>Personel data can be used to effect our reputations</Text>
        <View>
          <Text style={styles.accountText}>ACCOUNT</Text>
        </View>
        <View style={styles.accountPuplicContainer}>
          <Text style={styles.accountPrivacyText}>Acoount Privacy</Text>
          <Text style={styles.puplictext}>Puplic</Text>
          <TouchableOpacity>
            <AntDesign name="right" size={22} color="#909497" />
          </TouchableOpacity>
        </View>
        <View style={styles.accountPuplicContainer}>
          <Text style={styles.showText}>Show my account in search</Text>
          <Switch
            trackColor={{ false: 'green', true: 'green' }}
            ios_backgroundColor="#F2F2F2"
            thumbColor={isEnabled ? 'white' : 'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.accountPuplicContainer}>
          <Text style={styles.showText}>Blocked groups</Text>
          <Text style={styles.noneText}>None</Text>
          <TouchableOpacity>
            <AntDesign name="right" size={22} color="#909497" />
          </TouchableOpacity>
        </View>
        <View style={styles.followerstTextContainer}>
          <Text style={styles.followerstText}>FOLLOWERS</Text>
        </View>
        <View style={styles.accountPuplicContainer}>
          <Text style={styles.showText}>Show my followers count</Text>
          <Switch
            trackColor={{ false: 'green', true: 'green' }}
            ios_backgroundColor="#F2F2F2"
            thumbColor={isButton ? 'white' : 'white'}
            onValueChange={togglesSwitch}
            value={isButton}
          />
        </View>
        <View style={styles.accountPuplicContainer}>
          <Text style={styles.showText}>Blocked groups</Text>
          <Text style={styles.noneText}>None</Text>
          <TouchableOpacity>
            <AntDesign name="right" size={22} color="#909497" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Save} style={styles.button}>
            <Text style={styles.buyText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Settings;
