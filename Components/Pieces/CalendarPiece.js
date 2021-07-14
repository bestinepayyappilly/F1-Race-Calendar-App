import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarPiece = ({RaceDate}) => {
  return (
    <View style={{alignSelf: 'stretch'}}>
      <Calendar
        style={{
          borderRadius: 5,
          borderBottomWidth: 0,
          backgroundColor: '#000',
        }}
        theme={{
          calendarBackground: '#000',
          dayTextColor: '#E50914',
          textSectionTitleColor: '#E50914',
          arrowColor: '#E50914',
          todayTextColor: '#39FF14',
          dotColor: '#39FF14',
          textDisabledColor: '#696969',
        }}
        markedDates={RaceDate}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting

        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        renderHeader={date => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#E50914', fontWeight: '700', fontSize: 20}}>
                {date.toDateString().substr(3, 5)}
              </Text>
              <Text style={{color: '#E50914', fontWeight: '700', fontSize: 20}}>
                {date.toDateString().substr(10, 15)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CalendarPiece;

const styles = StyleSheet.create({});
