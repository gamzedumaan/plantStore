import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import styles from './FirstPage.styles';

function FirstPage(props) {
  const _pressBtn = () => {
    props.setFirstValue(false);
  };
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.ImageContainer}>
     <Image style={styles.Image} source={require('./../../../image/plant.png')} />
     </View>

      <View style={{ alignItems: 'center',justifyContent:'center',flex:1 }}>
        <Text style={styles.favoriteText}>Favorite Plants</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.plantText}>Plant a </Text>
          <Text style={styles.treeText}>tree,</Text>
          <Text style={styles.greenText}>Grenn </Text>
          <Text style={styles.earthText}>the earth</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_pressBtn} style={styles.Button}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </View>
     
    </SafeAreaView>
  );
}

export default FirstPage;
