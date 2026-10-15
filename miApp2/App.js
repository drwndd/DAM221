
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import wave from './assets/wave.png';
import { Saludo } from './src/components/Saludo';
import { Saludo2 } from './src/components/Saludo2';

//Zona de Renders o main
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={wave} style={{ width: 60, height: 60 }} />
      <Text>------------------------------</Text>
      <Saludo />
     <Saludo2 /> 
      <StatusBar style="auto" />
    </View>
  );
}

//Zona de estilos y posiciones
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

