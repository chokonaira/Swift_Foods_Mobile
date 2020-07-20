import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  authForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 40,
    justifyContent: "center",
    top: "7.5%",
  },
  authLoginForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 40,
    justifyContent: "center",
    top: "20%",
  },
  input: {
    borderBottomWidth: 1.5,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 6,
    color: '#fff',
    marginTop: '2%',
    borderColor: '#fff'
  },
  emptyInput: {
  },
  authFormInput:{
    width: '100%',
    justifyContent: "center",
    height: '100%',
    top: 10
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
    alignSelf: "center",
    alignItems: "center",
    width: "50%",
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
  buttonText:{
    color: '#fff',
    fontSize: 17,
   fontWeight: 'bold',
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  logo: {
    borderRadius: 100
   },
  logoWrapper: {
    alignItems: 'center', 
    justifyContent: 'flex-start',
    top: '8%',
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
  loginText:{
    paddingTop: 8,
    paddingRight: 7,
    alignSelf: 'flex-end',
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  keyboardViewContainer: {
    flex: 1
  },
});
