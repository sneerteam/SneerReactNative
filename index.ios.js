'use babel';

import React, {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} from 'react-native';

import Convos from './Convos';

const SneerReactNative = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Contacts',
          component: Convos,
        }}
      />
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('SneerReactNative', () => SneerReactNative);
