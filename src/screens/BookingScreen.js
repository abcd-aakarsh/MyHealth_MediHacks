import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect , useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import { useNavigation , useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import DatePicker from "react-native-date-ranges";


const BookingScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute()
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
        <FontAwesome
          name="hospital-o"
          size={40}
          color="white"
          style={{ marginRight: 14 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = (place) => {
    if(!route.params || !selectedDates){
        Alert.alert('Invalid Details', 'Please enter correct details', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }

    if(route.params && selectedDates){
        navigation.navigate("Places",{
            selectedDates:selectedDates,
            place:place

        })
    }
  };

  return (
    <View>
      <Header />

      <ScrollView>
        <View
          style={{
            margin: 20,
           
          }}
        >
          {/* Hospital */}
          <Pressable 
          onPress={() => navigation.navigate("Search")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 1,
              paddingVertical: 15,
              marginBottom:20,
              borderWidth: 3,
            borderRadius: 6,
            borderColor: "black",
            }}
          >
            <FontAwesome name="search" size={24} color="black" />
            <TextInput placeholder={route?.params ? route.params.input : "Select City"}/>
          </Pressable>
          {/*Date*/}
          <Pressable
          style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 1,
              paddingVertical: 15,
              borderWidth: 3,
            borderRadius: 6,
            borderColor: "black",
            }}>
          <AntDesign name="calendar" size={24} color="black" />
          <DatePicker
                style={{
                  width: 350,
                  height: 45,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                  
                }}
                customStyles={{
                  placeholderText: { fontSize:15, 
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
               
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate,endDate) => setSelectedDates(startDate,endDate)}
                centerAlign
                allowFontScaling = {false}
                placeholder={"Select Dates "}
                mode={'range'}
                
              />
          </Pressable>
          {/* search*/}
          <Pressable 
          onPress={() => searchPlaces(route?.params.input)}
          style={{
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 1,
              paddingVertical: 15,
              borderWidth: 3,
            borderRadius: 6,
            borderColor: "black",
            marginTop:20,
            backgroundColor:"black"
          }}>
            <Text style={{textAlign:"center",fontSize:15,fontWeight:500,color:"white"}}>
                Check Availability
            </Text>
          </Pressable>

         
        </View>
        <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}>Explore More Options</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable  style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#D2122E",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}>
            <Text  style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}>Emergency</Text>

            <Text style={{ color: "white", fontSize: 15, fontWeight: "500"}}>Click here to connect with your nearest available Ambulance.</Text>
         </Pressable>

         <Pressable  style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#FFC72C",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}>
            <Text  style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}>HelpLine </Text>

            <Text style={{ color: "white", fontSize: 15, fontWeight: "500"}}>Click here for helpline numbers.</Text>
         </Pressable>

         <Pressable  style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#008B8B",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}>
            <Text  style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}>Hospitals</Text>

            <Text style={{ color: "white", fontSize: 15, fontWeight: "500"}}>Best Hospitals Near you</Text>
         </Pressable>
         </ScrollView>

         <Pressable  style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}>

            <Image  style={{ width: 200, height: 50, resizeMode: "cover" }} source={require("../../assets/logo.png")}/>
         </Pressable>
      </ScrollView>
         
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
