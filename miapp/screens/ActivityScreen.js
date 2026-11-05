import { StyleSheet, View, Text } from 'react-native';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>

        <Text> Practica 16 </Text>
        <Text> Alexa </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});