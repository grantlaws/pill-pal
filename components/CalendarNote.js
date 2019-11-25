import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function CalendarNote(props) {
  const {
    todaysDate,
    pillsTaken,
    symptoms,
    feelings,
    additionalDetails,
  } = props;
  return (
    <View style={styles.calendarNoteInfoContainer}>
      <View>
        <Text style={styles.calendarNoteTitleText}>Note for {todaysDate}</Text>

        <Text style={styles.calendarNoteText}>Pills Taken: {pillsTaken}</Text>
        <Text style={styles.calendarNoteText}>Symptoms: {symptoms}</Text>
        <Text style={styles.calendarNoteText}>Feelings: {feelings}</Text>
        <Text style={styles.calendarNoteText}>
          Additional Details: {additionalDetails}
        </Text>
      </View>

      <View style={styles.calendarNoteEditContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.calendarNoteEditText}>Edit</Text>
          <FontAwesome
            name={'pencil'}
            style={styles.calendarNoteEditTextIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarNoteInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  calendarNoteTitleText: {
    fontSize: 17,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'center',
  },
  calendarNoteText: {
    fontSize: 14,
    paddingVertical: 10,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'left',
  },
  calendarNoteEditContainer: {
    alignItems: 'flex-end',
  },
  calendarNoteEditText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 20,
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
  },
  calendarNoteEditTextIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
    marginTop: 22,
    marginLeft: 5,
  },
});
