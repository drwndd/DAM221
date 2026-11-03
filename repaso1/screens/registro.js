
import { useState } from 'react';

import {StyleSheet,Text,View,TextInput,Pressable,Switch,Alert,ScrollView,SafeAreaView} from 'react-native';

export default function RegistroScreen() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {

    Alert.alert(
      'Registro de Evento',
      nombre === ''
        ? 'Debes escribir tu nombre'
        : carrera === ''
        ? 'Debes escribir tu carrera'
        : semestre === ''
        ? 'Debes escribir tu semestre'
        : 'Nombre: ' + nombre +
          'Carrera: ' + carrera +
          'Semestre: ' + semestre +
          'Taller: ' + (taller ? 'Sí' : 'No') +
          'Constancia: ' + (constancia ? 'Sí' : 'No') +
          'Deportes: ' + (deportes ? 'Sí' : 'No')
    );

  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.contenido}>

        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

       
        <Text style={styles.subtitulo}>
          Nombre completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

       
        <Text style={styles.subtitulo}>
          Carrera
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

      
        <Text style={styles.subtitulo}>
          Semestre
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.tituloOpciones}>
          Opciones
        </Text>

        <View style={styles.fila}>

          <Text>taller?</Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
            disabled={false}
            trackColor={{
              false: '#999999',
              true: '#540f65'
            }}
            thumbColor={taller ? '#ffffff' : '#eeeeee'}
          />

        </View>

      
        <View style={styles.fila}>

          <Text>constancia?</Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
            disabled={false}
            trackColor={{
              false: '#999999',
              true: '#420654'
            }}
            thumbColor={constancia ? '#ffffff' : '#eeeeee'}
          />

        </View>

        <View style={styles.fila}>

          <Text>deportes?</Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
            disabled={false}
            trackColor={{
              false: '#999999',
              true: '#420654'
            }}
            thumbColor={deportes ? '#ffffff' : '#eeeeee'}
          />

        </View>

        <Pressable
          onPress={enviarRegistro}
          disabled={false}
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado
          ]}
        >

          <Text style={styles.textoBoton}>
            Enviar Registro
          </Text>

        </Pressable>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  contenido: {
    padding: 20,
    paddingTop: 40,
  },


  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },

  tituloOpciones: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#420654',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },

  botonPresionado: {
    backgroundColor: '#c41cbc',
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
