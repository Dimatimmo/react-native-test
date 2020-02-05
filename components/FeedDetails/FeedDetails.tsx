  
import React from "react";
import { View, Text } from "react-native";
import { useNavigationParam } from "react-navigation-hooks";

const FeedDetails: React.FC = () => {
  const post = useNavigationParam("post");

  return (
    <View>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
    </View>
  );
};

export { FeedDetails };