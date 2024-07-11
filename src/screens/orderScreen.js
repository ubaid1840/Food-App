import { Button, Layout, Text } from "@ui-kitten/components";
import { Image, View } from "react-native";
import Constants from 'expo-constants'
import { useContext } from "react";
import { CartContext } from "../store/context/CartContext";



export default function OrderScreen(props) {

    const {state : CartState, clearCart} = useContext(CartContext)

    return (
        <Layout style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingTop: Constants.statusBarHeight, paddingBottom: 20 }}>
            <View />
            <View style={{alignItems:'center'}}>
                <Image style={{ width: 200, height: 200 }} source={require('../../assets/stars.png')} />
                <Text category='h5' style={{ marginTop:10}}>Congratulations</Text>
                <Text appearance='hint'>Your order has been placed</Text>
            </View>
            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                <Button onPress={() => {
                    clearCart()
                    props.navigation.replace('main')}}>Home</Button>
            </View>
        </Layout>
    )
}