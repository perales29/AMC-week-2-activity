import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Cliff Justine
        <Text style={styles.innerText1}> Perales</Text>
      </Text>
      <Text>
        I am 
        <Text style={styles.innerText2}> BSIT Student </Text>
      </Text>
      <Text>
        Live in
        <Text style={styles.innerText3}> Navotas</Text>
      </Text>
      <Text>
        My favorite food
        <Text style={styles.innerText4}> chocolate</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue'
  },
  innerText1: {
    color: 'maroon',
  },
  innerText2: {
    color: 'violet',
  },
  innerText3: {
    color: 'green',
  },
  innerText4: {
    color: 'brown',
  },
});

export default BoldAndBeautiful;