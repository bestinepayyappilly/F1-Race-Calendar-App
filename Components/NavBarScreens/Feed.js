import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import CalendarPiece from '../Pieces/CalendarPiece';
import CountDown from 'react-native-countdown-component';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import Timeline from 'react-native-timeline-flatlist';

import axios from 'axios';

const Feed = () => {
  useEffect(() => {
    getSchedule();
  }, []);

  const [date, setDate] = useState(' ');
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState(' ');
  // const [data, setData] = useState([]);

  async function getSchedule() {
    try {
      await axios
        .get('http://ergast.com/api/f1/current.json')
        .then(response => {
          setDate(response.data.MRData.RaceTable.Races.map(x => x.date)),
            setInfo(response.data.MRData.RaceTable.Races);
          // console.log(info);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
    }
  }

  const arrayDates = Object.values(date);

  const nextDays = arrayDates;

  let newDaysObject = {};
  let newListObject = {};

  nextDays.forEach(day => {
    newDaysObject[day] = {
      marked: true,
    };
  });
  if (isLoading === false) {
    // console.log(info.filter(e => e.date > '2021-07-11').map(e => e.date));
    let today = new Date();
    // console.log(today.toISOString().split('T')[0]);
    // console.log(today.getTime());
    var todayDate = today.toISOString().split('T')[0];
    var timerDate = info.filter(e => e.date >= todayDate).map(e => e.date);
    var timerTime = info.filter(e => e.date >= todayDate).map(e => e.time);
    var timerName = info.filter(e => e.date >= todayDate).map(e => e.raceName);
    var timerTimeSecs = timerTime[0].substr(0, 2) * 60 * 60;
    // console.log(timerTimeSecs);
    // console.log(timerTime[0].substr(0, 2));
    // console.log(timerDate[0]);
    // console.log(timerName[0]);
    const date = new Date(timerDate[0]).getTime();
    // console.log(date);
    // console.log(date - today.getTime());
    var finalTime = date - today.getTime();
    var finalName = timerName[0];

    // timerDate.map(e => {
    //   console.log(e.toString());
    // });

    const data = info.map(e => e.raceName);
    // console.log(data.length);

    var map = new Map();

    let keys = info.forEach(e => 'title');
    console.log(keys);
    const newArr = [];

    // const data = newArr.map(e => Object.assign({e, title: e.raceName}));
    // console.log(data);

    // for (var i = 0; i < data.length; i++) {
    //   // mp = Map
    //   // keys = key array
    //   // values = value array
    //   map.set(keys[i], data[i]);
    // }
    // console.log(map);
  } else {
    console.log('loading');
  }

  const UpComing = () => {
    return (
      <View style={{flex: 1}}>
        <Timeline
          data={info}
          dotColor="#000"
          circleColor="#E50914"
          lineColor="#E50914"
          showTime={false}
        />
      </View>
    );
  };

  // info
  //   .filter(e => e.date >= todayDate)
  //   .map(e => {
  //     return (
  //       <View key={e.round}>
  //         <Collapse>
  //           <CollapseHeader>
  //             <View
  //               style={{
  //                 height: 50,
  //                 width: '100%',
  //                 backgroundColor: '#E50914',
  //                 padding: 5,
  //                 margin: 5,
  //                 alignItems: 'center',
  //                 flexDirection: 'row',
  //                 alignSelf: 'center',
  //                 justifyContent: 'space-between',
  //                 borderRadius: 5,
  //               }}>
  //               <Text
  //                 style={{
  //                   color: '#fff',
  //                   fontSize: 20,
  //                 }}>{`${e.raceName}`}</Text>

  //               <Text
  //                 style={{
  //                   color: '#fff',
  //                   fontSize: 15,
  //                 }}>
  //                 {new Date(e.date).toLocaleString('en-us').substr(4, 7)}
  //               </Text>
  //             </View>
  //           </CollapseHeader>
  //           <CollapseBody>
  //             <View
  //               style={{
  //                 height: 100,
  //                 width: '100%',
  //                 backgroundColor: '#E50914',
  //                 borderRadius: 5,
  //                 padding: 10,
  //                 flexDirection: 'row',
  //               }}>
  //               <Image
  //                 source={require('../../assets/1200px-Flag_of_the_United_Kingdom.svg.png')}
  //                 style={{height: 15, width: 20, borderRadius: 2}}
  //               />
  //               <Text
  //                 style={{
  //                   marginHorizontal: 5,
  //                   color: '#fff',
  //                 }}>{`${e.Circuit.Location.locality}`}</Text>
  //               <Text
  //                 style={{
  //                   marginHorizontal: 5,
  //                 }}>
  //                 {e.time.substr(0, 2)}
  //               </Text>
  //             </View>
  //           </CollapseBody>
  //         </Collapse>
  //       </View>
  //     );
  //   });

  // console.log(finalTime / 1000);
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
          onFinish={() => alert('finished')}
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

  return isLoading ? (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '100%',
      }}>
      <Text style={{color: '#fff'}}>Loading....</Text>
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: '100%',
        width: '100%',
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
            <Image
              source={require('../../assets/down-circle.png')}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginHorizontal: 10,
              }}
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <CalendarPiece RaceDate={newDaysObject} />
        </CollapseBody>
      </Collapse>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: '#E50914',
          margin: 10,
        }}>
        Upcoming Races
      </Text>
      <UpComing />
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
