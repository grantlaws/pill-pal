import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SymptomsFeelings } from '../components/SymptomsFeelings';

const symptomsAndFeelings = {
  symptom1: 'Headache',
  symptom2: 'Dizziness',
  symptom3: 'Nausea',
  feeling1: 'Worried',
  feeling2: 'Stressed',
  feeling3: 'Sad',
  feeling4: 'Tired'
}

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
          <View style={styles.symptomsFeelingsContainer}>
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom1} />
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom2} />
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom3} />
          </View>
          <Text style={styles.headerText}>Feelings</Text>
          <View style={styles.symptomsFeelingsContainer}>
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling1} />
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling2} />
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling3} />
            <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling4} />
          </View>
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
    marginLeft: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  symptomsFeelingsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
});
