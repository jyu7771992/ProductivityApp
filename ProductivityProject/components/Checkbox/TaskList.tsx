import * as React from 'react';
import { View } from 'react-native';
import CheckboxItem from './CheckboxItem';

const TaskList = () => {
  return (
    <View>
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </View>
  );
};

export default TaskList;
