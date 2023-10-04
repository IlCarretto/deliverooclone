import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IRestaurant } from '../type'
import {StarIcon} from "react-native-heroicons/solid";
import {MapPinIcon} from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import {useNavigation} from "@react-navigation/native";

interface IRestaurantCard extends IRestaurant {
  imgUrl: Object;
}

const RestaurantCard = ({_id, imgUrl, name, rating, type, address, short_description, dishes, long, lat}: IRestaurantCard) => {

  const navigation = useNavigation();
  
  return (
    <TouchableOpacity className='bg-white mr-3 shadow' onPress={() => {
      (navigation as any).navigate('Restaurant', {
        _id, 
        imgUrl,
        name, 
        rating, 
        type, 
        address, 
        short_description, 
        dishes, 
        long, 
        lat
      })}}>
      <Image
      source={{uri: urlFor(imgUrl.asset._ref).url()}}
      className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{name}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating}</Text> - {Object.values(type)}
            </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
            <MapPinIcon color='gray' opacity={0.4} size={22}/>
            <Text className='text-xs text-gray-500'>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard