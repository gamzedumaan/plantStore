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
  cardText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  Input: {
    borderBottomWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'green',
  },
  InputContainer: {
    marginTop: 20,
  },
  InputContainerExpires: {
    marginTop: 20,
  },
  InputCredit: {
    borderBottomWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'green',
  },
  InputExpires: {
    borderBottomWidth: 2,
    borderRadius: 5,
    width: 170,
    marginTop: 10,
    borderColor: 'green',
  },
  nameText: {
    marginTop: 10,
  },
  creditText: {
    marginTop: 10,
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
