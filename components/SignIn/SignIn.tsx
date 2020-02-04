import React, { useEffect, isValidElement } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function SignIn ({navigation}) {
  const reviewSchema = yup.object({
    email: yup.string()
      .required()
      .email(),
    password: yup.string()
      .required()
      .min(8)
  });

  function handleSubmit() {
    navigation.navigate('Dashboard');
  }
  return (
  <View style={styles.container}>
      <Formik
        validateOnChange={true}
        initialValues={{ email: '', password: ''}}
        validationSchema={reviewSchema}
        onSubmit={() => {
          handleSubmit();
        }}
        isValid = {false}
      >
        {props => (
          <View>
            <Text style={styles.textMessage}>Input email</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')} 
              value={props.values.email}
            />
            <Text style={styles.textMessageError}>{props.touched.email && props.errors.email}</Text>

            <Text style={styles.textMessage}>Input password</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              secureTextEntry
            />
            <Text style={styles.textMessageError}>{props.touched.password && props.errors.password}</Text>
            
            <Button onPress={handleSubmit} title='SignIn' disabled={!props.isValid} />
          </View>
        )}
      </Formik>
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