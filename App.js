import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ListView,
  StatusBar
} from 'react-native';
import _ from 'underscore';
import {createStackNavigator} from 'react-navigation';



class Third extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Third Page',
  })
  render() {
    return(
      <View>
      <Text>second page!</Text>
    </View>
    )
  }
}

class Second extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Second Page',
    headerRight:
      <TouchableOpacity onPress={() => (props.navigation.navigate('Page3'))}>
        <Text>to third page</Text>
      </TouchableOpacity>
  })
  render() {
    return(
      <View>
      <Text>second page!</Text>
    </View>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      display: 'flex',
      value: 0,
      num2: _.range(10),
      number: 10
    };
  }

  press(item) {
    this.setState({
      num2: this.state.num2.filter(curItem => item !== curItem)
    })
  }

  _renderRow = (item) => {
    return (
      <View style={styles.container1}>
        <TouchableOpacity onPress = {() => this.press(item)}>
          <Text>{item} </Text>
        </TouchableOpacity>
      </View>
    )
  }

  static navigationOptions = (props) => ({
    title: 'Page 1',
    headerRight:
      <TouchableOpacity onPress={() => (props.navigation.navigate('Page2'))}>
        <Text>to second page</Text>
      </TouchableOpacity>
  })

  render() {
    let container2 = {
      display: this.state.display,
      // flex: 0.3,
      width: 100,
      height: 100,
      backgroundColor: 'red',
      // alignItems: 'center',
      // justifyContent: 'center',
    }

    // console.log("hi");
    // debugger;  

    // let ds2 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <TouchableOpacity onPress={() => (this.props.navigation.navigate('Page2'))}>
          <Text>Navigate to Page2</Text>
        </TouchableOpacity>



        {/* 
        
        <ListView
          dataSource={ds2.cloneWithRows(this.state.num2)}
          renderRow = {this._renderRow} 
        />*/}

      </View>
    );
  
      
    
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    width: 300,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text1: {
    fontSize: 40,
    color: 'blue'
  },
  text2: {
    fontSize: 80,
    color: 'black'
  }
});

const Navigator = createStackNavigator({
  Home: {screen: App},
  Page2: {screen: Second},
  Page3: {screen: Third}
})

export default Navigator;