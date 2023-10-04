import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react'
import { IDish } from '../type'
import { urlFor } from '../sanity';
import { PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWidthId } from '../features/basketSlice';
import { RootState } from '../store';

const DishRow = ({_id, name, short_description, price, image }: IDish) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => selectBasketItemsWidthId(state, _id));

  const addItemToBasket = () => {
    dispatch(addToBasket({_id, name, short_description, price, image}))
  }
  
  const removeItemFromBasket = () => {
    if (!items.length) {
      return;
    }
    dispatch(removeFromBasket({_id}));
  }

  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
      <View className='flex-row'>
        <View className='flex-1 pr-2'>
          <Text className='text-lg mb-1'>{name}</Text>
          <Text className='text-gray-400'>{short_description}</Text>
          <Text className='text-gray-400 mt-2'>${price}</Text>
        </View>
        <View>
          <Image
          style={{borderWidth: 1, borderColor: '#F3F3F4'}}
          source={{uri: urlFor(image.asset._ref).url()}}
          className='h-20 w-20 bg-gray-300 p-4'/>
        </View>
      </View>
    </TouchableOpacity>

    {isPressed && (
      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 pb-3'>
          <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
            <MinusCircleIcon color={items.length > 0 ? "#00CCBB" : 'gray'} size={40}/>
          </TouchableOpacity>

          <Text>{items.length}</Text>

          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00CCBB" size={40}/>
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  )
}

export default DishRow