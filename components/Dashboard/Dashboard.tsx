import React, {useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Dashboard ({navigation}) {
  
  function handleSubmit() {
    navigation.navigate('SignIn');
  }

  useEffect( () => {
    
  })

  

  return (
    <View style={styles.container}>
      <Text style={styles.textMessage}>Hello</Text>
      <Button onPress={handleSubmit} title="Logout"></Button>
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
});