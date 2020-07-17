import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  authForm: {
    flex: 1,
    width: "100%",
    padding: 40,
    justifyContent: "center",
    bottom: "8%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 6,
    color: '#fff',
    marginTop: '2%',
    borderBottomColor: '#fff'
  },
  authFormInput:{
    width: '100%',
    justifyContent: "center",
  },
  formText: {
    color: 'red',
    alignItems: "center",
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: "center",
  },
  formButton:{
    marginTop: '5%',
    backgroundColor: "red",
    alignItems: "center",
    width: "100%",
    padding: 13,
    borderRadius: 30,
  },
  formTextWrapper:{
    alignItems: "center",
    width: "100%",
    top: '12%',
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  text: {
    color: "#fff",
    padding: 30,
    width: "95%",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: "12%",
  },
  link: {
    alignItems: "center",
    width: "100%",
    bottom: "9%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    color: "#fff",
    padding: 13,
    width: "50%",
    borderRadius: 30,
    padding: 17,
  },
  buttonWrapper: {
    marginTop: '50%',
    alignItems: "center",
    width: "100%",
    bottom: "5%",
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  logo: {
    borderRadius: 100
   },
  logoWrapper: {
    alignItems: 'center', 
    justifyContent: 'flex-start',
    top: '5%',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff',
    padding: 13,
    width: '50%',
    borderRadius: 30,
    padding: 17,
    
  },
  buttonWrapper: {
    alignItems: 'center',
    width: '100%',
    bottom: '5%',
  },
  buttonText:{
    color: '#fff',
    fontSize: 17,
   fontWeight: 'bold',
  }
});
