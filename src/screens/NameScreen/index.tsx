import React from 'react';
import {SafeAreaView, View, KeyboardAvoidingView} from 'react-native';
import {setFirstName, setLastName} from '../../store/actions/action';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {useNavigation} from '@react-navigation/native';
import {NameScreenNavigationProps} from '../../navigation/navigation';
import {CustomButton, CustomInput} from '../../components';
import {sharedStyles, keyboardViewConfig as K} from '../../styles/baseStyles';

const NameScreen = () => {
  const dispatch = useAppDispatch();
  const {firstName, lastName} = useAppSelector(state => state);
  const {navigate} = useNavigation<NameScreenNavigationProps>();

  const handleFirstNameOnChange = (text: string) => {
    dispatch(setFirstName(text));
  };
  const handleLastNameOnChange = (text: string) => {
    dispatch(setLastName(text));
  };

  const config = [
    {label: 'First Name', value: firstName, onChange: handleFirstNameOnChange},
    {label: 'Last Name', value: lastName, onChange: handleLastNameOnChange},
  ];

  const navToNextScreen = () => {
    navigate('ZipScreen');
  };

  return (
    <SafeAreaView style={sharedStyles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={K.keyboardVerticalOffset}
        behavior={K.behavior}
        style={sharedStyles.f1}>
        <View style={sharedStyles.inputContainer}>
          {config.map((item, i) => (
            <CustomInput
              key={item.label}
              label={item.label}
              value={item.value}
              onChange={item.onChange}
              autoFocus={i === 0}
              keyboardType="name-phone-pad"
            />
          ))}
        </View>
        <View style={sharedStyles.buttonContainer}>
          <CustomButton onPress={navToNextScreen} text={'Next'} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NameScreen;
