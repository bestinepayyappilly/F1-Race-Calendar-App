import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import CalendarPiece from '../Pieces/CalendarPiece';
import CountDown from 'react-native-countdown-component';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-flatlist';
import axios from 'axios';

const Feed = () => {
  useEffect(() => {
    getSchedule();
  }, []);

  const [date, setDate] = useState(' ');
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // console.log('this is sstatusbarheight:', StatusBarIOS);

  const getSchedule = () => {
    axios
      .get('https://ergast.com/api/f1/current.json')
      .then(response => {
        setInfo(response.data.MRData.RaceTable.Races);
        // console.log(response);
      })
      .then(() => setLoading(false))
      .catch(e => {
        console.log(e.error);
      });
  };

  let today = new Date();
  var todayDate = today.toISOString().split('T')[0];
  console.log('this is info', info);

  if (isLoading === false && info) {
    var filteredInfo = info.filter(e => e.date > todayDate);
    // console.log(filteredInfo);
    const {date, time, raceName} = filteredInfo[0];

    var finalTime = new Date(date).getTime() - today.getTime();
    var finalName = raceName;
    var timerTimeSecs = time.substr(0, 2) * 60 * 60 + 7200;

    var index = info.findIndex(e => e.raceName === raceName);

    let flag = null;
    switch (raceName) {
      case 'Turkish Grand Prix': {
        flag = 'hello';
      }
    }

    const data = info
      .filter(e => e.date > todayDate)
      .map(e => ({
        title: e.raceName,
        time: e.date,
        description: `${e.Circuit.circuitName}   ${'>'}`,
        lineColor: '#000',
        id: e.Circuit.circuitId,
      }));

    const data1 = info
      .filter(e => e.date <= todayDate)
      .map(e => ({
        title: e.raceName,
        time: e.date,
        description: e.Circuit.circuitName,
        lineColor: '#405De6',
        id: e.Circuit.circuitId,
      }));

    var data2 = data1.concat(data);

    const arrayDates = Object.values(date);
    const CalendarDays = arrayDates;
    var CalendarDaysObject = {};
    CalendarDays.forEach(day => {
      CalendarDaysObject[day] = {
        marked: true,
      };
    });
  } else {
    console.log('loading');
  }

  const Timer = () => {
    return (
      <View
        style={{
          height: 180,
          width: '100%',
          backgroundColor: '#E50914',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 5,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontWeight: '700',
          }}>
          Race Starts in :{' '}
        </Text>
        <CountDown
          until={finalTime / 1000 + timerTimeSecs}
          timeLabelStyle={{color: '#fff', fontSize: 15, fontWeight: '700'}}
          digitTxtStyle={{color: '#fff', fontSize: 30}}
          digitStyle={{
            width: 70,
          }}
          onFinish={() => console.log('finished')}
          onPress={() => alert('Next Race is:' + `${finalName}`)}
          size={20}
          timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
        />
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#fff',
            margin: 5,
          }}></View>
        <Text style={{fontSize: 30, color: '#fff', fontWeight: '700'}}>
          {finalName}{' '}
        </Text>
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#000',
          padding: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 40, fontWeight: '700'}}>
          Home
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            🖖
          </Text>
        </Text>
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#696969',
            alignItems: 'center',
            borderRadius: 5,
          }}
        />
        <Timer />

        <Collapse>
          <CollapseHeader>
            <View
              style={{
                height: 45,
                width: '100%',
                backgroundColor: '#000',

                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#696969',
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: '#E50914',
                  fontSize: 20,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Calendar
              </Text>
              <MaterialCommunityIcons
                name="calendar"
                color="#E50914"
                size={20}
                style={{alignSelf: 'center'}}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <CalendarPiece RaceDate={CalendarDaysObject} />
          </CollapseBody>
        </Collapse>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#fff',
            marginVertical: 10,
          }}>
          Upcoming Races
        </Text>
      </View>
    );
  };

  const UpComing = () => {
    return (
      <Timeline
        data={data2}
        circleColor="#405DE6"
        lineColor="#405DE6"
        showTime={true}
        titleStyle={{color: '#fff'}}
        timeStyle={{color: '#fff', fontWeight: '700'}}
        listViewContainerStyle={{
          marginHorizontal: 10,
          marginVertical: 5,
        }}
        // circleStyle={{marginLeft: 3}}
        descriptionStyle={{color: '#fff', fontWeight: '700'}}
        detailContainerStyle={{
          backgroundColor: '#405DE6',
          width: '90%',
          marginVertical: 10,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginVertical: 10,
        }}
        timeContainerStyle={{
          padding: 5,
          borderRadius: 5,
          backgroundColor: '#405DE6',
        }}
        onEventPress={e => {
          console.log(e.id);
        }}
        options={{
          ListHeaderComponent: <ListHeader />,
          showsVerticalScrollIndicator: false,
          // initialScrollIndex: index,
        }}
      />
    );
  };

  return isLoading && info ? (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '100%',
      }}>
      <ActivityIndicator color="#E50914" animating={true} size={'large'} />
    </View>
  ) : (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <UpComing />
    </View>
    // <View />
  );
};

export default Feed;

const styles = StyleSheet.create({});
