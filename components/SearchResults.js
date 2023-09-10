import { FlatList, StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ({data,input,setInput}) => {
    const navigation = useNavigation();
  return (
    <View style={{padding:10}}>
      <FlatList data={ data } renderItem={({item}) => {
        if(item.place.toLowerCase().includes(input.toLowerCase())){
            if(input === ""){
                return null;
            }
            return (
                <Pressable onPress={() => {
                    setInput(item.place);
                    navigation.navigate("Bookings",{
                        input:item.place
                    })

                }} 
                style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                    <View>
                        <Image style={{width:70,height:70}} source={{uri:item.placeImage}}/>
                    </View>
                    <View>
                        <Text styles={{fontSize:15,fontWeight:"500"}}>{item.place}</Text>
                        <Text style={{marginVertical:4}}>{item.shortDescription}</Text>
                        <Text styles={{fontSize:15,color:"gray"}}>{item.properties.length}</Text>
                        
                    </View>
                </Pressable>
            )
        }

      }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})