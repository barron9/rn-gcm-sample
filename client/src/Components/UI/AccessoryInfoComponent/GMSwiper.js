import Swiper from 'react-native-swiper';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import GMCampaignHeader from './../GMCampaignHeader'

const styles = StyleSheet.create({
    wrapper: {height:200
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })
  
  export default class GMSwiper extends React.Component {
    render(){
      return (
        <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{justifyContent:'flex-start',marginLeft:20}}>
          <GMCampaignHeader url={"http://wekan.generalmobile.com/cfs/files/attachments/G2kTBRmEzutxH8nGD/Screen%20Shot%202019-01-18%20at%2016.51.47.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D"} />
          <GMCampaignHeader url={"http://wekan.generalmobile.com/cfs/files/attachments/G2kTBRmEzutxH8nGD/Screen%20Shot%202019-01-18%20at%2016.51.47.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D"} />
          <GMCampaignHeader url={"http://wekan.generalmobile.com/cfs/files/attachments/G2kTBRmEzutxH8nGD/Screen%20Shot%202019-01-18%20at%2016.51.47.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D"} />

        </Swiper>
      );
    }
  }