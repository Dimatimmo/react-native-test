import React, {useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

export default function Dashboard ({navigation}) {

  let [posts, setPosts] = React.useState([]);
  
  function handleSubmit() {
    navigation.navigate('SignIn');
  }

  const url = 'https://my-json-server.typicode.com/typicode/demo/posts';

  useEffect(() => {
    getData();
  })

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(posts = data);
  }
  
  const renderItem = ({item}) => {
    return(
    <View style={styles.postsList}>
      <Text style = {styles.postHead}>PostId: {item.id}</Text>
      <Text style = {styles.postsContent}>Post Title: {item.title}</Text>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={posts}
        renderItem={renderItem}
      />
      <Button onPress={handleSubmit} title="Logout"></Button>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
  postsList: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 10,

  },
  postHead: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontWeight: 'bold'
  },
  postsContent: {
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});