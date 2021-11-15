import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificationButton = () => {
  const [icon, setIcon] = useState('md-notifications-sharp');
  return (
    <TouchableOpacity
      onPress={() => {
        icon === 'md-notifications-sharp'
          ? setIcon('md-notifications-off-sharp')
          : setIcon('md-notifications-sharp');
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      }}>
      <Ionicons name={icon} size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({});
