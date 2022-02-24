import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {useAppSelector} from '../../utils/hooks';

import {
  colors as C,
  sharedStyles,
  typography as T,
} from '../../styles/baseStyles';

const NameScreen = () => {
  const {firstName, lastName, zipCode} = useAppSelector(state => state);

  const nothingEnteredMessage = 'Nothing Entered Yet';

  const config = [
    {title: 'First Name', value: firstName},
    {title: 'Last Name', value: lastName},
    {title: 'Zip Code', value: zipCode},
  ];

  return (
    <SafeAreaView style={sharedStyles.container}>
      <View style={styles.textContainer}>
        {config.map(({title, value}) => (
          <React.Fragment key={title}>
            <Text style={styles.titleTextStyle}>{title}</Text>
            <View style={styles.innerTextContainer}>
              <Text style={styles.textStyle}>
                {value || nothingEnteredMessage}
              </Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: T.LARGE,
    color: C.SLATE_GRAY,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textStyle: {
    fontSize: T.LARGE,
    color: C.PRIMARY_WHITE,
  },
  textContainer: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerTextContainer: {
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: C.SLATE_GRAY,
    width: '80%',
    borderRadius: 30,
  },
});

export default NameScreen;
