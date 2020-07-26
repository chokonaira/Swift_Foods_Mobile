import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  authForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 43,
    justifyContent: "center",
    top: "5%",
  },
  authLoginForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 40,
    justifyContent: "center",
    top: "18%",
  },
  registerInput: {
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "3%",
    borderColor: "#fff",
    backgroundColor: '#fff',
    opacity: .7,
  },
  loginInput: {
    borderBottomWidth: 1.5,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "4%",
    borderColor: "#fff",
    backgroundColor: '#fff',
    opacity: .7,
  },
  emptyInput: {},
  authFormInput: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
    // top: 10,
  },
  formText: {
    color: "red",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
  formButton: {
    marginTop: "5%",
    backgroundColor: "#FAC32D",
    alignSelf: "center",
    alignItems: "center",
    width: "50%",
    padding: 13,
    borderRadius: 30,
  },
  formTextWrapper: {
    alignItems: "center",
    width: "100%",
    top: "12%",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: 'black'
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
    backgroundColor: "#f0a500",
    color: "#fff",
    padding: 13,
    width: "50%",
    borderRadius: 30,
    padding: 17,
  },
  buttonWrapper: {
    marginTop: "50%",
    alignItems: "center",
    width: "100%",
    bottom: "8%",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  logo: {
    borderRadius: 100,
    width: '40%',
    height: '37%'
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    top: "8%",
    borderRadius: 150,
    flex: 1,
   
  },
  loginText: {
    paddingRight: 7,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    top: '7%'
  },
  loginTextWrapper: {
    flexDirection:"row",
    top: 35,
    alignSelf: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerText: {
    paddingTop: 8,
    paddingRight: 7,
    alignSelf: "flex-end",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerTextSpan: {
    color: "#fff",
    paddingRight: 12,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
   
  },
  loginTextSpan: {
    color: "#fff",
    paddingRight: 8,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
   
  },
  loginTextSpanWrapper:{
    // top: '8%'
  },
  keyboardViewContainer: {
    flex: 1,
  },
  errorText:{
    color: '#fff',
    paddingTop: '.5%',
    paddingLeft: '2%',
    fontWeight: 'bold'
  },
  FooterWrapper:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding:12,
    height: '8%',
    backgroundColor: '#f0a500',
  },
  footerText:{
    fontSize: 8,
  },
  tinyIcon: {
    width: 30,
    height: 30,
    borderColor: 'grey'
    // padding: 8
  }
});
