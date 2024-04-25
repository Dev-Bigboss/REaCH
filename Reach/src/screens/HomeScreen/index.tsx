import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";



const HomeScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<any, any>;
}) => {
  return (
    <ScrollView className="flex-1 bg-white px-3 pt-2">
      <View className="flex-row justify-between items-center">
        <Text>home</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
