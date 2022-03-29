import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from './TextInput.styles';

export const TextInputComponent = () => {
  const [text , setText] = useState('');
  return (
      <View style={styles.container}>
        <Text style = {styles.font}>
          {text}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          value={text}
        />
      </View>
  )
};