import React from "react";
import { View,Text, Button } from "react-native";
import externalstyle from "./externalstyle";

export default class IncreaseValue extends React.Component{

    state={
        value:0,
        total_taps:0
    }
    increamentValue =()=>{
        this.setState({
            value:this.state.value+1,
            total_taps:this.state.total_taps+1
        })
        console.log("value: "+(this.state.value+1))
    }
    decreamentValue =()=>{
        this.setState({
            value:this.state.value-1,
            total_taps:this.state.total_taps+1
        })
        console.log("value: "+(this.state.value-1))
    }
    
    render(){
        return(
            <View style={externalstyle.container}>
                <Text style={{fontSize:60}}>{this.state.value}</Text>
                <Text style={{fontSize:14,paddingTop:15}}>{"Total tabs:"+this.state.total_taps}</Text>

                <View style={{flexDirection:"row",marginTop:15}}>
                <Button title="decrement" onPress={this.decreamentValue} />
                <Text>  </Text>
                <Button title="increment" onPress={this.increamentValue}/>
                </View>
            </View>
        );
    }

}


   
    
    

