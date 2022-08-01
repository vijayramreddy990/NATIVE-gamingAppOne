/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GamingImg from '../assets/images/misc/gaming.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>GAMEON</Text>
      </View>
      <View style={styles.imageWrapper}>
        <GamingImg style={styles.imageStyle} width={300} height={300} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.touchableButton}>
        <Text style={styles.touchableText}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom: 50,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    transform: [
      {
        rotate: '-15deg',
      },
    ],
  },
  touchableButton: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
});

export default OnboardingScreen;
