import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';
import { Category } from '../type';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>

        {/* Category Card */}
        {categories && categories.map((category: Category) => (
          <CategoryCard 
          key={category._id}
          _id={category._id} 
          imgUrl={urlFor(category.image.asset._ref).width(200).url()} 
          name={category.name}/>
        ))}
    </ScrollView>
  )
}

export default Categories