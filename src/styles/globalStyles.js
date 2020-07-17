import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  authForm: {
    flex: 1,
    width: "100%",
    padding: 30,
    justifyContent: "center",
    bottom: "8%",
  },
  input: {
    borderWidth: .5,
    borderColor: "#fff",
    padding: 10,
    fontSize: 15,
    borderRadius: 6,
    color: '#fff'
  },
  formText: {
    // flex: 1,
    color: 'red',
    // width: "100%",
    // padding: 10,
    alignItems: "center",
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: "center",
  },
  formButton:{
    marginTop: 60
  },
  formTextWrapper:{
    alignItems: "center",
    width: "100%",
    top: '15%',
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
  
  // buttonWrapper: {
  //   alignItems: "center",
  //   width: "100%",
  //   bottom: "7%",
  // },
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
