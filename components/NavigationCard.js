import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning Utana</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            enablePoweredByContainer={false}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data?.description,
                })
              );
              navigation.navigate("RideOptionCard");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly border-t border-gray-100 py-2 mt-auto`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionCard")}
          style={tw`flex-row bg-gray-700 justify-between w-24 px-4 py-3 rounded-full items-center justify-center`}
        >
          <Icon name="car" type="font-awesome" color="white" size={18} />
          <Text style={`text-white text-center`}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row bg-gray-100 justify-between w-24 px-4 py-3 rounded-full items-center justify-center`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="gray"
            size={18}
          />
          <Text style={`text-gray-700 text-center`}>Eat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigationCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#edebe4",
    borderRadius: 0,
    fontSize: 20,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
