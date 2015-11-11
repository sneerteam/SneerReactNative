import React, {
  Component,
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} from 'react-native';

import Convos from './Convos';

class SneerReactNative extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Contacts',
        component: Convos,
      }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('SneerReactNative', () => SneerReactNative);
