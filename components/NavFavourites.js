import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "twrnc";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, Uk",
  },
  {
    id: "345",
    icon: "briefcase",
    location: "Work",
    destination: "London eye, London, Uk",
  },
  {
    id: "347",
    icon: "ios-home",
    location: "Church",
    destination: "London eye, London, Uk",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-100`, { height: 0.8 }]} />
      )}
      renderItem={({ item: { location, icon, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={20}
          />
          <View>
            <Text style={tw`font-semibold text-lg text-gray-500`}>
              {location}
            </Text>
            <Text style={tw`font-semibold text-lg text-gray-700`}>
              {destination}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
