
import { useState, useEffect } from 'react';
import {StyleSheet,View,Text,TextInput,ImageBackground,Pressable,ActivityIndicator,FlatList,Alert,} from 'react-native';

export default function RepasoScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  const agregarLibro = () => {
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      setLibros(lista => [...lista, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);

      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  if (cargando) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTitulo}>
          Registro de Libros
        </Text>
        <Text style={styles.splashTexto}>
          Bienvenido
        </Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/IMG_2482.jpeg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.capa}>
        <Text style={styles.titulo}>
          Catálogo de Libros
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#666"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#666"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#666"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={[
            styles.boton,
            guardando && styles.botonDesactivado
          ]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          <Text style={styles.textoBoton}>
            {guardando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {guardando && (
          <View style={styles.espera}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.textoEspera}>
              Guardando libro...
            </Text>
          </View>
        )}

        <Text style={styles.total}>
          Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
          contentContainerStyle={styles.lista}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  capa: {
    flex: 1,
    padding: 15,
    paddingTop: 55,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#000',
  },
  boton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  botonDesactivado: {
    backgroundColor: '#888',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  espera: {
    alignItems: 'center',
    marginBottom: 15,
  },
  textoEspera: {
    color: '#fff',
    marginTop: 10,
  },
  total: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  lista: {
    paddingBottom: 30,
  },
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombreLibro: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  splash: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  splashTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  splashTexto: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
});
