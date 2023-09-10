import { StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';

    export default function Home() {
        const description1 = 
           "WE TAKE CARE OF YOUR HEALTH";
           
        return ( 
          <View style={styles.back}>
        <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
        <Image 
          style={styles.headerImage}
          source={require("../../assets/homedoc.jpg")}
        />
      
        <Text style={styles.mainHeader}>MyHealth
        </Text>
        <Text
         style={[
            styles.mainHeader,
             {
               fontSize:33,
               color:"red",
               marginTop:0,
             },
            ]}>
           
            </Text>
            <Text style={styles.paraStyle1}>{description1} </Text>
           
          
        </View>
      
        </View>
        </View>
         );
      }
      
      const styles = StyleSheet.create({
      
         back: {
          backgroundColor:"#35a7ff",
          height:"100%"
      
          },
      
      
        mainContainer: {
          height: " 100% ",
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal:20,
          backgroundColor:"#35a7ff",
          textAlign:"centre",
      
        },
      
        homeTop: {
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
      
        },
      
        headerImage: {
          height:undefined,
          width:"100%",
          aspectRatio: 1,
          display: "flex",
          alignItems:"stretch",
          marginTop: 50,
          borderRadius: 20,
      
          },
      
          mainHeader: {
            fontSize:50,
            color: "#ffffff",
            textTransform:"uppercase",
            fontWeight:"900"
          },
      
          paraStyle1: { 
            textAlign:"right",
            fontSize:19,
            color:"#ffffff",
            marginTop:30,
            fontWeight:'bold',
            lineHeight: 26,
          },

        });