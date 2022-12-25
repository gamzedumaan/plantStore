import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
    flex: 1,
  },
  IconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    height: 150,
    width: 130,
  },
  ImageContainer: {
    marginBottom: 40,
  },
  containerTexts: {
    alignItems: 'center',
    bottom: '40%',
    left: 20,
  },
  sweatOrange: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontSize: 17,
    color: 'black',
    right: 5,
  },
  pieceText: {
    fontSize: 17,
    color: 'black',
  },
  minus: {
    marginRight: 10,
  },
  zeroText: {
    fontSize: 20,
    marginRight: 30,
  },
  plus: {
    marginRight: 30,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 30,
  },
  buyText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    top: 10,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
  totalText: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default styles;
