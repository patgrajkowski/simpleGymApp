import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import Wrapper from './Wrapper';

const CalendarView = () => {
    return (
        // <Wrapper>
        <CalendarList
            renderHeader={(date) => <Text style={styles.calendarHeader}>{date.toString('MMMM')}</Text>}
            onDayPress={(date) => {
                console.log(date);
            }}
        ></CalendarList>
        // </Wrapper>
    );
};

export default CalendarView;

const styles = StyleSheet.create({
    calendarHeader: {
        fontSize: 20,
        fontWeight: '500',
        flex: 1,
    },
});
