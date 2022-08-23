import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://www.pngmart.com/files/22/Sedan-PNG-Transparent.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
    screen: "EatScreen",
  },
  {
    id: "789",
    title: "Ride Buddy",
    image:
      "https://cdn-icons.flaticon.com/png/512/720/premium/720245.png?token=exp=1661181074~hmac=1d712c6d7dadc8884c5872ed87de516a",
    screen: "ServicesScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            onPress={() => navigation.navigate(item.screen)}
            disabled={!origin}
          >
            <View style={!origin && styles.opacity}>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-blue-900 rounded-full w-10 mt-3`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.1,
  },
});
