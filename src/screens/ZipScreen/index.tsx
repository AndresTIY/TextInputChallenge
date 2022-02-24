import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, KeyboardAvoidingView, View} from 'react-native';
import {CustomButton, CustomInput} from '../../components';
import {ZipScreenNavigationProps} from '../../navigation/navigation';
import {setZipCode} from '../../store/actions/action';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {sharedStyles, keyboardViewConfig as K} from '../../styles/baseStyles';

const ZipScreen = () => {
  const dispatch = useAppDispatch();
  const {zipCode} = useAppSelector(state => state);
  const {navigate} = useNavigation<ZipScreenNavigationProps>();

  const handleZipCodeChange = (text: string) => {
    dispatch(setZipCode(text));
  };

  const navToNextScreen = () => {
    navigate('DisplayScreen');
  };

  return (
    <SafeAreaView style={sharedStyles.container}>
      <KeyboardAvoidingView
        behavior={K.behavior}
        keyboardVerticalOffset={K.keyboardVerticalOffset}
        style={sharedStyles.f1}>
        <View style={sharedStyles.inputContainer}>
          <CustomInput
            label={'ZipCode'}
            value={zipCode}
            onChange={handleZipCodeChange}
            keyboardType="number-pad"
            autoFocus={true}
          />
        </View>
        <View style={sharedStyles.buttonContainer}>
          <CustomButton onPress={navToNextScreen} text={'Next'} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ZipScreen;
