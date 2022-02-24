import {StyleSheet, Platform} from 'react-native';

export const colors = {
  PRIMARY_WHITE: '#fffbfc',
  SLATE_GRAY: '#235458',
};

export const typography = {
  MEDIUM: 14,
  MEDIUM_LG: 16,
  LARGE: 20,
};

interface iKeyboardViewConfig {
  behavior: 'padding' | 'height' | 'position' | undefined;
  keyboardVerticalOffset: number;
}

export const keyboardViewConfig: iKeyboardViewConfig = {
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  keyboardVerticalOffset: Platform.OS === 'ios' ? 10 : 50,
};

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.PRIMARY_WHITE,
  },
  f1: {
    flex: 1,
  },
  inputContainer: {
    flexGrow: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexGrow: 0.6,
    justifyContent: 'center',
  },
});
