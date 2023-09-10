import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from "react-native";
import React , {useLayoutEffect}from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const First = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: "MyHealth",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          
          },
         
          headerStyle: {
            backgroundColor: "#1E90FF",
            height: 110,
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          
          },
          headerRight: () => (
            <FontAwesome name="hospital-o"
              size={40}
              color="white"
              style={{ marginRight: 14 }}
            />
          )
          
        })
      }, []);

  return (
    <SafeAreaView>
    <Pressable >
    {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 3,
          margin: 10,
          marginTop:10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 25,
          
        }}
      >
        <TextInput style={{fontSize:17}} placeholder="Search for nearest Hospitals" />
        <AntDesign name="search1" size={24} color="#1F75FE" />
      </View>
     </Pressable>
      <Carousel />
      
    </SafeAreaView>
  );
};

export default First;

const styles = StyleSheet.create({});
