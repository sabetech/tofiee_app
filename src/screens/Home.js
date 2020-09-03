import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

//https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFJtQ1-OfZNz4p_kDz_Lhkw&maxResults=10&key=AIzaSyA35a1ebn-cJ21TsO3iLlrz8yCJIHIoDVQ
export default function HomeScreen() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const myURL = 'https://jsonplaceholder.typicode.com/photos?_limit=20';
  
  useEffect(() => {
      //setLoading(true);
      
      let load = true;
      fetch(myURL)
      .then(res => res.json())
      .then(data => {
        if (load){
          setCardData(data);
        }
            
      });
      return () => {
        load = false;
        
      }
    }
  );

  return (
    <View style={{flex: 1}} >
      <Header />

      {loading ? <ActivityIndicator style={{marginTop: 10}} size="large" color="darkblue"/> : null}

      <FlatList 
            data={cardData}
            renderItem={
                ({item}) =>{
                return <Card 
                    videoId={item.id}
                    title={item.title}
                    description={item.thumbnailUrl}
                    url={item.thumbnailUrl}
                />
                }
            }
            keyExtractor={item=>item.id+''}
            />
      
    </View>
  );
}
