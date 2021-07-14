import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  });

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        padding: 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          opacity: 0.7,
        }}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
        <View
          style={{
            height: '100%',
            width: 20,
            backgroundColor: '#E50914',
            margin: 10,
          }}></View>
      </View>

      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            alignItems: 'center',
          },
        ]}>
        <View style={{elevation: 10, marginTop: 200}}>
          <ImageBackground
            source={require('../assets/kisspng-mercedes-amg-petronas-f1-team-2018-fia-formula-one-f1-site-www-pixshark-com-images-galleries-with-a-5b6337207aaf99.4841233415332288325025.png')}
            style={{height: 300, width: 300, shadowColor: '#000'}}
            blurRadius={80}>
            <Image
              source={require('../assets/kisspng-mercedes-amg-petronas-f1-team-2018-fia-formula-one-f1-site-www-pixshark-com-images-galleries-with-a-5b6337207aaf99.4841233415332288325025.png')}
              style={{height: 300, width: 300, shadowColor: '#000'}}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
