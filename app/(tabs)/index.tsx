import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import MyFlatList from '@/components/MyFlatList'; // Import MyFlatList component

const App = () => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faCheckCircle} size={48} color="green" />
    </View>
    <View style={styles.listContainer}>
      <MyFlatList />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 3,
    width: '100%',
  },
});

export default App;
