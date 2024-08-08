import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card/Card';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default Home;
