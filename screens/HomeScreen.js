import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <FontAwesome name="trash-o" size={24} color="black" />
      </View>
    );
}

export default HomeScreen;