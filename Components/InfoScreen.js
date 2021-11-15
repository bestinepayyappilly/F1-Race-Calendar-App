import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Image} from 'react-native-elements';
import ResultsInfo from './Component/ResultsInfo';

const {height, width} = Dimensions.get('screen');

const InfoScreen = ({route, navigation}) => {
  const [results, setResults] = useState(null);
  const {data} = route.params;
  var {ZTime, time} = data;
  console.log(data);

  var convertDate = new Date(time + 'T' + ZTime);
  console.log(convertDate.toUTCString());
  const date = convertDate.toString();

  console.log('season:', data);

  const Images = () => {
    switch (data.id) {
      case 'bahrain':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col/image.png';
      case 'imola':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/7col/image.png';
      case 'portimao':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Portugal_Circuit.png.transform/7col/image.png';
      case 'catalunya':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col/image.png';
      case 'monaco':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/7col/image.png';
      case 'BAK':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/7col/image.png';
      case 'ricard':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png.transform/7col/image.png';
      case 'red_bull_ring':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Styria_Circuit.png.transform/7col/image.png';
      case 'silverstone':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col/image.png';
      case 'hungaroring':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/7col/image.png';
      case 'spa':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col/image.png';
      case 'zandvoort':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/7col/image.png';
      case 'monza':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/7col/image.png';
      case 'sochi':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Russia_Circuit.png.transform/7col/image.png';
      case 'istanbul':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Turkey_Circuit.png.transform/7col/image.png';
      case 'americas':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/7col/image.png';
      case 'rodriguez':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/7col/image.png';
      case 'interlagos':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/7col/image.png';
      case 'losail':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/7col/image.png';
      case 'jeddah':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col/image.png';
      case 'yas_marina':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/7col/image.png';
      default:
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/7col/image.png';
    }
  };
  const CircuitLogo = () => {
    switch (data.id) {
      case 'bahrain':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/9col/image.png';
      case 'imola':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/9col/image.png';
      case 'portimao':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/portugal-flag.png.transform/9col/image.png';
      case 'catalunya':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/9col/image.png';
      case 'monaco':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag.png.transform/9col/image.png';
      case 'BAK':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/9col/image.png';
      case 'ricard':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/france-flag.png.transform/9col/image.png';
      case 'red_bull_ring':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/9col/image.png';
      case 'silverstone':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag.png.transform/9col/image.png';
      case 'hungaroring':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/9col/image.png';
      case 'spa':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/9col/image.png';
      case 'zandvoort':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/9col/image.png';
      case 'monza':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/9col/image.png';
      case 'sochi':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/russia-flag.png.transform/9col/image.png';
      case 'istanbul':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/turkey-flag.png.transform/9col/image.png';
      case 'americas':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag.png.transform/9col/image.png';
      case 'rodriguez':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/9col/image.png';
      case 'interlagos':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/9col/image.png';
      case 'losail':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/qatar-flag.png.transform/9col/image.png';
      case 'jeddah':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/9col/image.png';
      case 'yas_marina':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/abu-dhabi-flag.png.transform/9col/image.png';
      default:
        'https://upload.wikimedia.org/wikipedia/en/5/50/EnzoEDinoFerrariImolaLogo.png';
    }
  };

  useEffect(() => {
    axios
      .get(`http://ergast.com/api/f1/${data.season}/${data.round}/results.json`)
      .then(response => {
        setResults(response.data.MRData.RaceTable.Races.map(e => e.Results));
      });
  }, []);

  if (results !== null) {
    const Results = results.map(e => e.Results);
    // console.log(results.map(e => e.Results.map(e => e.Constructor)));
    // const {Constructor} = Results[0];
    console.log(results.map(e => e.map(e => e.Constructor)));
  }

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#000', padding: 10}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 15, fontWeight: '700'}}>
          {date.substr(0, 15)}
        </Text>
        <Text style={{color: 'red', fontSize: 20}}>{date.substr(16, 30)}</Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F0E3',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Image
          style={{
            height: height / 3,
            width: '100%',
            borderRadius: 10,
          }}
          resizeMode="contain"
          source={{
            uri: Images(),
          }}
        />
        <Text
          style={{
            color: '#696969',
            textAlign: 'center',
            fontSize: 18,
            marginVertical: 5,
            fontWeight: '700',
          }}>
          {data.description}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#212527',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <View
          style={{
            borderRadius: 10,
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 10,
              backgroundColor: 'transparent',
            }}
            resizeMode="contain"
            source={{uri: CircuitLogo()}}
          />
          <View style={{alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                color: '#f8f0e3',
                fontWeight: '700',
              }}>
              {data.title}
            </Text>
          </View>
        </View>

        {results !== null
          ? results.map(e =>
              e.map(e => <ResultsInfo key={e.number} info={e} />),
            )
          : null}
      </View>
    </ScrollView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({});
