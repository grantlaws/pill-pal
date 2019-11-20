import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PillCard } from '../components/PillCard';
import { ViewEditNote } from '../components/ViewEditNote';

// mock data to represent pills the user is currently taking
const pills = [
  {
    id: 0,
    name: 'Ibuprofen',
    formattedTimeLeft: '12m left',
    dosage: '2 pills',
  },
  {
    id: 1,
    name: 'Hydrocodone',
    formattedTimeLeft: '3h 25m left',
    dosage: '1 pill',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hello, Jordan!</Text>
        </View>

        {pills.map(pill => {
          return (
            <PillCard
              key={pill.id}
              name={pill.name}
              formattedTimeLeft={pill.formattedTimeLeft}
              dosage={pill.dosage}
            />
          );
        })}

        <ViewEditNote />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    minHeight: '100%',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
