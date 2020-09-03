import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const VideoPlayer = ({route}) => {
    const {videoId, title} = route.params;
    
    return (
        <SafeAreaView>
            <View style={{width: '100%',
                          height: 200
                        }}>
                <WebView 
                    javaScriptEnabled={true}
                    source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                />
            </View>
            <Text style={{
                fontSize: 20,
                width: Dimensions.get('screen').width - 50,
                margin: 9

            }}>
                {title}
            </Text>
            <View style={{borderBottomWidth:1}}/>
        </SafeAreaView>
    )

}

export default VideoPlayer;