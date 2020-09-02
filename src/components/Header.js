import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Header() {
    const navigation = useNavigation();
return (
    <SafeAreaView style={styles.topBar}>
        <View >
            <Image style={styles.logo} source={require('../../assets/tofiee_logo.png')}/>
        </View>
        <View style={styles.rightIcons}>
            <Ionicons name="md-search" size={32} color={"darkblue"} onPress={ ()=> navigation.navigate('search')}/>
            <MaterialIcons name="account-circle" size={32} color={"darkblue"} />
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    topBar:{
        height: 90,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4, //this only works in android .. find out iOS version
        
    },
    logo: {
        width: 200,
        height: 58,
    },
    rightIcons: {
        marginTop: 15,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
