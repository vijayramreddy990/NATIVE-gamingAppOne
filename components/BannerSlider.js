/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const BannerSlider = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={styles.imageStle} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStle: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
});

export default BannerSlider;
