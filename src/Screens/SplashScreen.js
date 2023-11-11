import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Thực hiện các công việc cần thiết ở đây, chẳng hạn như kiểm tra trạng thái đăng nhập và điều hướng tới màn hình chính.
    setTimeout(() => {
      navigation.replace('Main'); // Chuyển hướng tới màn hình chính (đổi 'Main' thành tên màn hình chính của bạn).
    }, 5000); // Thời gian hiển thị splash screen (2 giây trong trường hợp này).
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../Asset/icon.png')} style={styles.image} />
        <Text style={styles.text}>
          nectar
          {'\n'}
          <Text style={styles.subText}>online groceries</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
  },
  text: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'boldGilroy',
  },
  subText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Gilroy',
    letterSpacing: 3, // Giãn cách giữa các chữ cái
  },
});

export default SplashScreen;
