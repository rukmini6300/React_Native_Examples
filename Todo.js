import React from "react";
import { View,Text, TouchableOpacity} from "react-native";
import externalstyle from "./externalstyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, TextInput } from "react-native-gesture-handler";


const Todo =()=>{
    const[textInput, setTextInput]=React.useState('');
    const [todos, setTodos]=React.useState([
        {id:1, task:'First ', completed:false},
        {id:2, task:'Second ', completed:false},
        
    ]);

const ListItem  =({todo}) =>{
        return (
        <View style={externalstyle.listItem}>
            <View style={{flex:1}}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'#000',textDecorationLine:todo?.completed?"line-through":'none'}}>{todo?.task}</Text>
            </View>
                {/* {!todo?.completed && (
                    <TouchableOpacity>
                    <Icon name="edit" color="#fff" size={16}/>
                </TouchableOpacity>
                )} */}
            <TouchableOpacity onPress={()=>deleteIcon(todo?.id)}>
                <Icon name="remove" color="#000" size={16}/>
            </TouchableOpacity>
        </View>
        );
    }
    const addTodo=()=>{
        // if(textInput==""){
        //     alert('please input todo')
        // }else
        {
        const newTodo={
            id:Math.random(),
            task:textInput,
            completed:false,
        };
        setTodos([...todos, newTodo]);
        setTextInput('')
    }
};

 const deleteIcon=(todoId)=>{
    const newTodos=todos.filter(item =>item.id !=todoId);
        setTodos(newTodos);
    };

    const clearTodo=()=>{
        setTodos([]);
    }
    return(
        <View style={externalstyle.main1}>
            <View style={externalstyle.app_main}>
                    <Text style={externalstyle.head}>List</Text>
                    <Icon name="remove" size={25} color="#3480eb" style={externalstyle.icons} onPress={clearTodo}/>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding:20, paddingBottom:100}}
            data={todos}
            renderItem={({item})=> <ListItem todo={item}/>} />
            <View style={externalstyle.footer}>
                <View style={externalstyle.input_box}>
                    <TextInput placeholder="Add" value={textInput} onChangeText={text =>setTextInput(text)}/>
                </View>
                <TouchableOpacity onPress={addTodo}>
                    <View style={externalstyle.icon_button}>
                        <Icon name="plus" size={20} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Todo;