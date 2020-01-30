import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert  } from 'react-native';

export default function App() {
  const name = 'Dima';
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
          title="Press me"
          onPress={() => Alert.alert(`Hello, ${name}`)}
        />
      {/* <Text style={styles.textMessage}>Hello, {name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMessage: {
    fontWeight: 'bold' 
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 300
  }
});
