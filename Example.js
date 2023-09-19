import { Component } from 'react';
import { Text, View,Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import externalstyle from './externalstyle'
export default class Example extends Component{
    constructor(props){
        super(props);
        this.state={Num1:''};
    }
    F1=()=>{
        var N1=this.state.Num1;
        alert(N1)
    }
    render(){
    return(
        <View style={externalstyle.container}>
            <Text style={{fontSize:22,color:"#378fed"}}>React Native Login Page</Text>
            <TextInput style={externalstyle.textbox} placeholder={"User Name"} onChangeText={Num1 =>this.setState({Num1})}></TextInput>
            <View style={{ width: '60%',marginTop:10}}>
            <Button title="click me" onPress={this.F1}/>
            </View>
        </View>
    )
}
}
