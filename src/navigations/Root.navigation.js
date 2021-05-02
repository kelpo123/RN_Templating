// import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth';
import {HomeNavigator} from './home';
import {LogBox, YellowBox} from 'react-native';
import {connect} from 'react-redux';
import {Container} from 'components/styled';
import LottieView from 'lottie-react-native';
import {useTheme} from 'react-native-paper';
import firebase from 'react-native-firebase';
import {setI18nConfig} from 'locales';
LogBox.ignoreAllLogs();
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'white',
  },
};

function AppNavigator(props) {
  const {locale} = props;
  const [isLogin, setIsLogin] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const {colors} = useTheme();

  function onAuthStateChanged(user) {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setI18nConfig(locale, false);
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing)
    return (
      <Container align="center" justify="center" color={colors.primary}>
        <LottieView
          source={require('assets/json/loading.json')}
          autoPlay
          loop
        />
      </Container>
    );
  return (
    <NavigationContainer theme={navigatorTheme}>
      {!isLogin ? <AuthNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  locale: state.setting.locale,
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
