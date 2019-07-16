import React, { Component } from 'react';
import {View, Text} from 'react-native'
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class App extends Component {

constructor(properties) {
    super(properties);
    OneSignal.init("08621be1-6ae2-4e6e-9522-65c71c71f505");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();

  }

  componentWillUnmount() {

    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  
  }

  onReceived(notification) {
  
    console.log("Notification received: ", notification);
  
  }

  onOpened(openResult) {
  
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  
  }

  onIds(device) {
  
    console.log('Device info: ', device);
  
  }


  render() {
    return (
      <View>
        <Text>Testando</Text>
      </View>
    );
  }

}
