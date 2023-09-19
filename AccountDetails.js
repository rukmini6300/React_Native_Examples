import { useRoute } from "@react-navigation/native";
import React from "react";
import { View,Text } from "react-native";
import externalstyle from "./externalstyle";

 function AccountDetails(){
    const route=useRoute();
    return(
        <View style={externalstyle.container}>
            <Text>Name={route.params.name}</Text>
            <Text>Email={route.params.email}</Text>
            <Text>password={route.params.password}</Text>
        </View>
    )

}export default AccountDetails