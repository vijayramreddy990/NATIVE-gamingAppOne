/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

const ListItem = ({photo, title, subTitle, isFree, price}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemStyle}>
        <Image source={photo} style={styles.imageStyle} />
        <View style={{width: windowWidth - 220}}>
          <Text style={styles.textStyle}>{subTitle}</Text>
          <Text
            numberOfLines={1}
            style={[styles.textStyle, {textTransform: 'uppercase'}]}>
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.touchableButton}>
        <Text style={[styles.textStyle, styles.touchableText]}>
          {isFree == 'Yes' ? 'Play' : price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  touchableButton: {
    backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  touchableText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default ListItem;
