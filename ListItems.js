import React from "react";
import { View,Text,FlatList,Image } from "react-native";
import externalstyle from "./externalstyle";
// import { Avatar } from "react-native-paper";
export default class ListItems extends React.Component{

   constructor(props){
    super(props)
    this.state={userList:[]}
//    itemsArray=[
//     {id:"1", title:"sub1", sub1:"sql"},
//     {id:"2", title:"sub2", sub1:"oracle"},
//     {id:"3", title:"sub3", sub1:"php"}
//    ]
   }

   componentDidMount(){
    this.GetUsersList()
   }
    renderRowItem=(rowitem)=>{
       
        return(
           <View style={{ borderBottomWidth: 1,paddingVertical:15}}>
             
            <View style={{flexDirection:'row'}}>
            {/* <Avatar.Image size={50} source={{uri: 'https://img.freepik.com/free-icon/user_318-219673.jpg' }}/>          */}
            
            <View style={{marginLeft:20}}>
            <Text style={{fontSize:18}}>{rowitem.item.first_name}</Text>
            <Text >{rowitem.item.email}</Text>
            </View>
            </View>
           </View>
         )
    }

    GetUsersList=() =>{
        fetch('https://reqres.in/api/users')
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log("response data is:",responseJson);

            this.setState({
                userList:responseJson.data
            })
        })
    }


    render(){
        return(
            <View style={{padding:10}}>
              <View style={externalstyle.List_item}>
              <Text style={{fontSize:20,paddingBottom:20}}>Disply items</Text>
               
               <FlatList
               data={this.state.userList} 
               renderItem={this.renderRowItem}
               keyExtractor={item =>item.id}
               />
              </View>
            </View>
        )
    }
}