import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#DADD98",
        alignItems: "centre",
        height: 50,
        justifyContent: "space-around",
        borderColor: "black",
        borderBottomWidth: 1,
        borderTopWidth: 1,
      }}
    >
      <View style={{flexDirection:"row",alignItems:"center",marginLeft:85,}}>
      <FontAwesome5 name="notes-medical" size={24} color="black" />
      <Text style={{marginLeft:5,fontSize:15,}}>BOOK AN APPOINTMENT</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
