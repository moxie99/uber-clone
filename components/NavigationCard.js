import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const NavigationCard = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <Text style={tw`text-center py-5 text-xl`}>Good Morning Utana</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
