import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'yellow' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  );

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});




export default function TabViews() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Today' },
    { key: 'second', title: 'Upcoming' },
    { key: 'third', title: 'History' },
  ]);
  
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'red' }}
      labelStyle = {{color:'black', fontStyle:'normal', fontWeight:'bold'}} // For the labels
      style={{ backgroundColor: 'white' }}
    />
  );

  return (
    <TabView
    
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}