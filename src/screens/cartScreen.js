import { Button, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/context/CartContext";




export default function CartScreen(props) {

    // const [cart, setCart] = useState([])
    const theme = useTheme()
    const [openConfirm, setOpenConfirm] = useState(false)
    const [total, setTotal] = useState(0)
    const {state : CartState, setCart, clearCart} = useContext(CartContext)


    useEffect(() => {
        if (CartState.value.data.length > 0) {
            let temp = 0
            CartState.value.data.map((item, index) => {
                temp = (item.qty * Number(item.price)) + temp
            })
            setTotal(temp)
        }

    }, [CartState])

    function handleIncrement(index) {

        const incrementItem = CartState.value.data.map((eachItem, index1) => {
            if (index === index1) {
                return ({ ...eachItem, qty: eachItem.qty + 1 })
            } else {
                return eachItem
            }
        })
        setCart(incrementItem)

    }

    function handleRemoveItem (item) {
        const temp = CartState.value.data.filter((eachItem, index) => index !== item)
        setCart([...temp])
    }

    return (
        <Layout style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingBottom: 20 }}>
            <Layout style={{ width: '100%', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#EAEAEA', borderRadius: 20, padding: 10 }} onPress={() => props.navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={20} style={{ color: 'black' }} />
                    </TouchableOpacity>
                    <Text category="h6" style={{ marginLeft: 10 }} >Cart</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setOpenConfirm(true)}}>
                    <Text status="success" category="p1">Done</Text>
                </TouchableOpacity>
            </Layout>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}
                contentContainerStyle={{ backgroundColor: 'transparent', paddingBottom: 20 }}>
                {CartState.value.data?.map((eachItem, index) => (
                    <View key={index} style={{ width: '100%', flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ padding: 10, backgroundColor: '#EAEAEA', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{ uri: eachItem?.image }} />
                        </View>
                        <View style={{ justifyContent: 'space-between', paddingHorizontal:20, flex:1 }}>
                            <View style={{ width:'100%', flexDirection: 'row', justifyContent:'space-between', }}>
                                <Text>{eachItem.item}</Text>
                                <TouchableOpacity onPress={()=> handleRemoveItem(index)} style={{ backgroundColor: theme['color-danger-500'], borderRadius: 50, alignItems: 'center', justifyContent: 'center', }}>
                                    <Entypo name="cross" size={20} style={{ color: 'white' }} />
                                </TouchableOpacity>
                            </View>
                            <Text category="label">${eachItem.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: theme['color-danger-500'], borderRadius: 50, alignItems: 'center', justifyContent: 'center', }}>
                                    <Entypo name="minus" size={20} style={{ color: 'white' }} />
                                </View>
                                <Text category="p2" style={{ marginLeft: 10 }}>{eachItem.qty}</Text>
                                <TouchableOpacity onPress={() => handleIncrement(index)} style={{ backgroundColor: theme['color-danger-500'], borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                    <Entypo name="plus" size={20} style={{ color: 'white' }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                ))}

            </ScrollView>
            {openConfirm &&

                <TouchableOpacity onPress={()=> setOpenConfirm(false)} style={{ position: 'absolute', width: '100%', height: '100', backgroundColor: '#00000042', top:0, right:0, left:0, bottom:0 }}>

                    <Layout style={{ width: '100%', height: 250, position: 'absolute', bottom: 0, backgroundColor: '#EAEAEA', borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 20 }}>
                        <Text category="p2" style={{ color: '#818181' }}>Delivery Address</Text>
                        <Input style={{ marginTop: 10 }} size="large" value={process.env.EXPO_PUBLIC_ADDRESS} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: '#818181' }}>Total</Text>
                            <Text category="h5" style={{ marginLeft: 10, color: theme['color-danger-500'] }}>${total}</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button onPress={()=> props.navigation.navigate({name : 'payment', params : {total : total}})}>Place Order</Button>
                        </View>
                    </Layout>
                </ TouchableOpacity>

            }
        </Layout>
    )
}  