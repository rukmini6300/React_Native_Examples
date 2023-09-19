import React, { useRef,useState } from "react";
import {View,Text,TextInput, Button} from 'react-native';
import externalstyle from "./externalstyle";

function Values(){
    
    const [name, setName]=useState('')
    const [upn, setUpn]=useState('')

    changeText=()=>{
        setUpn(name)
       
    }
   
    return(
        <View style={externalstyle.container}>
            <TextInput
                placeholder="username" style={{borderWidth:1,width:'50%',marginBottom:20}}
                value={name} onChangeText={text=>setName(text)} />
                <Button title="submit" onPress={changeText}/>
                <Text>updated values is:{upn}</Text>
        </View>
    )
}
export default Values