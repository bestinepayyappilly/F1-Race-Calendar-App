import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';

const Drivers = () => {
  useEffect(() => {
    getList();
  }, []);

  const [List, setList] = useState();
  const [isLoading, setLoading] = useState(true);

  async function getList() {
    try {
      await axios
        .get('http://ergast.com/api/f1/current/driverStandings.json')
        .then(({data}) => {
          setList(data.MRData.StandingsTable);
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  }

  const ListItem = () =>
    List.StandingsLists.map(e =>
      e.DriverStandings.map(e => {
        return (
          <View
            key={e.position}
            style={{
              height: 100,
              width: '95%',
              backgroundColor: '#E50914',

              margin: 10,
              alignSelf: 'center',
              borderRadius: 5,
              elevation: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 25,
                  fontWeight: '700',
                }}>
                {`${e.Driver.givenName}` + `${' '}` + `${e.Driver.familyName}`}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {e.points} Pts.
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                {`${e.Constructors.map(e => e.name)}`}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontWeight: '700', color: '#fff', fontSize: 15}}>
                Pos.
              </Text>

              <Text
                style={{
                  fontSize: 50,
                  fontWeight: '700',
                  color: '#fff',
                }}>{`${e.position}`}</Text>
            </View>
          </View>
        );
      }),
    );

  return isLoading ? (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '100%',
      }}>
      <Text style={{color: '#fff', fontSize: 20}}>Loading....</Text>
    </View>
  ) : (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text
        style={{fontSize: 30, color: '#fff', margin: 10, fontWeight: '700'}}>
        {' '}
        Driver Standings
      </Text>
      <ListItem />
    </ScrollView>
  );
};

export default Drivers;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
});
