import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useEffect } from "react";

const data = [
  {
    id: "Uber-C-123",
    title: "UberC",
    rate: 1,
    image: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
  },
  {
    id: "Uber-CL-123",
    title: "UberCL",
    rate: 1.5,
    image:
      "https://cdn-icons.flaticon.com/png/512/2736/premium/2736953.png?token=exp=1661219149~hmac=13b11cc72cc879f940ff5efed5854391",
  },
  {
    id: "Uber-CY-123",
    title: "UberCY",
    rate: 1.65,
    image:
      "https://cdn-icons.flaticon.com/png/512/2330/premium/2330453.png?token=exp=1661219099~hmac=8928ea7efc79a6a110bd2be4ae46f9e7",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon
            name="chevron-left"
            type="font-awesome"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, image, id, rate }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              tw`flex-row items-center justify-between px-10`,
              id === selected?.id && { backgroundColor: "#a1a1a1" },
            ]}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  rate) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-gray-500 py-3 m-3 ${!selected && "bg-gray-100"} `}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RideOptionCard;

const styles = StyleSheet.create({});
