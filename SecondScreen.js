import * as React from 'react';
import { View,Text,Button } from 'react-native';
import externalstyle from './externalstyle';

const SecondScreen=({navigation}) =>{
  return (
    <View style={externalstyle.container}>
    <Text>secondpage</Text>
    <Button onPress={()=>navigation.navigate('third')} title="second screen"></Button>
  </View>
  );
}
export default  SecondScreen;