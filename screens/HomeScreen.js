/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Fether from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import {sliderData} from '../model/data';

const HomeScreen = () => {
  const ref = useRef(null);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* header */}
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Hello John Doe</Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={styles.bgImage}
            imageStyle={styles.imgStyle}
          />
        </View>
        {/* search box */}
        <View style={styles.searchBoxContainer}>
          <Fether
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.serachIcon}
          />
          <TextInput placeholder="Search" />
        </View>
        {/* seeall section */}
        <View style={styles.seeAllContainer}>
          <Text style={[styles.textStyle, styles.boldText]}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.textStyle, styles.seeAllText]}>See all</Text>
          </TouchableOpacity>
        </View>
        {/* carousel */}
        <Carousel
          ref={ref}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40} //remove padding what we added
          itemWidth={300}
          loop={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 16,
  },
  bgImage: {
    width: 35,
    height: 35,
  },
  imgStyle: {
    borderRadius: 25,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  serachIcon: {
    marginRight: 5,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  boldText: {fontWeight: 'bold'},
  seeAllText: {
    color: '#0aada8',
  },
});

export default HomeScreen;
