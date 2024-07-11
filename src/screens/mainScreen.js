import { Icon, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons'
import Constants from 'expo-constants'
import { useContext, useEffect, useState } from "react";
import { categoriesArray, restaurantsList } from "../components/data";
import { CartContext } from "../store/context/CartContext";




export default function MainScreen(props) {

    const SearchIcon = (props) => (
        <Icon name='search-outline' {...props} />
    )

    

    const theme = useTheme()
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [searchQuery, setSearchQuery] = useState('All')
    const {state : CartState} = useContext(CartContext)

    useEffect(()=>{
        if(searchQuery != 'All'){
            const result =  searchRestaurants(searchQuery)
        }
    },[searchQuery])

    const searchRestaurants = (query) => {
        query = query.toLowerCase();
        return restaurantsList.filter(restaurant => {
            // Check if the query matches any tags
            if (restaurant.tags.some(tag => tag.toLowerCase().includes(query))) {
                return true;
            }
            // Check if the query matches any category names in the menu
            if (restaurant.menu.some(category => category.category.toLowerCase().includes(query))) {
                return true;
            }
            // Check if the query matches any item names in the menu
            for (let category of restaurant.menu) {
                if (category.items.some(item => item.item.toLowerCase().includes(query))) {
                    return true;
                }
            }
            return false;
        });
    };


    return (
        <Layout style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingBottom: 20 }}>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}
                contentContainerStyle={{ backgroundColor: 'transparent', paddingBottom: 20 }}>
                <Layout style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between',  marginTop:10 }}>
                    <Layout>
                        <Text style={{ fontSize: 10, fontWeight: 700 }} status="primary">DELIVER TO</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>{process.env.EXPO_PUBLIC_ADDRESS}</Text>
                            <MaterialIcons name="arrow-drop-down" size={20} style={{ color: 'black' }} />
                        </TouchableOpacity>

                    </Layout>
                    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 20, padding: 10,  }} onPress={() => {
                        props.navigation.navigate({ name: 'cart'})
                    }}>
                        {CartState.value.data.length > 0 && <View style={{ backgroundColor: 'orange', borderRadius: 20, position: 'absolute', height: 20, width: 20, right: 0, top: -10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 10 }}>{CartState.value.data.length}</Text>
                        </View>}
                        
                            <MaterialIcons name="shopping-cart" size={20} style={{ color: 'white' }} />
                       
                    </TouchableOpacity>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Text>{`Hey ${process.env.EXPO_PUBLIC_NAME}, `}</Text>
                    <Text style={{ fontWeight: 700 }}>Good Afternoon!</Text>
                </Layout>
                <Input size="large" accessoryLeft={SearchIcon} placeholder="Search dishes, restaurants" onChangeText={setSearchQuery}/>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
                    <Text category="h6">All Categories</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text category="label">
                            See All
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </Layout>
                <ScrollView showsHorizontalScrollIndicator={false} style={{ width: '100%' }} horizontal contentContainerStyle={{ padding: 10, height: 80, marginVertical: 10 }}>
                    {categoriesArray.map((item, index) => (
                        <TouchableOpacity onPress={() => {
                            setSelectedCategory(index)
                            setSearchQuery(item.name)
                        }} key={index} style={{
                            flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 50,
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 0,
                            elevation: 2,
                            backgroundColor: selectedCategory === index ? theme['color-primary-200'] : 'white',
                            marginRight: 20
                        }}>
                            <Layout style={{ borderRadius: 50, padding: 5, backgroundColor: '#F6F6F6' }}>
                                <Image source={item.image} style={{ width: 30, height: 30 }} resizeMode="contain" />
                            </Layout>
                            <Text style={{ marginHorizontal: 10, fontWeight: 700 }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
                    <Text category="h6">Open Restaurants</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text category="label">
                            See All
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </Layout>
                {searchQuery == 'All' ?
                 restaurantsList.map((item, index) => (
                    <Layout key={index} style={{ marginTop: 20 }}>
                        <Image style={{ width: '100%', height: 150, borderRadius: 20 }} source={item.image} />
                        <TouchableOpacity onPress={() => {
                        props.navigation.navigate({ name: 'restaurant', params: { id: item.originalIndex } })}}>
                        <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            {item.tags.map((eachTag, index) => (
                                <Text key={index} style={{ color: '#969696', fontSize: 12 }}>{eachTag.toLocaleLowerCase()}{item.tags.length == index + 1 ? "" : " - "}</Text>
                            ))}
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="star-outline" size={25} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14 }}>{item.rating}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                <MaterialIcons name="delivery-dining" size={25} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.deliveryFee}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                <Octicons name="clock" size={20} style={{ color: theme['color-primary-500'] }} />
                                <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.deliveryTime}</Text>
                            </View>
                        </View>
                    </Layout>
                ))
            :
            searchRestaurants(searchQuery).map((item, index) => (
                <TouchableOpacity onPress={() => props.navigation.navigate({ name: 'restaurant', params: { id: item.originalIndex  } })} key={index} style={{ marginTop: 20 }}>
                    <Image style={{ width: '100%', height: 150, borderRadius: 20 }} source={item.image} />
                    <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {item.tags.map((eachTag, index) => (
                            <Text key={index} style={{ color: '#969696', fontSize: 12 }}>{eachTag.toLocaleLowerCase()}{item.tags.length == index + 1 ? "" : " - "}</Text>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="star-outline" size={25} style={{ color: theme['color-primary-500'] }} />
                            <Text style={{ fontSize: 14 }}>{item.rating}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                            <MaterialIcons name="delivery-dining" size={25} style={{ color: theme['color-primary-500'] }} />
                            <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.deliveryFee}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                            <Octicons name="clock" size={20} style={{ color: theme['color-primary-500'] }} />
                            <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.deliveryTime}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});