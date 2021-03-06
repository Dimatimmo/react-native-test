import React, {useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "react-navigation-hooks";

export default function Dashboard () {

  let [posts, setPosts] = React.useState([]);
  const { navigate } = useNavigation();
  
  function handleSubmit() {
    navigate('SignIn');
  }

  const navigateToFeedDetails = post => {
    navigate("FeedDetails", { post });
  };
  
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
        <TouchableOpacity
        onPress={() => navigateToFeedDetails(item)}
        style={styles.postsListRender}>
        <Text style = {styles.postHead}>PostId: {item.id}</Text>
        <Text style = {styles.postsContent}>Post Title: {item.title}</Text>
      </TouchableOpacity>
      )
  }

  const renderList = () => {
    if (posts.length) {
      return (
      <FlatList 
        keyExtractor={item => item.id.toString() }
        data={posts}
        renderItem={renderItem}
        style = {styles.postsList}
      />
      )
    } else {
      return(
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSubmit} title="Logout"></Button>
      {renderList()}
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMessage: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 10
    
  },
  postsList: {
    marginBottom: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 1,

  },
  postsListRender: {
    borderWidth: 0.5,
    borderColor: '#ffbc00',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#ffe8a8'
  },
  postHead: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontWeight: 'bold',
    fontSize: 20
  },
  postsContent: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: 15
  },
  textError: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});