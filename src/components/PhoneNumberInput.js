import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const PhoneNumberInput = ({onCountryCodeChange, onPhoneNumberChange}) => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Call the provided callback functions whenever the values change
  const handleCountryCodeChange = code => {
    setCountryCode(code);
    onCountryCodeChange(code);
  };

  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
    onPhoneNumberChange(number);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.countryCodeInput}
        placeholder="Country Code"
        value={countryCode}
        onChangeText={handleCountryCodeChange}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.phoneNumberInput}
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#14141450',
    borderRadius: 5,
  },
  countryCodeInput: {
    flex: 1,
    marginRight: 0,
    borderBottomColor: 'gray',
    paddingHorizontal: 10,
    height: 50,
    fontSize: 16,
  },
  phoneNumberInput: {
    flex: 9, // Adjusted flex value
    fontSize: 16,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default PhoneNumberInput;
