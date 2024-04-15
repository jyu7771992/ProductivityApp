import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxItem = () => (
  <View>
    <Checkbox.Item label='Item' status='checked' />
    <Text>Your To do</Text>
  </View>
);

export default CheckboxItem;
