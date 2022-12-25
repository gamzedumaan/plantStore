import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  IconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Icon3Container: {
    alignItems: 'center',
    marginTop:'10%'
  },
  nameText:{
    textAlign:'center',
    fontSize:23
  },
  mailText:{
    fontSize:15
  }
});

export default styles;
