import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helpText:{
    fontSize: 17,
    color: 'black',
    marginRight:'35%'
  },
  chats:{
    height:130,
    width:130,
    borderRadius:10,
    elevation: 8,
    backgroundColor: '#FAF9F4',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  Image:{
    height:240,
    width:240,

  },
  ImageContainer:{
    alignSelf:'center'
  },
  weCanText:{
    alignSelf:'center'

  },
  weText:{
    fontSize:20,
    color:'black'
  },
  ItsTextContainer:{
    alignSelf:'center'
  },
  ItsText:{
    fontSize:14,
    color:'black',
    marginTop:15
  },
  chatText:{
    fontSize:16,
    color:'green',
  },
  callText:{
    color:'green',
    fontSize:16
  },
  Icon2:{
    marginLeft:17
  },
  Icon3:{
    marginLeft:17

  }
  
});

export default styles;
