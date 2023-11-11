import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const Signin = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF9FF" }}>
      <SafeAreaView>
        <Image source={require('../Asset/flower.png')} />

        <View style={styles.container}>
          <Text style={styles.headText}>
            Get your groceries
            {'\n'}
            with nectar
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={countryCode}
                onValueChange={(itemValue) => setCountryCode(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="+1" value="+1" />
                <Picker.Item label="+91" value="+91" />
                <Picker.Item label="+84" value="+84" />
              </Picker>
            </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                onPressIn={() => navigation.navigate('PhoneNumberInput')}
              />
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', marginTop: 20,}}>
          <Text style={{fontFamily: "Gilroy", fontSize: 14, color: "#828282"}}>
            Or connect with social media
          </Text>

          <View style={{marginTop: 10,}}>
            <TouchableOpacity style={styles.btnGoogle} >
              <View style={styles.btnContent}>
                <Ionicons name="logo-google" size={24} color="#FFF9FF" style={styles.icon} />
                <Text style={styles.btnText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFb} >
              <View style={styles.btnContent}>
                <Ionicons name="logo-facebook" size={24} color="#FFF9FF" style={styles.icon} />
                <Text style={styles.btnText}>Continue with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headText: {
    fontFamily: "medGilroy",
    fontSize: 26,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  picker: {
    height: 50,
    width: 80,
    fontFamily: "medGilroy",
  },
  input: {
    flex: 1,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    fontFamily: "medGilroy",
  },
  btnGoogle: {
    backgroundColor: "#5383EC",
    width: 320,
    height: 60,
    borderRadius: 20,
    marginVertical: 10,
  },
  btnFb: {
    backgroundColor: "#4A66AC",
    width: 320,
    height: 60,
    borderRadius: 20,
    marginVertical: 10,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  btnText: {
    fontFamily: "Gilroy",
    color: "#FFF9FF",
    fontSize: 18,
    textAlign: 'center', 
    lineHeight: 60, 
  },
});

export default Signin;
