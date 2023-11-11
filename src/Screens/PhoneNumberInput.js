import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const PhoneNumberInput = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleContinuePress = () => {
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.headText}>
        Enter your mobile number
        {'\n'} 
        {'\n'}
        <Text style={{
            fontSize: 16,
            color: "#7C7C7C"    
        }}>
            Mobile Number
        </Text>
      </Text>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedCountryCode}
          onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+91" value="+91" />
          <Picker.Item label="+84" value="+84" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Phone number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={()=> navigation.navigate('Verification')}>
        <Ionicons name="chevron-forward-outline" size={24} color="#FFF" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontFamily: "Gilroy",
    fontSize: 26,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    marginLeft: 10,
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "#53B175",
    borderRadius: 30, 
    width: 60, 
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default PhoneNumberInput;
