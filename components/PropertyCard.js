import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  const PropertyCard = ({
    property,
    selectedDates,
  }) => {
    const { width, height } = Dimensions.get("window");
    const navigation = useNavigation();
    return (
      <View>
        <Pressable
          style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
        >
          <View>
            <Image
              style={{ height: height / 4, width: width - 280 }}
              source={{ uri: property.image }}
            />
          </View>
  
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ width: 200 }}>{property.name}</Text>
              <AntDesign name="hearto" size={24} color="red" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{property.rating}</Text>
              <View
                style={{
                  backgroundColor: "#6CB4EE",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 15 }}
                >
                  Appointment Available
                </Text>
              </View>
            </View>
  
            <Text
              style={{
                width: 210,
                marginTop: 6,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              {property.address.length > 50
                ? property.address.substr(0, 50)
                : property.address}
            </Text>
  
            <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
              Cardiology
            </Text>
  
          </View>
        </Pressable>
      </View>
    );
  };
  
  export default PropertyCard;
  
  const styles = StyleSheet.create({});