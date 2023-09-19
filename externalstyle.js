import { StyleSheet } from "react-native";
const externalstyle=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    test:{
        color:'red',
        fontSize:20,
    },
    button:{
        backgroundColor:'#800080',
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:10,
        width:250,
        borderRadius:6,
        height:45,
      },
      image:{
        width:130,
        height:60,
      },
      textbox:{
        borderWidth:0,
        height:45,
        marginTop:'5%',
        width:250,
        paddingVertical:5,
        paddingHorizontal:20,
        backgroundColor:"#e6e3e3",
        borderRadius:6
      },
     
      main:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10
       },
     child:{
        margin:10,
        fontSize:15,
        borderWidth:1,
        paddingHorizontal:15,
        paddingVertical:10,
     },
     icons:{
        marginLeft:20
     },
     main1:{
      marginTop:80,
      flex:1,
     },
     head:{
      fontSize:20,
      fontWeight:'bold',
      width:'80%',
      marginLeft:20,
     },
     app_main:{
        flexDirection:"row",
       
     },
     footer:{
      position:"absolute",
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
      bottom:0
     },
     input_box:{
      backgroundColor:'#e0e0de',
      borderRadius:30,
      paddingHorizontal:20,
      height:50,
      flex:1,
      marginVertical:20,
      paddingVertical:15,
      marginRight:20,
     },
     icon_button:{
      height:50,
      width:50,
      backgroundColor:'#3480eb',
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center'
     },
     listItem:{
     paddingHorizontal:20,
     paddingVertical:15,
      backgroundColor:'#fff',
      flexDirection:'row',
      borderRadius:7,
      marginVertical:10,
      borderWidth:1,
      borderColor:'#ccc',
     },
     List_item:{
      marginTop:80
     }
})
export default externalstyle;