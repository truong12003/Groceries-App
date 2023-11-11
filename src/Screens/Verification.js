// Verification.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();

  const handleContinuePress = () => {
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.headText}>
        Enter your 4-digit code
        {'\n'} 
        {'\n'}
        <Text style={{
            fontSize: 16,
            color: "#7C7C7C"    
        }}>
            Code
        </Text>
      </Text>

      {/* TextInput cho nhập mã xác nhận */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Verification code"
          keyboardType="numeric"
          maxLength={4} // Giới hạn số ký tự nhập vào là 4
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
        />
      </View>

      <TouchableOpacity >
        <Text style={{fontFamily: "medGilroy", color: '#53B175'}}>
            Resend code
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
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
  input: {
    height: 50,
    width: 300,
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

export default Verification;
