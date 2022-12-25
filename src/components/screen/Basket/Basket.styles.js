import { StyleSheet } from 'react-native';

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

  Image: {
    height: 300,
    width: 200,
  },
  Button: {
    height: 50,
    backgroundColor: 'green',
    width: 300,
    borderRadius: 40,
  },
  buyNowText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    top: 12,
  },
  buttonContainer: {
    top: '50%',
    left: 40,
  },

  ImageContainer: {
    alignItems: 'center',
  },
  square: {
    height: 450,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FAF9F4',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  checkoutText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    top: 10,
  },
  sizepriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '15%',
  },
  monsteraTextContainer: {
    marginTop: '25%',
  },
  monsteraText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  youText: {
    textAlign: 'center',
    fontSize: 17,
    top: 10,
  },
  sizeText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',

  },
  priceText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },

  
});

export default styles;
