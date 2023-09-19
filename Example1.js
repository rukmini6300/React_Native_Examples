import React, { useState } from "react";
import { Button, Text,View } from "react-native";
import externalstyle from "./externalstyle";


const Example1=()=>{

const [name, setName] = useState('Bitkemy')
    return(
        <View style={externalstyle.container}>
            <Text onPress={()=>setName('Rukmini')}>{name}</Text> 
         {/* <Button onPress={()=>setName('Rukmini')} title='click'/> */}
    
        </View>
    )
}
export default Example1;

