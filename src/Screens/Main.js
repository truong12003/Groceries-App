import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../Asset/man.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../Asset/icon.png')}/>
        <Text style={{
            marginTop: 20,
            textAlign: "center",
            color: 'white',
            fontSize: 48,
            fontFamily: "Gilroy",
        }}>
            Welcome {'\n'}to our store
        </Text>

        <Text style={{
            opacity: 0.5,
            marginBottom: 30,
            textAlign: "center",
            color: 'white',
            fontSize: 16,
            fontFamily: "medGilroy",
        }}>
            Ger your groceries in as fast as one hour
        </Text>

        <TouchableOpacity style={styles.btnStart} onPress={()=> navigation.navigate('Sign in')}>
            <Text style={{
                fontFamily: "Gilroy",
                color: "#FFF9FF",
                fontSize: 18,
                textAlign: 'center', 
                lineHeight: 60, 
            }}>
                Get started
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems: 'center',
  },
  btnStart:{
    backgroundColor: "#53B175",
    width: 320,
    height: 60,
    borderRadius: 20,
    marginBottom: 70,
  }
});

export default MainScreen;
