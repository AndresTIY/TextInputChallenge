jest.mock('react-native/Libraries/Utilities/Platform', () => {
  let platform = {
    OS: 'ios',
  };

  const select = jest.fn().mockImplementation(obj => {
    const value = obj[platform.OS];
    return !value ? obj.default : value;
  });

  platform.select = select;

  return platform;
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
