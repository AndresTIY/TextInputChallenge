import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {colors as C, typography as T} from '../styles/baseStyles';

interface iCustomInput {
  label: string;
  onChange: (x: string) => void;
  value: string;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput: React.FC<iCustomInput> = ({
  onChange,
  label,
  value,
  autoFocus,
  keyboardType,
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoFocus={autoFocus}
        onChangeText={onChange}
        value={value}
        placeholder={label}
        keyboardType={keyboardType}
        style={styles.textInputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: '80%',
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: T.MEDIUM_LG,
    color: C.SLATE_GRAY,
    marginBottom: 10,
    borderColor: C.SLATE_GRAY,
  },
  textInputStyle: {
    height: 50,
    borderColor: C.SLATE_GRAY,
    borderWidth: 3,
    borderRadius: 25,
    paddingLeft: 10,
  },
});

export default CustomInput;
