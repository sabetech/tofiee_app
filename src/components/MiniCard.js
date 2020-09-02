import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const MiniCard = (props) =>{
    return (
        <View style={styles.mini_card}>
            <Image 
            source={{uri: `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`}} 
            style={styles.imageDim}
            />
            <View style={{padding: 10}}>
                <Text
                    style={{
                        fontSize:20,
                        width:Dimensions.get('screen').width/2
                    }}
                    ellipsizeMode= "tail"
                    numberOfLines= {3}
                >{props.title}</Text>

                <Text style={{fontSize:16,
                    width:Dimensions.get('screen').width/2}}
                    ellipsizeMode= "tail"
                    numberOfLines= {3}> 
                    {props.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mini_card:{
        flexDirection: "row",
        marginTop:15,

    },
    imageDim:{
        width: "45%",
        height: 110,
        marginLeft: 5
    },
    videoTitle: {
        width: 300,
        marginLeft: 30
    }
}
);

export default MiniCard;