import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Switch} from 'react-native';
import axios from 'axios';

const Constructors = () => {
  useEffect(() => {
    getList();
  }, []);

  const [List, setList] = useState(' ');
  const [isLoading, setLoading] = useState(true);
  const [place, setPlace] = useState(' ');
  const [flag, setFlag] = useState(null);

  async function getList() {
    try {
      await axios
        .get('http://ergast.com/api/f1/current/constructorStandings.json')
        .then(({data}) => {
          setList(data.MRData.StandingsTable);
          setPlace(
            data.MRData.StandingsTable.StandingsLists.map(e =>
              e.ConstructorStandings.map(e => e.Constructor.nationality),
            ),
          );
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  }

  if (isLoading === true) {
    console.log('Loading');
  } else {
    console.log(place[0]);
    let newPlace = place[0];
    newPlace.forEach(e => {
      switch (e) {
        case 'Austrian': {
          console.log('Austrian');

          break;
        }
        case 'German': {
          console.log('German');
          break;
        }
        case 'British': {
          console.log('British');
          break;
        }
        case 'Italian': {
          console.log('Italian');
          break;
        }
        case 'French': {
          console.log('French');
          break;
        }
        case 'Swiss': {
          console.log('Swiss');
          break;
        }
        case 'American': {
          console.log('American');
          break;
        }
      }
    });
  }
  //   var national = {};
  //   if (isLoading === true) {
  //     console.log('loading');
  //   } else {
  //     national =
  //     let newPlace = national;
  //     setPlace(newPlace);
  //   }

  const ListItem = () =>
    List.StandingsLists.map(e =>
      e.ConstructorStandings.map(e => {
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
                {`${e.Constructor.name}`}
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
                {`${e.Constructor.nationality}`}
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
        Constructor Standings
      </Text>
      <ListItem />
    </ScrollView>
  );
};

export default Constructors;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
});
