import { Button, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import Constants from 'expo-constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";


export default function PaymentScreen(props) {

  const [selectedOption, setSelectedOption] = useState('')
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState("");
  const [validThrough, setValidThrough] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = () => {
    props.navigation.navigate('order')
  };

  const handleValidThroughChange = (text) => {
    if (text.length === 2 && !text.includes("/")) {
      text = text + "/";
    } else if (text.length === 2 && text.includes("/")) {
      text = text.replace("/", "");
    }

    if (text.length <= 5) {
      setValidThrough(text);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Constants.statusBarHeight}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
        <Layout style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingBottom: 20 }}>
          <View style={{ width: '100%' }}>
            <Layout style={{ width: '100%', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#EAEAEA', borderRadius: 20, padding: 10 }} onPress={() => props.navigation.goBack()}>
                  <MaterialIcons name="keyboard-arrow-left" size={20} style={{ color: 'black' }} />
                </TouchableOpacity>
                <Text category="h6" style={{ marginLeft: 10 }}>Payment</Text>
              </View>
            </Layout>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setSelectedOption('COD')} style={[{ borderRadius: 10, padding: 20, backgroundColor: '#EAEAEA' }, selectedOption === 'COD' && { borderWidth: 2, borderColor: theme['color-primary-500'] }]}>
                  {selectedOption === 'COD' &&
                    <View style={{ height: 20, width: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: theme['color-primary-500'], position: 'absolute', right: -5, top: -10, borderWidth: 2, borderColor: 'white' }}>
                      <MaterialIcons name="check" size={10} style={{ color: 'white' }} />
                    </View>
                  }
                  <Image source={require('../../assets/payment/cash.png')} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <Text category="p1" style={{ marginTop: 5 }}>Cash</Text>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setSelectedOption('CARD')} style={[{ borderRadius: 10, padding: 20, backgroundColor: '#EAEAEA' }, selectedOption === 'CARD' && { borderWidth: 2, borderColor: theme['color-primary-500'] }]}>
                  {selectedOption === 'CARD' &&
                    <View style={{ height: 20, width: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: theme['color-primary-500'], position: 'absolute', right: -5, top: -10, borderWidth: 2, borderColor: 'white' }}>
                      <MaterialIcons name="check" size={10} style={{ color: 'white' }} />
                    </View>
                  }
                  <Image source={require('../../assets/payment/card.png')} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <Text category="p1" style={{ marginTop: 5 }}>Card</Text>
              </View>
            </View>
          </View>

          {selectedOption === "CARD" &&
            <Layout style={{ flex: 1, padding: 20 }}>
              <Text category='h5' style={styles.title}>Enter Card Details</Text>
              <Text appearance='hint' style={styles.subtitle}>Please fill in the details below</Text>
              <Input
                label="Card Number"
                placeholder="Enter your card number"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
                style={styles.input}
              />
              <Input
                label="Valid Through (MM/YY)"
                placeholder="MM/YY"
                value={validThrough}
                onChangeText={handleValidThroughChange}
                keyboardType="numeric"
                style={styles.input}
              />
              <Input
                label="CVV"
                placeholder="Enter CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
                secureTextEntry
                style={styles.input}
              />
            </Layout>
          }
        </Layout>
      </ScrollView>

      <Layout style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#818181' }}>Total</Text>
          <Text category="h5" style={{ marginLeft: 10, color: '#FF3D71' }}>${props.route.params.total}</Text>
        </View>

        <Button disabled={selectedOption == 'COD' ? false : !cardNumber || !validThrough || !cvv ? true : false} style={{ marginTop: 20 }} onPress={handleSubmit}>Confirm</Button>
      </Layout>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})