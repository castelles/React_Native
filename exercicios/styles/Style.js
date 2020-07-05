import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  standard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  standardInput: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#222',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0077aa',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0077aa',
  },
  container: {
    width: 250,
    height: 300,
    marginTop: 15,
    backgroundColor: '#ffccff',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 70,
    fontSize: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  font40: {
    fontSize: 40,
  },
  flexContainer: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backgroundColor: '#bdf9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  sul: {
    flex: 1,
    backgroundColor: '#bdf9c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  },
});
