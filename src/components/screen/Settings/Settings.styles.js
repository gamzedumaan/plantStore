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
  accountPuplicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#909497',
    margin: 5,
    padding: 5,
    elevation: 2,
  },
  accountText: {
    fontSize: 20,
    margin: 5,
    padding: 5,
    color: '#909497',
    fontWeight: 'bold',
  },
  puplictext: {
    color: '#909497',
    fontSize: 17,
    marginLeft: '40%',
  },

  accountPrivacyText: {
    fontSize: 17,
  },
  PrivacyText: {
    zIndex: 1,
    position: 'absolute',
    marginTop: '20%',
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  personelText: {
    zIndex: 1,
    position: 'absolute',
    marginTop: '30%',
    color: 'white',
  },
  header: {
    height: 200,
    width: '100%',
    backgroundColor: 'green',
    alignSelf: 'center',
    borderBottomEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  showText: {
    fontSize: 17,
  },
  noneText: {
    color: '#909497',
    fontSize: 17,
    marginLeft: '40%',
  },
  followerstText: {
    fontSize: 20,
    margin: 5,
    padding: 5,
    color: '#909497',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '20%',
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
});

export default styles;
