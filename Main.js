import { Text, View,TextInput,TouchableOpacity,Image} from 'react-native'
import externalstyle from './externalstyle';
function Main(){
  return(
    <View style={externalstyle.container}>
      <Image style={externalstyle.image} source={require('../assets/bit.png')}/>
      <Text style={{fontSize:22}}>Welcome to Login Page</Text>
      <TextInput style={externalstyle.textbox} placeholder={"users"}></TextInput>
      <TextInput style={externalstyle.textbox} placeholder={"Password"}></TextInput>
      <TouchableOpacity  style={externalstyle.button}>
        <Text style={{color:'#fff',textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
    
    </View>
  )
}
export default Main;