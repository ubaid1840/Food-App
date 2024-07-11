import { Text, useTheme } from "@ui-kitten/components"
import { useEffect, useState } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons'
import { fetchRandomImage } from "./randomImage"



export default function MenuComponent({ onHandleAddItemToCart, eachItem }) {
    const [image, setImage] = useState()
    const theme = useTheme()
    useEffect(() => {
        const loadImage = async () => {
            const image = await fetchRandomImage();
            setImage(image);
        };

        loadImage();
    }, []);

    return (
        <View style={styles.card}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
              <Image style={{height:100, width:100, borderRadius:50}} source={{uri : image}} />
            </View>
            <Text style={{ marginBottom: 5 }} category="label">{eachItem.item}</Text>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text category="label">${eachItem.price}</Text>
                <TouchableOpacity style={{ backgroundColor: theme['color-primary-500'], borderRadius: 30, height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                    onHandleAddItemToCart({...eachItem, image :image})
                }}>
                    <Octicons name="plus" size={17} style={{ color: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
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