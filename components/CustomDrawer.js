/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={styles.bgImage}>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={styles.userProfile}
          />
          <Text style={styles.textStyle}>John Doe</Text>
          <View style={styles.coinsContainer}>
            <Text style={[styles.textStyle, {marginRight: 10}]}>280 coins</Text>
            <FontAwesome5 name="coins" size={14} color={'#FFF'} />
          </View>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <TouchableOpacity onPress={() => {}} style={styles.touchableFooter}>
          <Ionicons name="share-social-outline" size={22} />
          <Text style={[styles.textStyle, styles.footerText]}>
            Tell a friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.touchableFooter}>
          <Ionicons name="exit-outline" size={22} />
          <Text style={[styles.textStyle, styles.footerText]}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#8200d6',
  },
  bgImage: {
    padding: 20,
  },
  userProfile: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  textStyle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 10,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  touchableFooter: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
  },
});

export default CustomDrawer;
