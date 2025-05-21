import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/matches")
      .then(res => res.json())
      .then(data => {
        setMatches(data.response || []);
      });
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Button title="Ask AI" onPress={() => navigation.navigate("Chat")} />
      {matches.map((match, i) => (
        <View key={i} style={{ marginVertical: 10 }}>
          <Text>{match.teams.home.name} vs {match.teams.away.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
