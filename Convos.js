'use babel';

import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// const REQUEST_URL = 'http://127.0.0.1:8000/convos.json';
const REQUEST_URL = 'https://gist.githubusercontent.com/felipebueno/22dc6ea5d968baeefbc7/raw/a385077dfb08d64375074331397c8b4bd04d905e/convos.json';

class Convos extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.convos),
          loaded: true,
        });
      })
      .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
      <Text>Loading...</Text>
      </View>
    );
  }

  renderConvo(row) {
    return (
      <View style={styles.container}>
      <Image
      source={{uri: row.convo.selfie}}
      style={styles.selfie} />
      <View style={styles.rightContainer}>
      <Text style={styles.nickname}>{row.convo.nickname}</Text>
      <Text style={styles.summary}>{row.convo.summary}</Text>
      <Text style={styles.received}>{row.convo.received}</Text>
      <Text style={styles.unread}>{row.convo.unread}</Text>
      </View>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderConvo}
      style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 2,
  },
  selfie: {
    height: 60,
    borderRadius: 30,
    width: 60,
    margin: 4,
  },
  nickname: {
    margin: 2,
    paddingTop: 4,
    fontWeight: 'bold',
  },
  summary: {
    margin: 2,
    color: 'grey',
  },
  received: {
    color: 'grey',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  unread: {
    color: 'green',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Convos;
