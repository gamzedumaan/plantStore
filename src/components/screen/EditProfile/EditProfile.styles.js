import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editProfileText: {
    marginLeft: '30%',
    fontSize: 20,
    fontWeight:'bold'
  },
  Icon3Container: {
    alignItems: 'center',
    marginTop: '10%',
  },
  Input: {
    height: 45,
    width: '100%',
    fontSize: 32,
    borderRadius:30,
    backgroundColor: '#F4F7FF',
    marginVertical: 8,
    fontWeight: 'bold',
    elevation:8,
  },
  usernameText:{
    fontSize:18,
    color:'black'
  },
  fullnameText:{
    fontSize:18,
    color:'black'
  },
  emailText:{
    fontSize:18,
    color:'black' 
  },
  passwordText:{
    fontSize:18,
    color:'black' 
  },
  dateText:{
    fontSize:18,
    color:'black' 
  },
  buttonContainer: {
    left: 40,
  },
  Button: {
    height: 50,
    backgroundColor: 'green',
    width: 280,
    borderRadius: 40,
  },
  checkoutText: {
    color: 'white',
    fontSize: 20,
    top: 10,
    marginLeft:'32%'
  },
  Iconeye:{
    zIndex:10,
    position:'absolute',
    marginLeft:'83%',
    marginTop:'127%'
  },
  checkIcon:{
    top: 10,
    marginRight:10
  }
});

export default styles;
