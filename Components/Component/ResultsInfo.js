import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';

const ResultsInfo = ({info}) => {
  const DriverFlag = () => {
    switch (info.Driver.nationality) {
      case 'British': {
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag.png.transform/9col/image.png';
      }
      case 'Dutch': {
        return 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/countryFlag.img.gif/1423820864957.gif';
      }
      default: {
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag.png.transform/9col/image.png';
      }
    }
  };

  const TeamLogo = () => {
    switch (info.Constructor.constructorId) {
      case 'mercedes': {
        return require('../../assets/set/mercedes.png');
      }
      case 'red_bull': {
        return require('../../assets/set/redbull.png');
      }
      case 'mclaren': {
        return require('../../assets/set/mclaren.png');
      }
      case 'ferrari': {
        return require('../../assets/set/ferrari.png');
      }
      case 'alphatauri': {
        return require('../../assets/set/alpha2.png');
      }
      case 'aston_martin': {
        return require('../../assets/set/aston-martin-logo-png-514926.png');
      }
      case 'alfa': {
        return require('../../assets/set/alfa.png');
      }
      case 'haas': {
        return require('../../assets/set/haas.png');
      }
      case 'williams': {
        return require('../../assets/set/williams2.png');
      }
      case 'alpine': {
        return require('../../assets/set/J2B5XeEm_400x400.jpg');
      }

      default: {
        return null;
      }
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
      }}
      key={info.number}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        {/* <Image
          source={{
            uri: DriverFlag(),
          }}
          style={{height: 15, width: 20, margin: 2}}
        /> */}

        <Text style={{color: '#f8f0e3', fontSize: 20, fontWeight: '700'}}>
          {info.Driver.givenName}
          {'\n'}
          {info.Driver.familyName}
          {'\n'}
        </Text>
        <Text style={{color: '#696969', fontWeight: '700'}}>{info.status}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'red',
            fontSize: 30,
            marginRight: 10,
            fontWeight: '700',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {info.position}
        </Text>
      </View>
      {/* <Text
        style={{color: '#f8f0e3', fontSize: 20, textAlignVertical: 'center'}}>
        {info.Constructor.name}
      </Text> */}
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Image
          source={TeamLogo()}
          resizeMode="contain"
          style={{height: 100, width: 60, borderRadius: 8}}
        />
      </View>
    </View>
  );
};

export default ResultsInfo;

const styles = StyleSheet.create({});
