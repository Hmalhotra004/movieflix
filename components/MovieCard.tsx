import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface MovieCardProps {
  movieData: Movie;
}

const MovieCard = ({ movieData }: MovieCardProps) => {
  return (
    <Link
      href={`/movies/${movieData.id}`}
      asChild
    >
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : `https://placehold.co/600x400/1a1a1a/fffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-white font-bold text-sm mt-2"
          numberOfLines={1}
        >
          {movieData.title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image
            source={icons.star}
            className="size-4"
          />
          <Text className="text-white text-xs font-bold uppercase">
            {Math.round(movieData.vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {movieData.release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
