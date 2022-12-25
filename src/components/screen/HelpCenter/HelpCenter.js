import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/AntDesign';
import Icon3 from '@expo/vector-icons/Ionicons';

import styles from './HelpCenter.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HelpCenter({ navigation: { goBack } }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.iconContainer}>
          <Icon onPress={() => goBack()} name="chevron-left" size={30} color="black" />
          <Text style={styles.helpText}>Request Help</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={require('./../../../../image/cellimage.jpeg')} />
        </View>
        <View style={styles.weCanText}>
          <Text style={styles.weText}>We can help you ? </Text>
        </View>
        <View style={styles.ItsTextContainer}>
          <Text style={styles.ItsText}>
            Its looks like you are problems with our sign up process. We are here to help so please
            get in touch with us
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
          <TouchableOpacity>
            <View style={styles.chats}>
              <View style={{ alignSelf: 'center', marginTop: 25 }}>
                <Icon2 style={styles.Icon2} name="wechat" size={45} color="green" />
                <Text style={styles.chatText}>Chats to us</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.chats}>
              <View style={{ alignSelf: 'center', marginTop:25 }}>
                <Icon3 style={styles.Icon3} name="call-outline" size={45} color="green" />
                <Text style={styles.callText}>Call center</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HelpCenter;
