import { StyleSheet } from 'react-native';

// NOTE: COMMENT what every style created is for
// also make MEANINGFUL NAMES

const styles = StyleSheet.create({
  //app container
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Input text boxes on signup screen
  signupTextBox:{
    width: 275,
    height: 40, 
    borderBottomColor: "gray", 
    borderBottomWidth: 1, 
    marginTop: 40,
  },

  //Input text boxes on login screen
  loginTextBox:{
    width: 300,
    height: 50,
    borderBottomColor: "gray", 
    borderBottomWidth: 2, 
    marginTop: 40,
  },

  //Button for logging the user in
  loginButton: {
    width:"30%",
    backgroundColor:"#A9CBDF",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 15,
    height: 40,
    borderRadius: 20,
    marginLeft: "35%",
  },

  //Button for signing the user up
  signupButton: {
    width:"55%",
    backgroundColor:"#d39fe1",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    marginLeft: "25%",
  },

  //Button on the landing page for login navigation
  loginLandingButton: {
    width:"50%",
    backgroundColor:"#A9CBDF",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 50,
    borderRadius: 10,
    marginLeft: "0%",
  },

  //Button on the landing page for signup navigation
  signupLandingButton: {
    width:"50%",
    backgroundColor:"#d39fe1",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 50,
    borderRadius: 10,
    marginLeft: "0%",
  },

  //Button on the home page for profile navigation
  profileButton: {
    width:"20%",
    backgroundColor:"#66aa33",
    alignItems:"center",
    height: 35,
    borderRadius: 20,
    marginRight: "5%",
    marginTop: "5%",
    alignSelf: 'flex-end'
  },

  //Button for logging the user out
  logoutButton: {
    width:"50%",
    backgroundColor:"#469dee",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    marginLeft: "0%",
  },

  //Button for deleting the user's account
  deleteAccountButton: {
    width:"50%",
    backgroundColor:"#ee4657",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    marginLeft: "0%",
  },

  //Button for confirming deleting the user's account
  deleteConfirmButton: {
    width:"50%",
    backgroundColor:"#ee4657",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center'
  },

    //Button for cancelling the action
    cancelButton: {
    width:"50%",
    backgroundColor:"#20bddf",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center'
    },
    
  //Button for skipping in sign up pages
  skipButton: {
    width:"50%",
    backgroundColor:"#469dee",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 50,
    borderRadius: 10,
    marginLeft: "0%",
  },
      
  //Button for next page in sign up pages
  nextButton: {
    width:"55%",
    backgroundColor:"#66aa33",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 35,
    height: 40,
    borderRadius: 20,
    marginLeft: "0%",
  }, 

  //Items within Lists
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 40,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginBottom: 10,
  },

  //Object that displays a list
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },

  subtitle: {
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center',
    fontWeight: "500",
    color: "#4f4b4c"
  },

});

export default styles; 