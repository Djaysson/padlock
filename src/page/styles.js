import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF99',
    borderBottomWidth: 20,
    borderBottomColor: '#FFA200',
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 7,
  },
  areaPassword: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#FFF7',
    width: '90%',
    borderRadius: 7,
    borderBottomWidth: 3,
    borderBottomColor: '#FFA200',
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
})

export default styles;