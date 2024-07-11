import {  Layout, Text, useTheme } from "@ui-kitten/components";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons'
import Constants from 'expo-constants'
import { restaurantsList } from "../components/data";
import { useContext, useEffect, useState } from "react";
import MenuComponent from "../components/menuComponent";
import { CartContext } from "../store/context/CartContext";




export default function RestaurantScreen(props) {

    const [selectedRestaurant, setSelectedRestaurant] = useState()
    const theme = useTheme()
    const { state: CartState, setCart } = useContext(CartContext)

    useEffect(() => {
        const filterRestaurant = restaurantsList.filter((item, index) => index === props.route.params.id)
        setSelectedRestaurant(filterRestaurant[0])

    }, [props.route])

    function handleAddItemToCart(item) {
        const temp = [...CartState.value.data]
        temp.push({...item, qty : 1})
        setCart([...temp])

    }



    return (
        <Layout style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingBottom: 20 }}>
            <Layout style={{ width: '100%', padding: 20, justifyContent: 'space-between', flexDirection: 'row', }}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#EAEAEA', borderRadius: 20, padding: 10 }} onPress={() => props.navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={20} style={{ color: 'black' }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 20, padding: 10, marginLeft: 5 }} onPress={() => {
                        props.navigation.navigate({ name: 'cart' })
                    }}>
                        {CartState.value.data.length > 0 && <View style={{ backgroundColor: 'orange', borderRadius: 20, position: 'absolute', height: 20, width: 20, right: 0, top: -10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 10 }}>{CartState.value.data.length}</Text>
                        </View>}
                        
                            <MaterialIcons name="shopping-cart" size={20} style={{ color: 'white' }} />
                       
                    </TouchableOpacity>
                </View>
            </Layout>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}
                contentContainerStyle={{ backgroundColor: 'transparent', paddingBottom: 20 }}>
                {selectedRestaurant ?
                    <>
                        <Image style={{ width: '100%', height: 200, borderRadius: 20 }} source={selectedRestaurant?.image} />
                        <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{selectedRestaurant?.name}</Text>
                        <Text category="c2" style={{ marginTop: 5, color: '#818181', lineHeight: 20 }}>{selectedRestaurant?.description}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="star-outline" size={25} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14 }}>{selectedRestaurant?.rating}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="delivery-dining" size={25} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14, marginLeft: 5 }}>${selectedRestaurant?.deliveryFee}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Octicons name="clock" size={20} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14, marginLeft: 5 }}>{selectedRestaurant?.deliveryTime}</Text>
                            </View>
                        </View>

                        {selectedRestaurant.menu.map((eachMenu, index) => (
                            <View key={index}>
                                <Text style={styles.category}>{eachMenu.category}</Text>
                                <View style={styles.row}>
                                    {eachMenu.items.map((eachItem, itemIndex) => (
                                        <MenuComponent
                                            key={itemIndex}
                                            eachItem={eachItem}
                                            onHandleAddItemToCart={handleAddItemToCart} />
                                    ))}
                                </View>
                            </View>
                        ))}
                    </> : null}

            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
});