import { Text, View} from 'react-native'
import externalstyle from './externalstyle'
import Icon from 'react-native-vector-icons/FontAwesome';


 function Login() {
    return (
      <View style={externalstyle.container}>
        <Text style={externalstyle.test}> welcome</Text>

        <View style={externalstyle.main}>
          <Text style={externalstyle.child}> 
          <Icon name="user" size={30} color="#3480eb" style={externalstyle.icons}/> Rukmini
          </Text>
          <Text style={externalstyle.child}> 
          <Icon name="rocket" size={30} color="#3480eb" style={externalstyle.icons}/> Charu
          </Text>
        </View>
      
      </View>
    )
  
}

export default Login
