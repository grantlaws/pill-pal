import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TodaysNoteScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Additional Details</Text>
          <Text style={styles.headerText}>Symptoms</Text>
          <Text style={styles.headerText}>Feelings</Text>
        </View>
      </ScrollView>
    </View>
  );
}

TodaysNoteScreen.navigationOptions = {
  title: "Today's Note",
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
  headerContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
