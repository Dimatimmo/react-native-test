import React, { useEffect } from 'react';
import { StyleSheet, TextInput, Button, View, Alert , Text } from 'react-native';


  export default function SignIn ({navigation}) {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  let [emailError, setEmailError] = React.useState('');
  let [passwordError, setPasswordError] = React.useState('');
  let [validForm, ValidationForm] = React.useState(false);



  useEffect(() => {
    if(validateEmail() && validatePassword()){
      ValidationForm(validForm = true);
    } else {
      ValidationForm(validForm = false);
    }
    outEmailError();
    outPasswordError();
  })

  function validateEmail() {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      return true
    }
  }

  function validatePassword() {
    if (password.length >= 6 ){
      return true
    }
  }

  function outEmailError() {
    if(validateEmail()){
      setEmailError(emailError = '');
    } else {
      setEmailError(emailError='Input correct email');
    }
  }

  function outPasswordError() {
    if(validatePassword()){
      setPasswordError(passwordError = '');
    } else {
      setPasswordError(passwordError = `Your password must be more then ${password.length}` );
    }
  }

  function handleSubmit() {
    if(validForm = true){
      navigation.navigate('Dashboard');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textMessage}>Input email</Text>
      <TextInput style={styles.input} onChangeText={text => onChangeEmail(text)} value={email}/>
      <Text style={styles.textMessageError}>{emailError}</Text>
      <Text style={styles.textMessage}>Input password</Text>
      <TextInput secureTextEntry={true}  style={styles.input} onChangeText={text => onChangePassword(text)} value={password}/>
      <Text style={styles.textMessageError}>{passwordError}</Text>
      <Button onPress={handleSubmit} disabled={!validForm} title="SignIn"/>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textMessage: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 10
    
  },
  textMessageError: {
    color: 'red'
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 300,
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

// export default SignIn;