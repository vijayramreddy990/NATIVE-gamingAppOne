/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomSwitch = ({selecctionMode, option1, option2, onSelectSwitch}) => {
  const [getSelectionMode, setSelectionMode] = useState(selecctionMode);
  const updateSwitchData = selectedValue => {
    setSelectionMode(selectedValue);
    onSelectSwitch(selectedValue);
  };
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[
          styles.touchableButton,
          {backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4'},
        ]}
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}>
        <Text
          style={[
            styles.textStyle,
            {color: getSelectionMode == 1 ? '#FFF' : '#AD40AF'},
          ]}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.touchableButton,
          {backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4'},
        ]}
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}>
        <Text
          style={[
            styles.textStyle,
            {color: getSelectionMode == 2 ? '#FFF' : '#AD40AF'},
          ]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: 44,
    width: '100%',
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    borderColor: '#AD40AF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchableButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
  },
});

export default CustomSwitch;
