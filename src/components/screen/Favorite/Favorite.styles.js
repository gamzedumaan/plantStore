import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  saleSquare: {
    height: '40%',
    width: '95%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  saleSquareContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
  },

  Image: {
    height: 100,
    width: 100,
    left:5,
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
  ImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  flowersText:{
    textAlign:'center',
    bottom:18,

  },
  favoriteText:{
    fontSize:20,
    fontWeight:'bold'
  },
  offText:{
    fontSize:20,
    fontWeight:'bold'
  },
  Icon4:{
    left:5,
    top:6
  }
});

export default styles;
