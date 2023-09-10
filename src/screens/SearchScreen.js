import { StyleSheet, Text, View ,SafeAreaView, TextInput} from 'react-native'
import React ,{useEffect, useState} from 'react'

import { Feather } from "@expo/vector-icons";
import SearchResults from '../../components/SearchResults';

const SearchScreen = () => {
    const [input,setInput] = useState("");
    const data = [
        {
            id: "0",
            place: "Raebareli",
            placeImage:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Collage_Places_in_Raebareli.jpg/450px-Collage_Places_in_Raebareli.jpg",
            shortDescription: "City in Uttar Pradesh, India",
            properties: [
              {
                id: "10",
                name: "Devati DK Memorial Medical and Cardiac Center",
                image:
                  "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
                rating: 4.6,
                address:
                  "Near Degree College Chowraha, Canal Road, Rae Bareli",
                latitude: "26.218214227278857",
                longitude: "81.24238189567268",
               
              },
              {
                id: "11",
                image:
                  "https://www.sehat.com/hospital_logos/1640059325logo-full-width.png",
                name: "AIIMS(All India Institute of Medical Science)",
                rating: 4.7,
                address:
                  "Dalmau Road, Munshiganj, Rae Bareli, Uttar Pradesh - 229405",
                latitude: "26.179485387712667",
                longitude: "81.24320375149385",
                
               
              },
              {
                id: "12",
                name: "Aarogya Medical Center",
                rating: 4.2,
                address:
                  "Kanpur Road, Below Bank of Baroda, Rana Nagar, Rae Bareli, Uttar Pradesh - 229001",
                latitude: "26.223031481639968",
                longitude: "81.2291830263471",
                image:
                  "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=600",
               
              },
            ],
          },
          {
            id: "2",
            place: "Lucknow",
            placeImage:
              "https://tse3.mm.bing.net/th?id=OIP.jy5CMstkDpSKv45T3hB_UwHaFj&pid=Api&P=0&h=180",
            shortDescription: "City in Uttar Pradesh, India",
            properties: [
              {
                id: "20",
                name: "Apollomedics Super Speciality Hospital",
                rating: 4.8,
                address:
                  "Lda Colony Sector G, Lucknow",
                  latitude: "26.79855216196793",
                  longitude: "80.90150278034903",
                  image:
                  "https://images.clinicspots.com/tr:n-facility_profile_desktop/MiVwVCTLvbdYjCmMsd8Ou1CLO1qTeAVwo51YqaVz.jpeg",
                
              },
              {
                id: "22",
                name: "Sahara Hospital",
                rating: 4.5,
                address:
                  "Gomtinagar, Lucknow",
                  latitude: "26.805825382877327",
                  longitude: "80.89776485305175",
                  image:
                  "https://images.clinicspots.com/tr:n-facility_profile_desktop/oNiQXBGeuTMAUYENzmbhq9HQpGGMdLX1bf36OIf2.jpeg"
              },
            ],
          },
        ];
  
  return (
    <SafeAreaView>
    <View  style={{
          padding: 10,
          margin: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor:"black",
          borderWidth:4,
          borderRadius:10,
          
        }}>
    <TextInput  value={input} onChangeText={(text) => setInput(text)} placeholder="Enter Your Destination" />
        <Feather name="search" size={22} color="black" />
    </View>

    <SearchResults data={data} input={input} setInput={setInput}/>
      
      </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})