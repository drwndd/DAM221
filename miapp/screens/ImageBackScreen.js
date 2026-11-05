import { StyleSheet, View, Text} from 'react-native';

export default function ImageBackScreen() {
  return (
    <View style={styles.container}>

        <Text> Practica 14 </Text>
        <Text> Bersa </Text>

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