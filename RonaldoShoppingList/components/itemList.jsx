import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function ItemList({ item }) {
    return (
        <View style={StyleSheet.ItemList}>
            <View styles={{ flex: 1}}>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>

            {!item?.bought ?(
                <TouchableOpacity style={styles.actionIcon} onPress={() => {}}>
                    <Ionicons name='bag-check-outline' size={24} color='#fff'/>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.actionIcon} onPress={() => {}}>
                    <Ionicons name='bag-remove-outline' size={24} color='#fff'/>
                </TouchableOpacity>
            ) }
                <TouchableOpacity style={[styles.actionIcon]} onPress={() => {}}>
                    <Ionicons name='trash-bin-outline' size={24} color='#fff'/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ItemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#000000c0',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemName:{
        color: '#fff',
        fontSize: 24
    },
    actionIcon: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: 'darkgreen',
    }
})