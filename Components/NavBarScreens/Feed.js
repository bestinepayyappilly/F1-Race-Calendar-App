import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
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

import NotificationButton from '../Component/NotificationButton';

const Feed = ({navigation}) => {
  useEffect(() => {
    getSchedule();
  }, []);

  const [date, setDate] = useState(null);
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getSchedule() {
    try {
      await axios
        .get('http://ergast.com/api/f1/current.json')
        .then(response => {
          setInfo(response.data.MRData.RaceTable.Races);
          setDate(response.data.MRData.RaceTable.Races.map(x => x.date));
        })
        .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
    }
  }
  if (isLoading === false) {
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0];

    const arrayDates = Object.values(date);
    const CalendarDays = arrayDates;
    var CalendarDaysObject = {};
    CalendarDays.forEach(day => {
      CalendarDaysObject[day] = {
        marked: true,
      };
    });
  }

  if (isLoading === false) {
    var filteredInfo = info.filter(e => e.date > todayDate);
    var filteredInfoLess = info.filter(e => e.date <= todayDate);
    const {date, time, raceName} = filteredInfo[0];

    var finalTime = new Date(date).getTime() - today.getTime();
    var finalName = raceName;

    var timerTimeSecs = time.substr(0, 2) * 60 * 60;

    var index = info.findIndex(e => e.raceName === raceName);

    const data = filteredInfo.map(e => ({
      title: e.raceName,
      time: e.date,
      description: e.Circuit.circuitName,
      lineColor: '#000',
      id: e.Circuit.circuitId,
      icon: require('../../assets/icons8-double-tick-96-black.png'),
      ZTime: e.time,
      round: e.round,
      season: e.season,
    }));

    const data1 = filteredInfoLess.map(e => ({
      title: e.raceName,
      time: e.date,
      description: e.Circuit.circuitName,
      lineColor: '#405De6',
      id: e.Circuit.circuitId,
      icon: require('../../assets/icons8-double-tick-96.png'),
      ZTime: e.time,
      round: e.round,
      season: e.season,
    }));

    var data2 = data1.concat(data);
    // console.log('this is data2:', data2);
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
          borderRadius: 10,
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <NotificationButton />
        </View>
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

                marginTop: 5,
              }}>
              <Text
                style={{
                  color: '#E50914',
                  fontSize: 20,
                  fontWeight: '700',
                  textAlign: 'center',
                  margin: 5,
                }}>
                Calendar
              </Text>
              <MaterialCommunityIcons
                name="calendar-multiple-check"
                color="#E50914"
                size={20}
                style={{alignSelf: 'center', margin: 5}}
              />
            </View>
          </CollapseHeader>

          <CollapseBody>
            <CalendarPiece RaceDate={CalendarDaysObject} />
          </CollapseBody>
        </Collapse>
        <View
          style={{
            backgroundColor: '#696969',
            width: '100%',
            height: 0.1,
          }}></View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#fff',
            marginVertical: 10,
          }}>
          Races
        </Text>
      </View>
    );
  };

  const UpComing = () => {
    // const flatList = useRef();

    // const scrollToIndex = () => {
    //   flatList.current.scrollToIndex({animated: true, index: index});
    // };
    // useEffect(() => {
    //   console.log(scrollToIndex());
    // });

    return (
      <Timeline
        // ref={ref => {
        //   flatList.current = ref;
        // }}
        data={data2}
        circleColor="#405DE6"
        circleSize={20}
        lineColor="#405DE6"
        showTime={true}
        titleStyle={{color: '#fff'}}
        timeStyle={{color: '#fff', fontWeight: '700'}}
        listViewContainerStyle={{
          marginHorizontal: 10,
          marginVertical: 5,
          justifyContent: 'center',
        }}
        descriptionStyle={{color: '#fff', fontWeight: '700'}}
        detailContainerStyle={{
          backgroundColor: '#405DE6',
          width: '90%',
          marginVertical: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        timeContainerStyle={{
          padding: 5,
          borderRadius: 5,
          backgroundColor: '#405DE6',
          marginHorizontal: 5,
        }}
        onEventPress={e => {
          navigation.navigate('InfoScreen', {
            data: e,
          });
        }}
        innerCircle="icon"
        iconStyle={{height: '70%', width: '70%'}}
        options={{
          ListHeaderComponent: <ListHeader />,
          showsVerticalScrollIndicator: false,
          scrollToIndex: index,
        }}
        iconDefault={require('../../assets/icons8-double-tick-96-black.png')}

        // eventContainerStyle={{marginVertical: 20}}
      />
    );
  };

  return isLoading ? (
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
  );
};

export default Feed;

const styles = StyleSheet.create({});
