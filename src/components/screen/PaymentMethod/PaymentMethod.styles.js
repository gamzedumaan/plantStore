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
  doneText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  paymentMethodContainer: {
    alignSelf: 'center',
  },
  PaymentMethodText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  choseTextContainer: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'black',
  },
  Image: {
    height: 50,
    width: 50,
    margin: 5,
  },
  card1: {
    marginTop: 25,
    borderRadius: 10,
    backgroundColor:'white',
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,

  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    marginRight: '30%',
    margin: 10,
  },
  cardNumber: {
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dateText: {
    margin: 5,
    color: 'grey',
  },
  buttonContainer: {
    top: '50%',
    left: 40,
  },
  Button: {
    height: 50,
    backgroundColor: 'green',
    width: 300,
    borderRadius: 40,
  },
  checkoutText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    top: 10,
  },
});

export default styles;
