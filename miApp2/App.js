
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import wave from './assets/wave.png';
import { Saludo } from './src/components/Saludo';
import { Saludo2 } from './src/components/Saludo2';
import { Carrera } from './src/components/Perfil/Carrera';
import { Cuatrimestre } from './src/components/Perfil/Cuatrimestre';
import { Materia } from './src/components/Perfil/Materia';
import { Nombre } from './src/components/Perfil/Nombre';

//Zona de Renders o main
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={wave} style={{ width: 60, height: 60 }} />
      <Text>------------------------------</Text>
      <Saludo />
       <Text>------------------------------</Text>
     <Saludo2 /> 
      <Text>------------------------------</Text>
     <Nombre />
      <Text>------------------------------</Text>
     <Cuatrimestre />
      <Text>------------------------------</Text>
     <Carrera />
      <Text>------------------------------</Text>
     <Materia />
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

