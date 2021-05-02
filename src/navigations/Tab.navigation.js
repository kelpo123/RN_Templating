// import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import {translate} from 'locales';
import HomeComponent from 'screens/home';
import PostComponent from 'screens/post';
import MessageComponent from 'screens/messages';
import Icon from 'react-native-vector-icons/Feather';
import {height} from 'constants/dimensions';
import { View, StyleSheet } from 'react-native';

const tabBarOptions = {
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Gotham-Medium',
  },
  style: {
    height: 70,
    borderTopWidth: 0,
    paddingHorizontal: 15,
    backgroundColor: '#f9fcfe',
  },
  tabStyle: {
    paddingTop: 12,
    paddingBottom: 12,
  },
};

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const {colors} = useTheme();
  const getColor = focused => {
    return focused ? colors.primary : colors.grey;
  };
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          ...tabBarOptions,
          activeTintColor: colors.primary,
          inactiveTintColor: colors.grey,
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeComponent}
          options={{
            tabBarLabel: `${translate('tab-navigation.home')}`,
            tabBarIcon: ({focused}) => (
              <Icon name="home" style={{color: getColor(focused)}} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Post"
          component={PostComponent}
          options={{
            tabBarVisible: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View style={[styles.iconCenter, {backgroundColor:colors.primary}]}>
              <Icon name="feather" style={{color: colors.white}} size={25} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profil"
          component={MessageComponent}
          options={{
            tabBarLabel: `${translate('tab-navigation.messages')}`,
            tabBarIcon: ({focused}) => (
              <Icon
                name="message-circle"
                style={{color: getColor(focused)}}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
    iconCenter: {
        width:57,
        height:57,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:14
    }
  });
