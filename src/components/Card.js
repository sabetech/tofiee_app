import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Card = () => {
    return (
        <View style={styles.card}>
            <Image 
            source={{uri: 'https://images.unsplash.com/photo-1582719471180-aad67c6023c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'}} 
            style={styles.imageDim}
            />
            <View style = {styles.videoTitle}>
                <Text style={{fontSize:25}}
                ellipsizeMode="tail"
                numberOfLines={2}>
                    This is the video Title chechk out the width o fht etext distin
                </Text>
                <Text style={{fontSize: 16}}>This is the video Description</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        elevation: 10,
        marginBottom:50,
        height: 230
    },
    imageDim:{
        width: "100%",
        height: 200
    },
    videoTitle: {
        width: 300,
        marginLeft: 30
    }
});

export default Card;