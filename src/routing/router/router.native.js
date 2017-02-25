import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Actions, Scene, Router as RouterFlux } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Launcher from '../../components/launcher';

const RouterWithRedux = connect()(RouterFlux);

const styles = StyleSheet.create({
  sceneStyle: {
    backgroundColor: 'white'
  },
  navigationBar: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row'
  },
  transparent: {
    backgroundColor: 'rgba(0,0,0,0.15)'
  },
  title: {
    color: '#3A3A44',
  }
});

function getSceneDimension(props, computedProps) {
  if (computedProps.isActive) {
    const navBarHeight = Platform.OS !== 'ios' ? 76 : 64;
    const dimension = {
      marginTop: computedProps.hideNavBar ? 0 : navBarHeight,
      marginBottom: computedProps.hideTabBar ? 0 : 49
    };
    return dimension;
  }
  return null;
}

function getSceneStyle(props, computedProps) {
  const dimension = getSceneDimension(props, computedProps);
  return {
    flex: 1,
    ...dimension
  };
}

export function navigate(routeName, props) {
  Actions[routeName](props);
}

export default function Router() {
  return (
    <RouterWithRedux
      sceneStyle={styles.sceneStyle}
      navigationBarStyle={styles.navigationBar}
      getSceneStyle={getSceneStyle}
      titleStyle={styles.title}
    >
      <Scene key="root">
        <Scene key="launcher" component={Launcher} hideTabBar hideNavBar />
      </Scene>
    </RouterWithRedux>);
}
