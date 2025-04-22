import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

interface TabIconProps {
  icon: ImageSourcePropType;
  label: string;
  focused: boolean;
}

const TabIcon = ({ icon, label, focused }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image
          source={icon}
          tintColor="#151312"
          className="size-5"
        />
        <Text className="text-secondary text-base font-semibold ml-2">
          {label}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image
        source={icon}
        tintColor="#A8B5DB"
        className="size-5"
      />
    </View>
  );
};

export default TabIcon;
