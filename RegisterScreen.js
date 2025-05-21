import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Registration screen (stub)</Text>
      <Button title="Back to Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
