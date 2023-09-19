import * as React from 'react';
import { View,Button,Text} from 'react-native';
import externalstyle from './externalstyle';


const HomeScreen=({navigation}) =>{
  return(
    <View style={externalstyle.container}>
    <Text>first page</Text>
    <Button onPress={()=>navigation.navigate('second')} title="second screen"></Button>
  </View>
  )
}

export default HomeScreen;


