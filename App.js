import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import GamingImg from './assets/images/misc/gaming.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={false} color={'black'} /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>GAMEON</Text>
      </View>
      <View style={styles.imageWrapper}>
        <GamingImg style={styles.imageStyle} width={300} height={300} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
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

export default App;
