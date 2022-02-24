import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors as C, typography as T} from '../styles/baseStyles';

interface iCustomButton {
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<iCustomButton> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 32,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: C.SLATE_GRAY,
  },
  textStyle: {
    fontSize: T.LARGE,
    color: C.PRIMARY_WHITE,
    fontWeight: 'bold',
  },
});

export default CustomButton;
