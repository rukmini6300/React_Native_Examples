
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View,Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import externalstyle from './externalstyle'
function Register(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPass]=useState("");

    const navigation=useNavigation();

    const register=()=>{
        navigation.navigate("accountdetails",{
            name:name,
            email:email,
            password:password,
        })
    }
    return(
        <View style={externalstyle.container}>
            <Text style={{fontSize:22,color:"#378fed"}}>React Native</Text>
            <TextInput style={externalstyle.textbox} placeholder={" Name"} value={name} onChangeText={(text)=> setName(text)}></TextInput>
            <TextInput style={externalstyle.textbox} placeholder={"Email"} value={email} onChangeText={(text)=> setEmail(text)}></TextInput>
            <TextInput style={externalstyle.textbox} placeholder={"Password"} value={password} onChangeText={(text)=> setPass(text)}></TextInput>
            <View style={{ width: '60%',marginTop:10}}>
            <Button title="click me" onPress={register} />
            </View>
        </View>
    )
}
export default Register
