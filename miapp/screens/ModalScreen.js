import { StyleSheet, View, Text } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>

        <Text> Practica 15 </Text>
        <Text> Daniela </Text>

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