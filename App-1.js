import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

const App = () => (
  <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e7ff9',
  },
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#ffffff90',
    marginVertical: 5,
    fontSize: 20,
  },
});

export default App;