import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"
import { Alert } from 'react-native'

const HomeScreen = () => {

    const[displayCurrentAddress,setdisplayCurrentAddress]= useState("loading your location")
    const[locationServicesEnabled,setlocationServicesEnabled]=useState(false)

    // useEffect to check wheather location is enabled in phone or not
    useEffect(()=>{
        checkIfLocationEnabled();
        getCurrentLocation();
    }, [])

    const checkIfLocationEnabled = async()=>{
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled){
            Alert.alert(
                "Location services not enabled",
                "Please enable the Location services",
                [
                    {
                        text:"Cancel",
                        onPress:()=> console.log("cancle pressed"),
                        style:"cancel"
                    },
                    {
                        text:"OK",
                        onPress:()=> console.log("OK pressed ")
                    },
                ],
                    {cancelable:false}
            )
        }else{
            setlocationServicesEnabled(enabled)
        }
    }

    //getting lattitude & longitude
    const getCurrentLocation = async()=>{
        let{status} = await Location.requestForegroundPermissionsAsync();

        if (status!== granted){
            Alert.alert(
                " Permission denied",
                "Allow the app to use Location services",
                [
                    {
                        text:"Cancel",
                        onPress:()=> console.log("cancle pressed"),
                        style:"cancel"
                    },
                    {
                        text:"OK",
                        onPress:()=> console.log("OK pressed ")
                    },
                ],
                    {cancelable:false}
            ) 
        }
    }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})