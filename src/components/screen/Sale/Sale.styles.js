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
  Image1: {
    height: 180,
    width: 90,
  },
  Image2: {
    height: 150,
    width: 90,
    marginTop:'10%'
   
  },
  Image3: {
    height: 140,
    width: 90,
    marginTop:'14%'
  },
  Image4: {
    height: 120,
    width: 90,
    marginTop:'20%'

  },
  saleText:{
    fontSize:21,
    fontWeight:'bold'
  },
  textsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  viewAllText:{
    fontSize:15
  },
  imageContainer:{
    flexDirection:'row',
  },
  flowersDataContainer: {
    margin: 10,
    padding: 10,
    marginTop: '5%',
    borderRadius: 20,
    backgroundColor: '#F4F7FF',
    height: 170,
    width: '45%',
  },
  ImageContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  Image: {
    height: 100,
    width: 100,
    right:5
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize:15
  },
  sizeText:{
    fontSize:12,
    color:'grey'
  },
});

export default styles;
