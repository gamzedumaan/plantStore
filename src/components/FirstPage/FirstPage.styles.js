import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  Image: {
    height: 400,
    width: 400,
  },
  Button: {
    height: 50,
    backgroundColor: 'green',
    width: 300,
    borderRadius: 40,
  },
  getStartedText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    top: 12,
  },
  buttonContainer: {
    marginTop:30
  },
  favoriteText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
  },

  plantText: {
    color: 'black',
    fontSize: 18,
  },
  treeText: {
    color: 'green',
    fontSize: 18,
  },
  greenText: {
    color: 'green',
    fontSize: 18,
  },
  earthText: {
    color: 'black',
    fontSize: 18,
  },
  ImageContainer: {
    alignSelf: 'center',
    marginTop:30
  },
});

export default styles;
