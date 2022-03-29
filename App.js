import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [text , setText] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text style = {{padding: 10, fontSize: 42}}>
          {text}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
    </SafeAreaView>
  )
};

export default App;
