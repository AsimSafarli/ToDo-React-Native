import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <View
      style={tw`bg-[#4A3780]  h-full flex items-center justify-center `}
    >
      <View style={tw`bg-white w-8/12 px-6 py-[13px] rounded-lg flex flex-col gap-[35px]`}>
        <View style={tw`flex items-center justify-center`}>
          <Image source={require('../assets/Logo.png')} />
        </View>
        <TouchableOpacity style={tw`bg-[#4A3780] rounded-lg flex items-center justify-center`}>
          <Text style={tw`text-white py-[8px] px-6 text-sm font-bold `}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`border-[#4A3780] border border-solid rounded-lg  flex items-center justify-center`} onPress={() => navigation.navigate('Login')}>
          <Text style={tw`text-[#4A3780] py-[8px] px-6 text-sm font-bold `} >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
