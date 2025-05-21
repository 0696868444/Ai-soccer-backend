import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');

  const getSummary = async () => {
    const res = await fetch("http://localhost:8000/ai/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        placeholder="Ask something..."
        value={input}
        onChangeText={setInput}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Get Summary" onPress={getSummary} />
      <Text style={{ marginTop: 20 }}>{summary}</Text>
    </ScrollView>
  );
}
