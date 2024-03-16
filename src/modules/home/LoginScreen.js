import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const userState = useSelector(state => state.user);
  console.log(userState, '____________');
  console.log(phoneNumber, '______');
  return (
    <ImageBackground
      source={require('../../assets/bg.jpeg')}
      style={styles.backgroundImage}>
      <View className="absolute w-full bg-white bottom-0 left-0 rounded-lg p-10">
        <View className="mb-8">
          <Text className="text-black text-center">Welcome to</Text>
          <Text
            className="text-black text-center text-3xl text-blue"
            style={{color: 'blue', fontWeight: '700'}}>
            OxyCart India
          </Text>
          <Text className="text-gray-500 text-center" style={{fontSize: 13}}>
            Login with your phone number
          </Text>
        </View>
        <View className="py-4 pb-20">
          <PhoneNumberInput onPhoneNumberChange={setPhoneNumber} />
          <TouchableOpacity>
            <Text
              className="text-right mt-2"
              style={{color: 'blue', fontWeight: '600'}}>
              Use E-mail
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className={`w-full h-10 ${
            phoneNumber.length === 10 ? 'bg-blue-600 ' : 'bg-gray-400'
          }  justify-center items-center rounded-sm`}>
          <Text className="text-white">Continue</Text>
        </TouchableOpacity>
        <Text
          className="text-ssm mt-3"
          style={{fontSize: 11, textAlign: 'center'}}>
          By continuing, you agree to our Terms of Use and Privecy Policy
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
  },
});
